import { OpenAiType } from "../types"

const GetTitleAndReportStatusFromOpenAI = async (
  content: string
): Promise<OpenAiType | null> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content:
              'Vous êtes un assistant spécialisé dans l\'analyse des rapports d\'infrastructure. Analysez le rapport et créez un titre concis et professionnel. Évaluez l\'urgence de la situation : - HIGH : problèmes urgents présentant des risques pour la sécurité ou nécessitant une intervention immédiate - MID : problèmes importants mais non urgents - LOW : problèmes peu importants voir a ignorer. IMPORTANT: Répondez en format JSON avec la structure suivante: { "title": "Titre du rapport", "status": "HIGH|MID|LOW" }',
          },
          { role: "user", content },
        ],
        max_tokens: 150,
        temperature: 1,
      }),
    })
    const res = await response.json()
    const data = JSON.parse(res?.choices[0]?.message?.content)

    return data ?? null
  } catch (error) {
    console.error(`Error while fetching on AI`, { error })
    return null
  }
}
export default GetTitleAndReportStatusFromOpenAI
