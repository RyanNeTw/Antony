import { ToastType } from "@/types"
import { useEffect } from "react"

type IProps = {
  message: string
  type?: ToastType
  onClose: () => void
}

const getTypeToast = (
  type: ToastType
): { bgcolor: string; textColor: string } => {
  switch (type) {
    case ToastType.SUCCESS:
      return { bgcolor: "bg-greenForm", textColor: "text-white" }
    case ToastType.WARNING:
      return { bgcolor: "bg-warning", textColor: "text-white" }
    default:
      return { bgcolor: "bg-white", textColor: "text-black" }
  }
}

const Toast = ({ message, type = ToastType.NORMAL, onClose }: IProps) => {
  const { bgcolor, textColor } = getTypeToast(type)
  useEffect(() => {
    const timer = setTimeout(onClose, 2000)
    return () => clearTimeout(timer)
  }, [onClose])
  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div
        className={`fixed bottom-4 right-4 z-50 flex items-center w-full max-w-xs p-4 ${bgcolor} rounded-lg shadow-sm`}
      >
        <div className={`ms-3 text-sm font-normal ${textColor}`}>{message}</div>
      </div>
    </>
  )
}

export default Toast
