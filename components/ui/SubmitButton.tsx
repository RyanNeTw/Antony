import { TypeComponent } from "@/types"

type IProps = {
  text: string
  addStyle?: string
  type?: TypeComponent
}

const SubmitButton = ({ text, addStyle, type = TypeComponent.OK }: IProps) => {
  return (
    <>
      <button
        type="submit"
        className={`text-white ${type} py-4 px-6 self-end ${addStyle}`}
      >
        {text}
      </button>
    </>
  )
}

export default SubmitButton
