import React from "react"

type IProps = {
  text: string
  addStyle?: string
}

const Title = ({ text, addStyle }: IProps) => {
  return <h1 className={`title ${addStyle}`}>{text}</h1>
}

export default Title
