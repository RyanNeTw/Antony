export default function SousMenuFooter({ title, items }) {
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
