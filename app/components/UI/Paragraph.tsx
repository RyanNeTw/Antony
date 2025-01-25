import { FC } from "react"

type IProps = {
  text: string
  addStyle?: string
}

const Paragraph: FC<IProps> = ({ text, addStyle }) => {
  return <p className={`text-sm ${addStyle}`}>{text}</p>
}

export default Paragraph
