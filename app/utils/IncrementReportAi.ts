import supabase from "../supabase"

type IProps = {
  id: string
  count: number
}

const IncrementReportAi = async ({
  id,
  count,
}: IProps): Promise<string | null> => {
  const { error, data } = await supabase
    .from("reports_ai")
    .update({ count: count + 1 })
    .eq("id", id)
    .select("*")
    .maybeSingle()

  if (error) return null
  return data?.id ?? null
}

export default IncrementReportAi
