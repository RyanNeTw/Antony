type IProps = {
  text: string
  addStyle?: string
}

const SubmitButton = ({ text, addStyle }: IProps) => {
  return (
    <>
      <button
        type="submit"
        className={`text-white bg-greenForm py-4 px-6 self-end ${addStyle}`}
      >
        {text}
      </button>
    </>
  )
}

export default SubmitButton
