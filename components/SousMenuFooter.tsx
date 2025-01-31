<<<<<<<< HEAD:SousMenuFooter.tsx
interface SousMenuFooterProps {
  title: string
  items: string[]
}

export default function SousMenuFooter({ title, items }: SousMenuFooterProps) {
========
type IProps = {
  title: string
  items: string[]
}
export default function SousMenuFooter({ title, items }: IProps) {
>>>>>>>> 2837d97 (Refactor project structure and add new components for signalements and admin dashboard):components/SousMenuFooter.tsx
  return (
    <div className="max-w-[300px]">
      <div>
        <h2 className="text-blue font-normal text-2xl">{title}</h2>
        <br />
      </div>
      <ul
        className="list-disc px-4"
        style={{ listStyleType: "disc", color: "blue" }}
      >
        {" "}
        {items && Array.isArray(items) ? (
          items.map((item, index) => (
            <li className="text-[#7A7E94] custom-marker" key={index}>
              {item}
            </li>
          ))
        ) : (
          <li className="text-[#7A7E94]">Aucun élément disponible</li>
        )}
      </ul>
    </div>
  )
}
