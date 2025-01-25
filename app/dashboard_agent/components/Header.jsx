import Image from 'next/image'

const links = [
  'LES + DEMANDES',
  'Budget participatif',
  'Démarches et services',
  'Signalements',
  'Petites annonces',
  'Agenda',
  "Offres d'emploi",
]

const headerLinks = [
  {
    color: 'hover:bg-lightblue border-lightblue',
    text: 'Découvrir Antony',
  },
  {
    color: 'hover:bg-burgundy border-burgundy',
    text: 'Signalement',
  },
  {
    color: 'hover:bg-green border-green',
    text: 'Cadre de vie',
  },
  {
    color: 'hover:bg-burgundy border-burgundy',
    text: 'Solidarité et Santé',
  },
  {
    color: 'hover:bg-primary border-primary',
    text: 'Culture, sport et loisir',
  },
  {
    color: 'hover:bg-warning border-warning',
    text: 'Famille',
  },
  {
    color: 'hover:bg-burgundy border-burgundy',
    text: 'Agenda',
  },
  {
    color: 'hover:bg-green border-green',
    text: 'Suivez-nous',
  },
]

const getLinkClasses = (color) => {
  return `relative flex items-center justify-center px-4 py-2 text-gray-700 
  hover:text-white transition-colors duration-200 
  font-bold border-b-4 ${color}`
}

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="flex items-center justify-between py-2">
        <div className="absolute left-1/4 top-0 z-50">
          <Image
            src="/logo-banner.png"
            alt="Logo Ville Antony"
            width={100}
            height={100}
            className="h-auto"
          />
        </div>
        <div className="flex justify-end w-full text-[#252B4F]">
          <nav>
            <div className="flex items-center space-x-4 text-blue-900">
              {links.map((link, index) => (
                <a
                  href="#"
                  className="relative hover:text-sky-500 text-xs font-normal px-4 py-2"
                  key={index}
                >
                  {link}
                  {index != 0 && (
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-gray-300 w-0.5 h-1/2 rounded-md"></div>
                  )}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <div className="relative w-full h-56">
        <Image
          src="/banner.png"
          alt="Logo Ville Antony"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="bg-gray-200 border-t">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center align-middle">
            <nav className="flex justify-center h-20 align-bottom font-extrabold">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 text-gray-700 hover:text-white bg-white font-medium border-t-4 border-[#242B52]"
              >
                <div className="flex items-center justify-center z-20">
                  <Image
                    src="/house-icon.svg"
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
                  className={`${getLinkClasses(i.color)} text-xs font-bold`}
                >
                  {i.text}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-gray-300 w-0.5 h-1/2 rounded-md"></div>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
