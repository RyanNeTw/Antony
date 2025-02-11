type IProps = {
  label?: string
  placeholder?: string
  name?: string
  addStyle?: string
  readonly?: boolean
  isError?: boolean
}

const TextAreas = ({
  label,
  placeholder,
  name,
  addStyle,
  readonly = false,
  isError = false,
}: IProps) => {
  return (
    <>
      <div className={`flex flex-col gap-1 ${addStyle}`}>
        {label && (
          <label
            className="text-purple text-xs font-medium pl-2"
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <textarea
          className={`py-2 px-4 text-xs bg-backgroundInput ${isError && "border-2 border-warning"}`}
          id={name}
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
        />
      </div>
    </>
  )
}

export default TextAreas
