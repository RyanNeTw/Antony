import { useDeleteReportAiMutation } from "@/redux/reportsAi"
import Title from "../Title"
import Badge, { getBadgeUi } from "../Badge"
import Loading from "../Loading"
import Inputs from "../Inputs"
import IsDeletedButton from "./IsDeletedButton"
import { ReportAi, SignalmentsFilter } from "@/types"
import { useEffect } from "react"
import Paragraph from "@/components/typography/Paragraph"
import dayjs from "dayjs"
import TextAreas from "../TextAreas"

type IProps = {
  id: string
  isLoading: boolean
  isError: boolean
  signalment: ReportAi | null
}

const Signalement = ({ isError, isLoading, signalment, id }: IProps) => {
  const [deleteReportAi] = useDeleteReportAiMutation()

  useEffect(() => {
    if (!isLoading && !isError && signalment) {
      deleteReportAi({ id, is_read: true }).unwrap()
    }
  }, [isLoading, isError, signalment, id, deleteReportAi])

  if (isLoading) return <Loading />
  if (isError || !signalment) return <p>Erreur</p>

  const report = signalment.reports[0]
  const address = `${report?.street_number} ${report?.street}, 92160 Antony`

  console.log({ signalment })

  return (
    <div className="w-full m-2">
      <Title
        text={`Signalement ${getBadgeUi(signalment.status).s} de ${signalment.users[0]?.firstname} ${signalment.users[0]?.lastname}`}
      />
      <div className="flex flex-col gap-2">
        <Paragraph
          text={`Date de création : ${dayjs(signalment.created_at).format("DD/MM/YYYY")}`}
          addStyle="italic text-xs"
        />
        <div className="w-2/5">
          <Badge status={signalment.status} />
        </div>
        <Inputs
          readonly
          placeholder={`Nombre d'itération : ${signalment.count}`}
          addStyle="w-2/5"
        />
        <div className="flex flex-row gap-2">
          <Inputs
            readonly
            placeholder={`${signalment.users[0]?.firstname} ${signalment.users[0]?.lastname}`}
            addStyle="w-2/5"
          />
          <Inputs readonly placeholder={signalment.title} addStyle="w-3/5" />
        </div>
        <Inputs readonly placeholder={address} addStyle="w-full" />
        <TextAreas readonly placeholder={report?.report} addStyle="w-full" />
        <IsDeletedButton
          id={id}
          filter={signalment.is_deleted ? SignalmentsFilter.DELETED : null}
        />
      </div>
    </div>
  )
}

export default Signalement
