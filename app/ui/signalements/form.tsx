import React from "react"

function Form() {
  return (
    <div className="w-full">
      <div className="relative w-[604px] h-[900px]">
        <h1 className="text-[34px] font-light text-[#252B4F] mb-4">
          Formulaire de signalements
        </h1>
        <p className="text-xs font-extralight italic">
          Dernière modification le 28/11/2024
        </p>
        <form action="" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <div>
              <label className="text-[#9D397C] text-xs font-medium pl-[14px]">
                Prénom
              </label>
              <input
                className="w-[284px] h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2]"
                type="text"
                id="prenom"
                placeholder="Amélia"
              />
            </div>
            <div>
              <label
                htmlFor="nom"
                className="text-[#9D397C] text-xs font-medium pl-[14px]"
              >
                Nom
              </label>
              <input
                className="w-[284px] h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2]"
                type="text"
                id="nom"
                placeholder="Dupont"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-[#9D397C] text-xs font-medium pl-[14px]">
              Adress E-mail
            </label>
            <input
              className="w-[284px] h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2]"
              type="text"
              id="prenom"
              placeholder="amelia.dupont@yahoo.com"
            />

            <label className="text-[#9D397C] text-xs font-medium pl-[14px]">
              Habitant
            </label>
            <div className="flex gap-2">
              <input
                className="flex items-center bg-[#F2F2F2] justify-center w-[35px] h-[35px]"
                type="checkbox"
              />
              <input
                className="flex items-center justify-center w-[35px] h-[35px]"
                type="checkbox"
              />
            </div>
            <label className="text-[#9D397C] text-xs font-medium pl-[14px]">
              Signalement
            </label>
            <textarea
              className="bg-[#F2F2F2] h-[105px] py-[10px] px-[14px]"
              name="Signalement"
              id="Signalement"
            ></textarea>

            <label className="text-[#9D397C] text-xs font-medium pl-[14px]">
              Pièces Jointes
            </label>
            <button className="flex items-center border-none justify-center w-[103px] h-[35px] px-[14px] py-[10px] bg-[#252B4F]">
              <span className="text-xs text-white">Sélèctionner</span>
            </button>
            <label className="text-[#9D397C] text-xs font-medium pl-[14px]">
              Emplacement
            </label>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col w-[284px] h-[170px] space-y-2">
                <div className="flex justify-between">
                  <input
                    className="w-[43px] h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2]"
                    type="text"
                    id="prenom"
                    placeholder="N°"
                  />
                  <input
                    className="w-[231px] h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2]"
                    type="text"
                    id="prenom"
                    placeholder="Rue"
                  />
                </div>
                <input
                  className="w-full h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2] italic"
                  type="text"
                  id="prenom"
                  placeholder="Complément d'adresse 1"
                />
                <input
                  className="w-full h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2] italic"
                  type="text"
                  id="prenom"
                  placeholder="Complément d'adresse 2"
                />
                <div className="flex justify-between">
                  <input
                    className="w-[65px] h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2] italic"
                    type="text"
                    id="prenom"
                    placeholder="92160"
                  />
                  <input
                    className="w-[209px] h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2] italic"
                    type="text"
                    id="prenom"
                    placeholder="Antony"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center w-[310px] h-[170px] text-blue font-extralight text-xs">intégrer la map</div>
            </div>
          </div>
        </form>
        <button className="absolute bottom-0 right-0 flex items-center justify-center w-[113px] h-[45px] text-white bg-[#7CB462]">
          Soumettre
        </button>
      </div>
    </div>
  )
}

export default Form
