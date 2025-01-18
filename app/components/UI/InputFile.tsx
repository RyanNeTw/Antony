type IProps = {
  label?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  name?: string
  value?: string | number
  addStyle?: string
  readonly?: boolean
}

const InputFile = ({
  label,
  placeholder,
  onBlur,
  onChange,
  name,
  value = "",
  addStyle,
  readonly = false,
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
        <input
          className="py-2 px-4 text-xs bg-blue text-white"
          type="file"
          multiple
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          readOnly={readonly}
        />
      </div>
    </>
  )
}

export default InputFile
