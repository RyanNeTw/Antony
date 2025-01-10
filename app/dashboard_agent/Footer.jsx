import SousMenuFooter from "./SousMenuFooter"
import Image from "next/image"

const linksFooter = [
  "Accessibilité",
  "Mentions légales",
  "Liens",
  "Escape presse",
  "Contact",
  "Gestion des cookies",
]

export default function Footer() {
  return (
    <footer className="checker p-0">
      <div className="bg-[#E2E3E9] flex justify-center p-4">
        <div className="flex flex-col justify-between ">
          <div className="mt-5 ml-2 mr-48">
            <h2 className="text-blue font-normal text-2xl">
              Ville <span className="text-lightblue">d&apos;Antony</span>
            </h2>
            <br />
            <p className="text-[#7A7E94]">
              Place de l&apos;Hôtel de ville <br />
              <span className="text-lightblue">TEL: </span>01 40 96 71 00 <br />
              <span className="text-lightblue">CONTACT PAR EMAIL</span> <br />
              Ouvert du lundi au vendredi de{" "}
              <span className="text-lightblue">8h30</span> à <br />
              <span className="text-lightblue">12h00</span> et de{" "}
              <span className="text-lightblue">13h30</span> à{" "}
              <span className="text-lightblue">17h30</span>
              <br />
              <br />
              Ouverture de la Direction de la population <br /> le samedi matin
              de 9h à 12h
            </p>
          </div>

          <div>
            <Image
              src="/carte_footer.png"
              alt="carte"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 gap-x-40 gap-y-10 p-4">
          <SousMenuFooter
            title={"Signalements"}
            items={[
              "Tout savoir sur Antony",
              "Nouveaux arrivants",
              "Jumelage",
              "Informez-vous",
              "Permanence et contacts utiles",
              "Associations",
              "Archives communales",
              "Vie économique",
              "Nouvelles technologies",
            ]}
          />
          <SousMenuFooter
            title={"Ma mairie"}
            items={[
              "Démarche et services",
              "Démocratie locale",
              "Budget",
              "Budget participatif",
              "Impôts et finances",
              "Recrutement",
              "Marchés publics",
              "Rapport de la chambre régionale des comptes",
            ]}
          />
          <SousMenuFooter
            title={"Cadre de vie"}
            items={[
              "Environnements et espaces verts",
              "Développement durable",
              "Travaux",
              "Grands projets",
              "Urbanisme",
              "Circulation & transports",
              "Sécurité & prévention",
            ]}
          />
          <SousMenuFooter
            title={"Solidarité et santé"}
            items={[
              "Logement",
              "Action sociale",
              "Santé",
              "Séniors",
              "Emploi",
              "Associations",
            ]}
          />
          <SousMenuFooter
            title={"Culture, sports & loisirs"}
            items={[
              "Culture",
              "Sports",
              "Animations",
              "Espace Vasarely",
              "Centre Culturel Ousmane Sy",
              "Enfants",
              "Seniors",
              "Associations",
            ]}
          />
          <SousMenuFooter
            title={"Famille"}
            items={[
              "Petite enfance",
              "Enfance & éducation",
              "Jeunesse",
              "Séniors",
              "Pratique",
            ]}
          />
        </div>
      </div>

      <div className="bg-[#222B55] h-48">
        <div className="flex justify-center w-full text-[#252B4F]">
          <nav className="py-4">
            <ul className="flex items-center space-x-4 text-blue-900">
              {linksFooter.map((link, index) => (
                <li
                  key={index}
                  className="relative flex items-center thin font-normal text-sm text-white "
                >
                  <a href="#" className=" hover:text-sky-500 font-normal">
                    {link}
                  </a>
                  <div className="mx-5">
                    <Image src="/pipe.png" alt="pipe" width={2} height={2} />
                  </div>
                </li>
              ))}

              <p className="text-lightblue">© Ville d&apos;Antony</p>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
