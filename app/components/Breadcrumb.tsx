import { usePathname } from "next/navigation"
import Paragraph from "./UI/Paragraph"
import Link from "next/link"

const Breadcrumb = () => {
  const pathname = usePathname()
  const paths = pathname?.split("/")

  if (!pathname || !paths?.length) return null

  const getLink = (i: number): string => {
    if (!i) return "/"
    let link = ""
    link = paths
      ?.slice(0, i + 1)
      ?.map((p) => link + p)
      .join("/")
    return link
  }

  const getCleanPath = (path: string): string => {
    if (!path) return "Acceuil"
    return path.replaceAll("-", " ")
  }

  return (
    <>
      <ul className="flex flex-row gap-1">
        {paths?.map((path, index) => (
          <li key={index} className="hover:underline">
            <Link href={getLink(index)}>
              <Paragraph
                text={"> " + getCleanPath(path)}
                addStyle={`${index === paths?.length && "font-bold"}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Breadcrumb
