import supabase from '../supabase'
import { OpenAiType } from '../types'

const CreateReportAi = async (data: OpenAiType): Promise<string | null> => {
  const { error, data: reportAi } = await supabase
    .from('reports_ai')
    .insert(data)
    .select('*')
    .maybeSingle()

  if (error) {
    throw new Error(`Could'nt create new report`, error)
  }

  return reportAi?.id ?? null
}

export default CreateReportAi
