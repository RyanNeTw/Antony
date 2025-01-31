import useSWR from "swr"
import Fetcher, { ReponseType } from "../utils/Fetcher"
import { ReportAis, SignalmentsFilter, TypeComponent } from "../types"

import { useSearchParams } from "next/navigation"
import Badge from "./ui/Badge"
import SubmitButton from "./ui/SubmitButton"
import Loading from "./ui/Loading"

const AddQueryToUrl = (filter: string | null): string => {
  switch (filter) {
    case SignalmentsFilter.NOT_CONSULTED:
      return "&is_read=false&is_deleted=false"
    case SignalmentsFilter.CONSULTED:
      return "&is_read=true&is_deleted=false"
    case SignalmentsFilter.DELETED:
      return "&is_deleted=true"
    default:
      return ""
  }
}

const SignalementTable = () => {
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter")
  const url = `/api/reports_ai?nbr=100&page=1${AddQueryToUrl(filter)}`

  const { data, error, isLoading } = useSWR<ReponseType<ReportAis>>(
    url,
    Fetcher
  )

  if (isLoading) return <Loading />
  if (error || !data) return <p>Erreur : {error.message}</p>

  const isDeletedFilter = SignalmentsFilter.DELETED === filter
  const RecoverReportAi = (id: string) => {
    fetch(`/api/reports_ai/${id}`, {
      method: "PUT",
      body: JSON.stringify({ is_deleted: !isDeletedFilter }),
    })
  }

  console.log({ data })

  return (
    <>
      <table className="min-w-full">
        <tbody className="flex flex-col gap-2">
          {data.data.map((signalement, index) => {
            return (
              <tr
                key={index}
                className={`flex flex-wrap md:flex-nowrap justify-between gap-4`}
              >
                <td className="flex-1">
                  <Badge status={signalement.status} />
                </td>
                <td className="flex-1 px-4 py-2 text-white bg-[#747474]">
                  {signalement.title}
                </td>
                <td className="flex-1 px-4 py-2 bg-[#F2F2F2] text-gray-800">
                  {signalement.reports[0]?.street}
                </td>
                <td className="flex-1 px-4 py-2 bg-[#F2F2F2] text-pink-600">
                  {signalement.users[0]?.firstname +
                    " " +
                    signalement.users[0]?.lastname}
                </td>
                <td
                  className="flex-1"
                  onClick={() => RecoverReportAi(signalement.id)}
                >
                  <SubmitButton
                    text={isDeletedFilter ? "Récupérer" : "Supprimer"}
                    type={
                      isDeletedFilter ? TypeComponent.WARNING : TypeComponent.OK
                    }
                  />
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
