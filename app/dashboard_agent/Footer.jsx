import SousMenuFooter from "./SousMenuFooter"

export default function Footer() {
  return (
    <div className="p-4">
  

      <div className="bg-[#E2E3E9] flex justify-center p-4">

      <div className="mt-5 ml-2">
        <h2 className="text-blue font-normal text-2xl">
          Ville <span className="text-lightblue">d&apos;Antony</span>
        </h2>
        <br />
        <p>
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
          Ouverture de la Direction de la population <br /> le samedi matin de
          9h à 12h
        </p>
      </div>

        <div className="grid grid-cols-3 gap-x-28 gap-y-10 p-4">
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
    </div>
  )
}
