import supabase from "../supabase"

type IProps = {
  street: string
  street_number: number
  street_1?: string | null
  street_2?: string | null
  report: string
  report_ai_id: string
  user_id: string
}

const CreateReport = async (data: IProps): Promise<boolean> => {
  const { error } = await supabase.from("reports").insert(data)

  if (error) {
    throw new Error(`Could'nt create new report`, error)
  }

  return !Boolean(error)
}

export default CreateReport
