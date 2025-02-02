import {
  useGetReportAiQuery,
  useDeleteReportAiMutation,
} from "@/redux/reportsAi"
import Title from "../Title"
import Badge, { getBadgeUi } from "../Badge"
import Loading from "../Loading"
import { useParams } from "next/navigation"
import Inputs from "../Inputs"
import IsDeletedButton from "./IsDeletedButton"
import { SignalmentsFilter } from "@/types"
import { useEffect } from "react"

const Signalement = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useGetReportAiQuery({ id })
  const [deleteReportAi] = useDeleteReportAiMutation()

  useEffect(() => {
    if (!isLoading && !isError && data) {
      deleteReportAi({ id, is_read: true }).unwrap()
    }
  }, [isLoading, isError, data, id, deleteReportAi])

  if (isLoading) return <Loading />
  if (isError || !data) return <p>Erreur</p>

  const signalment = data.data
  const report = signalment.reports[0]
  const address = `${report?.street_number} ${report?.street}, 92160 Antony`

  return (
    <div>
      <Title
        text={`Signalement ${getBadgeUi(signalment.status).s} de ${signalment.users[0]?.firstname} ${signalment.users[0]?.lastname}`}
      />
      <div className="flex flex-col gap-2">
        <div className="w-2/5">
          <Badge status={signalment.status} />
        </div>
        <div className="flex flex-row gap-2">
          <Inputs
            readonly
            placeholder={`${signalment.users[0]?.firstname} ${signalment.users[0]?.lastname}`}
            addStyle="w-2/5"
          />
          <Inputs readonly placeholder={signalment.title} addStyle="w-3/5" />
        </div>
        <Inputs readonly placeholder={address} addStyle="w-full" />
        <Inputs readonly placeholder={report.report} addStyle="w-full" />
        <IsDeletedButton
          id={id}
          filter={signalment.is_deleted ? SignalmentsFilter.DELETED : null}
        />
      </div>
    </div>
  )
}

export default Signalement
