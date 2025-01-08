import React from "react"
import Image from "next/image"

const links = [
  "Budget participatif",
  "Démarches et services",
  "Signalements",
  "Petites annonces",
  "Agenda",
  "Offres d'emploi",
]

const headerLinks = [
  {
    color: "#9FBD3C",
    text: "Découvrir Antony",
  },
  {
    color: "#6AB657",
    text: "Signalement",
  },
  {
    color: "#76B0E0",
    text: "Cadre de vie",
  },
  {
    color: "#513887",
    text: "Solidarité et Santé",
  },
  {
    color: "#AA2F7F",
    text: "Culture, sport et loisir",
  },
  {
    color: "#AB2347",
    text: "Famille",
  },
  {
    color: "#AB2347",
    text: "Agenda",
  },
  {
    color: "#AB2347",
    text: "suivez-nous",
  },
]

const Header = () => {
  return (
    <header className="bg-white shadow">
      {/* Section supérieure */}
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo et texte */}
        {/* <div className="relative"> */}
        <div
          className="absolute"
          style={{ left: "400px", top: "0px", zIndex: 10 }}
        >
          <Image
            src="/logo-banner.png"
            alt="Logo Ville Antony"
            width={100}
            height={100}
            className="h-auto"
          />
        </div>
        {/* </div> */}
        {/* Menu supérieur */}
        <div className="flex justify-end w-full text-[#252B4F]">
          <nav className="py-4">
            <ul className="flex items-center space-x-4 text-blue-900">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="relative flex items-center thin font-normal text-sm"
                >
                  <a href="#" className=" hover:text-sky-500 font-normal">
                    {link}
                  </a>
                  <div className="mx-5">
                    <Image src="/pipe.png" alt="pipe" width={2} height={2} />
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="relative w-full h-56">
        <Image
          src="/banniere.png"
          alt="Logo Ville Antony"
          layout="fill" // Remplit toute la zone parent
          objectFit="cover" // S'adapte en couvrant toute la zone
        />
      </div>

      {/* Section inférieure */}
      <div className="bg-gray-100 border-t">
        <div className="flex items-center justify-center px-4 align-middle">
          {/* Menu inférieur */}
          <nav className="flex justify-center h-20 align-bottom font-extrabold">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 text-gray-700 hover:text-white bg-white font-medium border-t-4 border-[#242B52]"
            >
              <div className="flex items-center justify-center z-20">
                <Image
                  src="/icone-maison.png"
                  alt="home"
                  width={24}
                  height={24}
                  style={{}}
                  className="h-auto"
                />
              </div>
            </a>

            {headerLinks.map((i, index) => (
              <a
                key={index}
                href="#"
                className={`relative flex items-center justify-center px-4 py-2 text-gray-700 hover:text-white hover:bg-[${i.color}] font-bold  border-b-4 border-[${i.color}]`}
              >
                {i.text}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-gray-300 w-0.5 h-1/2 rounded-md"></div>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
