import dayjs from "dayjs"
import supabase from "../supabase"

type IProps = {
  street: string
  title: string
}

const MatchingReports = async ({
  street,
  title,
}: IProps): Promise<{ id: string; count: number } | null> => {
  const { data, error } = await supabase
    .from("reports_ai")
    .select("*, reports(*)")
    .lte("reports.date", dayjs().add(3, "month").format("YYYY-MM-DD"))
    .gte("reports.date", dayjs().subtract(3, "month").format("YYYY-MM-DD"))
    .match({ "reports.street": street, title })
    .maybeSingle()

  if (error) return null
  return data?.reports?.length > 0 ? { id: data.id, count: data.count } : null
}

export default MatchingReports
