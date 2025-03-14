import Paragraph from "@/components/typography/Paragraph"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Subtitle from "../../typography/Subtitle"

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
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter")

  return (
    <div className="bg-[#E2E3E8] p-4 text-xs font-normal h-fit mr-auto">
      <Subtitle>{title}</Subtitle>
      <ul className="space-y-2 p-4">
        {links.map((l, index) => (
          <li key={index}>
            <Link
              className="flex flex-row gap-1 items-center cursor-pointer hover:underline"
              href={l.link}
            >
              <div
                className={`${`${l.title === filter ? "text-lightblue" : "text-black"}`} w-2 h-2 rounded-full`}
              ></div>
              <Paragraph
                text={l.title}
                addStyle={`${l.title === filter ? "text-lightblue" : "text-black"}`}
              />
            </Link>
            {l?.links?.map((link, index) => (
              <Link
                className="flex flex-row gap-1 items-center cursor-pointer pl-2 hover:underline"
                href={link.link}
                key={index}
              >
                <p
                  className={`${link.text === filter ? "text-lightblue" : "text-black"}`}
                >
                  {">"}
                </p>
                <Paragraph
                  text={link.text}
                  addStyle={`${link.text === filter ? "text-lightblue" : "text-black"}`}
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
