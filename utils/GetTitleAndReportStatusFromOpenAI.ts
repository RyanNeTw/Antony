import { zodResponseFormat } from "openai/helpers/zod.mjs"
import { OpenAiType, OpenAiTypeZod } from "../types"
import OpenAI from "openai"
import SanitizeString from "./SanitizeString"

const openai = new OpenAI({
  apiKey: process.env["NEXT_PUBLIC_OPEN_AI_KEY"],
})

const GetTitleAndReportStatusFromOpenAI = async (
  report: string
): Promise<OpenAiType | null> => {
  try {
    const x = await openai.beta.chat.completions.parse({
      model: "gpt-4o-2024-08-06",
      messages: [
        {
          role: "system",
          content: SanitizeString(
            "Vous êtes un assistant spécialisé dans l'analyse des rapports d'infrastructure. Votre tâche consiste à analyser le contenu du rapport fourni et à en extraire deux mots-clés significatifs qui résument les principaux enjeux ou observations. À partir de ces mots-clés, générez un titre concis et professionnel en français, composé de 2 mots exactement. Le titre doit refléter l'essence du rapport tout en étant facilement compréhensible. Pour garantir la cohérence, le titre doit être composé d'un mot de la liste 'Type de route' et d'un mot de la liste 'Type d'infrastructure' : **Type de route (10 mots) :** Boulevard, Avenue, Rue, Route, Chemin, Autoroute, Ruelle, Place, Passage, Carrefour. **Type d'infrastructure (20 mots) :** Lampadaire, Arbre, Parking, Trottoir, Éclairage, Signalisation, Banc, Pont, Tunnel, Chaussée, Égout, Poteau, Feu, Abribus, Piste, Parc, Fontaine, Glissière, Barrière, Réseau. Assurez-vous que le titre généré utilise un mot de chaque liste et respecte l'ordre suivant : [Type de route] + [Type d'infrastructure]."
          ),
        },
        {
          role: "user",
          content: SanitizeString(report),
        },
      ],
      response_format: zodResponseFormat(OpenAiTypeZod, "report"),
      max_tokens: 200,
      temperature: 1,
    })

    return x?.choices[0]?.message?.parsed ?? null
  } catch (e) {
    console.warn({ e })
    return null
  }
}
export default GetTitleAndReportStatusFromOpenAI
