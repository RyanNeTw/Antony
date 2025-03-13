import { SignalmentsFilter } from "../../../types"
import Badge from "../Badge"
import Loading from "../Loading"
import Link from "next/link"
import IsDeletedButton from "./IsDeletedButton"
import { useSearchParams } from "next/navigation"
import { useGetReportsAiQuery } from "@/redux/reportsAi"

const AddQueryToUrl = (
  filter: string | null
): { is_deleted?: boolean; is_read?: boolean } => {
  switch (filter) {
    case SignalmentsFilter.NOT_CONSULTED:
      return { is_deleted: false, is_read: false }
    case SignalmentsFilter.CONSULTED:
    case SignalmentsFilter.CONSULTED_RECENTLY:
      return { is_deleted: false, is_read: true }
    case SignalmentsFilter.DELETED:
      return { is_deleted: true }
    default:
      return { is_deleted: false }
  }
}

const SignalementTable = ({
  isAuthenticated = false,
}: {
  isAuthenticated?: boolean
}) => {
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter")
  const { data, isLoading, isError } = useGetReportsAiQuery(
    AddQueryToUrl(filter)
  )
  const signalments = data?.data
  if (isLoading) return <Loading />
  if (isError || !signalments) return <p>Erreur</p>

  const tdStyle = "flex-1 px-4 py-2 text-sm"

  return (
    <>
      <table className="min-w-full mx-2">
        <tbody className="flex flex-col gap-2">
          {signalments.map((signalement, index) => {
            const reportLink = isAuthenticated
              ? `/admin/dashboard/${signalement.id}`
              : `/dashboard/${signalement.id}`

            return (
              <tr
                key={index}
                className={`flex flex-wrap md:flex-nowrap justify-between gap-4`}
              >
                <td className="flex-1">
                  <Link href={reportLink}>
                    <Badge status={signalement.status} />
                  </Link>
                </td>
                <td className={`${tdStyle} text-white bg-[#747474]`}>
                  {signalement.title}
                </td>
                <td className={`${tdStyle} bg-[#F2F2F2] text-gray-800`}>
                  {signalement.reports[0]?.street}
                </td>
                <td className={`${tdStyle} bg-[#F2F2F2] text-pink-600`}>
                  {signalement.users[0]?.firstname +
                    " " +
                    signalement.users[0]?.lastname}
                </td>
                {isAuthenticated && (
                  <td className="flex-1">
                    <IsDeletedButton id={signalement.id} filter={filter} />
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default SignalementTable
