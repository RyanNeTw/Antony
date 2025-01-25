type IProps = {
  label: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  name?: string
  value?: string
  addStyle?: string
  iteration?: number
}

const Radios = ({
  label,
  addStyle,
  name,
  onBlur,
  onChange,
  iteration = 1,
}: IProps) => {
  return (
    <>
      <div className={`flex flex-col gap-1 ${addStyle}`}>
        <label className="text-purple text-xs font-medium pl-2" htmlFor={name}>
          {label}
        </label>
        <div className="flex flex-row gap-2">
          {Array.from({ length: iteration }, (_, index) => (
            <input
              key={index}
              className="flex items-center bg-backgroundInput justify-center w-8 h-8"
              type="radio"
              id={name}
              name={name}
              value={index % 2 == 0 ? 'true' : 'false'}
              onChange={onChange}
              onBlur={onBlur}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Radios
