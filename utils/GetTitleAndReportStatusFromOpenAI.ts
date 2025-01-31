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
          content:
            "Vous etes un assistant specialise dans l analyse des rapports d infrastructure. Analysez le rapport et creez un titre concis et professionnel et en francais. Le titre doit faire 4 mots.",
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
