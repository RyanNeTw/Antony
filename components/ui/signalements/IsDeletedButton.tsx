import { SignalmentsFilter, TypeComponent } from "../../../types"
import { useDeleteReportAiMutation } from "@/redux/reportsAi"
import SubmitButton from "../SubmitButton"

type IProps = {
  id: string
  filter: string | null
}

const IsDeletedButton = ({ id, filter }: IProps) => {
  const [deleteReport] = useDeleteReportAiMutation()

  const isDeletedFilter = SignalmentsFilter.DELETED === filter
  const RecoverReportAi = async (id: string) => {
    await deleteReport({ id, is_deleted: !isDeletedFilter }).unwrap()
  }
  return (
    <div className="w-full h-full" onClick={() => RecoverReportAi(id)}>
      <SubmitButton
        text={isDeletedFilter ? "Récupérer" : "Supprimer"}
        type={isDeletedFilter ? TypeComponent.OK : TypeComponent.WARNING}
      />
    </div>
  )
}

export default IsDeletedButton
