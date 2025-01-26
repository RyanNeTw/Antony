import useSWR from "swr"
import Fetcher, { ReponseType } from "../utils/Fetcher"
import { ReportAis } from "../types"
import Badge from "./UI/Badge"
import { useSearchParams } from "next/navigation"

const AddQueryToUrl = (): string => {
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter")

  switch (filter) {
    case "Non-Consultés":
      return "&is_read=false"
    case "Consultés":
      return "&is_read=true"
    case "Supprimés":
      return "&is_deleted=true"
    default:
      return ""
  }
}

const SignalementTable = () => {
  const url = `/api/reports_ai?nbr=100&page=1${AddQueryToUrl()}`

  const { data, error, isLoading } = useSWR<ReponseType<ReportAis>>(
    url,
    Fetcher
  )

  if (isLoading) return <p>Chargement...</p>
  if (error || !data) return <p>Erreur : {error.message}</p>

  return (
    <>
      <table className="min-w-full">
        <tbody>
          {data.data.map((signalement, index) => {
            return (
              <tr
                key={index}
                className={`border-t-[16px] border-transparent flex flex-wrap md:flex-nowrap justify-between gap-4`}
              >
                <td className="flex-1">
                  <Badge status={signalement.status} />
                </td>
                <td className="flex-1 px-4 py-2 text-white bg-[#747474]">
                  {signalement.title}
                </td>
                <td className="flex-1 px-4 py-2 bg-[#F2F2F2] text-gray-800">
                  {signalement.reports[0].street}
                </td>
                <td className="flex-1 px-4 py-2 bg-[#F2F2F2] text-pink-600">
                  {signalement.users[0]?.firstname +
                    " " +
                    signalement.users[0]?.lastname}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default SignalementTable
