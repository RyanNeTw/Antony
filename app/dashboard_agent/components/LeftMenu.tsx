import Paragraph from "@/app/components/UI/Paragraph"
import Link from "next/link"
import Subtitle from "./typography/Subtitle"

type IProps = {
  title: string
  links: {
    title: string
    link: string
    links?: {
      link: string
      text: string
    }[]
  }[]
}

const LeftMenu = ({ title, links }: IProps) => {
  return (
    <div className="bg-[#E2E3E8] p-4 text-xs font-normal h-fit mr-auto">
      <Subtitle>{title}</Subtitle>
      <ul className="space-y-2 p-4">
        {links.map((l, index) => (
          <li key={index}>
            <Link
              className="flex flex-row gap-1 items-center cursor-pointer"
              href={l.link}
            >
              <div
                className={`${l.title ? "bg-lightblue" : "bg-black"} w-2 h-2 rounded-full`}
              ></div>
              <Paragraph
                text={l.title}
                addStyle={`${l.title && "text-lightblue"}`}
              />
            </Link>
            {l?.links?.map((link, index) => (
              <Link
                className="flex flex-row gap-1 items-center cursor-pointer pl-2"
                href={link.link}
                key={index}
              >
                <p className={`${l.title ? "text-lightblue" : "text-black"}`}>
                  {">"}
                </p>
                <Paragraph
                  text={link.text}
                  addStyle={`${l.title && "text-lightblue"}`}
                />
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeftMenu
