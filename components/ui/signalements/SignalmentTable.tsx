import { SignalmentsFilter } from "../../../types"
import { useSearchParams } from "next/navigation"
import Badge from "../Badge"
import Loading from "../Loading"
import { useGetReportsAiQuery } from "@/redux/reportsAi"
import Link from "next/link"
import IsDeletedButton from "./IsDeletedButton"

const AddQueryToUrl = (
  filter: string | null
): { is_deleted?: boolean; is_read?: boolean } => {
  switch (filter) {
    case SignalmentsFilter.NOT_CONSULTED:
      return { is_deleted: false, is_read: false }
    case SignalmentsFilter.CONSULTED:
      return { is_deleted: false, is_read: true }
    case SignalmentsFilter.DELETED:
      return { is_deleted: true }
    default:
      return { is_deleted: false }
  }
}

const SignalementTable = () => {
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter")

  const { data, isLoading, isError } = useGetReportsAiQuery(
    AddQueryToUrl(filter)
  )

  if (isLoading) return <Loading />
  if (isError || !data) return <p>Erreur</p>

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
                  <Link href={`/admin/dashboard/${signalement.id}`}>
                    <Badge status={signalement.status} />
                  </Link>
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
                <td className="flex-1">
                  <IsDeletedButton id={signalement.id} filter={filter} />
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
