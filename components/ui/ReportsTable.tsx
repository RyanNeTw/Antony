import { Reports, Users } from "@/types"
import Title from "./Title"

type IProps = {
  reports: Reports
  users: Users
}

const ReportsTable = ({ users, reports }: IProps) => {
  const tdStyle = "flex-1 px-4 py-2 text-sm"
  return (
    <>
      <table className="min-w-full mt-12">
        <Title text="Listes des signalements" />
        <tbody className="flex flex-col gap-2">
          {reports.map((report, index) => {
            const user = users.find((u) => u.id === report.user_id)
            if (!user) return

            return (
              <tr
                key={index}
                className={`flex flex-wrap md:flex-nowrap justify-between gap-4`}
              >
                <td className={`${tdStyle} text-white bg-[#747474]`}>
                  {user.firstname} {user.lastname}
                </td>
                <td className={`${tdStyle} bg-[#F2F2F2] text-gray-800`}>
                  {report.street_number} {report.street}
                </td>
                <td className={`${tdStyle} bg-[#F2F2F2] text-pink-600`}>
                  {report.report}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default ReportsTable
