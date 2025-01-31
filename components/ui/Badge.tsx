import { ReportStatus } from "@/types"
import Paragraph from "../typography/Paragraph"

type IProps = {
  status: string
}

const getBadgeUi = (status: string): { s: string; bgColor: string } => {
  if (status === ReportStatus.HIGH) return { s: "Urgent", bgColor: "bg-high" }

  if (status === ReportStatus.MID)
    return { s: "Récurrent", bgColor: "bg-purple" }

  return { s: "•", bgColor: "bg-greenForm" }
}

const Badge = ({ status }: IProps) => {
  const { s, bgColor } = getBadgeUi(status)

  return (
    <>
      <div className={`px-2 py-2 text-center ${bgColor}`}>
        <Paragraph text={s} addStyle="font-semibold text-white" />
      </div>
    </>
  )
}

export default Badge
