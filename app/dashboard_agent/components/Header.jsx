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

            <div className="flex items-center justify-center">
              <Image
                src="/pipe.png"
                alt="pipe"
                width={2}
                height={2}
                style={{}}
                className="h-auto"
              />
            </div>

            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 text-gray-700 hover:text-white hover:bg-[#9FBD3C] font-bold  border-b-4 border-[#9FBD3C]"
            >
              Découvrir Antony
            </a>
            <div className="flex items-center justify-center">
              <Image
                src="/pipe.png"
                alt="pipe"
                width={2}
                height={2}
                style={{}}
                className="h-auto"
              />
            </div>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2  text-gray-700 hover:text-white hover:bg-[#6AB657] font-bold border-b-4  border-[#6AB657]"
            >
              Signalement
            </a>
            <div className="flex items-center justify-center">
              <Image
                src="/pipe.png"
                alt="pipe"
                width={2}
                height={2}
                style={{}}
                className="h-auto"
              />
            </div>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 text-gray-700 hover:text-white hover:bg-[#76B0E0] font-bold  border-b-4  border-[#76B0E0]"
            >
              Cadre de vie
            </a>
            <div className="flex items-center justify-center">
              <Image
                src="/pipe.png"
                alt="pipe"
                width={2}
                height={2}
                style={{}}
                className="h-auto"
              />
            </div>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 text-gray-700 hover:text-white hover:bg-[#513887] font-bold border-b-4  border-[#513887]"
            >
              Solidarité et Santé
            </a>
            <div className="flex items-center justify-center">
              <Image
                src="/pipe.png"
                alt="pipe"
                width={2}
                height={2}
                style={{}}
                className="h-auto"
              />
            </div>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 text-gray-700 hover:text-white hover:bg-[#AA2F7F] font-bold border-b-4 border-[#AA2F7F]"
            >
              Culture, sport et loisir
            </a>
            <div className="flex items-center justify-center">
              <Image
                src="/pipe.png"
                alt="pipe"
                width={2}
                height={2}
                style={{}}
                className="h-auto"
              />
            </div>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 text-gray-700 hover:text-white hover:bg-[#AB2347] font-bold border-b-4 border-[#AB2347]"
            >
              Famille
            </a>
            <div className="flex items-center justify-center">
              <Image
                src="/pipe.png"
                alt="pipe"
                width={2}
                height={2}
                style={{}}
                className="h-auto"
              />
            </div>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 text-gray-700 hover:text-white hover:bg-orange-500 font-bold border-b-2 border-gray-200 hover:border-orange-500"
            >
              Agenda
            </a>
            <div className="flex items-center justify-center">
              <Image
                src="/pipe.png"
                alt="pipe"
                width={2}
                height={2}
                style={{}}
                className="h-auto"
              />
            </div>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 text-gray-700 hover:text-white hover:bg-teal-500 font-bold border-b-2 border-gray-200 hover:border-teal-500"
            >
              Suivez-nous
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
