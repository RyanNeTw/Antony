import React from "react"
import MenuGauche from "./components/MenuGauche"

const signalements = [
  {
    type: "Urgent",
    description: "Troue au milieu de la route",
    adresse: "5 Boulevard Benjamin le Grand",
    auteur: "Josette Martin",
    color: "bg-[#9D2F48]",
  },
  {
    type: "Urgent",
    description: "Feu en panne",
    adresse: "2 Rue du Martyr",
    auteur: "",
    color: "bg-[#9D2F48]",
  },
  {
    type: "Récurrent",
    description: "...",
    adresse: "...",
    auteur: "...",
    color: "bg-[#9D3A7C]",
  },
  {
    type: "Récurrent",
    description: "...",
    adresse: "...",
    auteur: "...",
    color: "bg-[#9D3A7C]",
  },
  {
    type: "",
    description: "Lampadaire en panne",
    adresse: "...",
    auteur: "Josette Martin",
    color: "bg-[#7CB462]",
  },
  {
    type: "",
    description: "...",
    adresse: "...",
    auteur: "Martin L. Bernard",
    color: "bg-[#7CB462]",
  },
  {
    type: "",
    description: "...",
    adresse: "...",
    auteur: "Martin L. Bernard",
    color: "bg-[#7CB462]",
  },
]

const SignalementsTable = () => {
  return (
    <div className="p-8 m-8 flex justify-evenly text-[#252A4F] ">
      <div>
        <MenuGauche />
      </div>
      <div className="px-9 w-auto">
        <h1 className="text-3xl mb-10 tracking-wider">
          Liste des signalements
        </h1>
        <p className="text-sm font-light mb-6 italic">
          Dernière modification le 28/11/2024
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <tbody>
              {signalements.map((signalement, index) => {
                const isPreviousUrgent =
                  index > 0 && signalements[index - 1].type === "urgent"
                const isCurrentRecurrent = signalement.type === "recurrent"
                const extraMargin =
                  isPreviousUrgent && isCurrentRecurrent
                    ? "border-t-[32px]"
                    : ""

                return (
                  <tr
                    key={index}
                    className={`border-t-[16px] border-transparent flex flex-wrap md:flex-nowrap justify-between gap-4 ${extraMargin}`}
                  >
                    <td
                      className={`flex-1 px-4 py-2 font-semibold text-white text-center ${signalement.color}`}
                    >
                      {signalement.type || "•"}
                    </td>
                    <td className="flex-1 px-4 py-2 text-white bg-[#747474]">
                      {signalement.description}
                    </td>
                    <td className="flex-1 px-4 py-2 bg-[#F2F2F2] text-gray-800">
                      {signalement.adresse}
                    </td>
                    <td className="flex-1 px-4 py-2 bg-[#F2F2F2] text-pink-600">
                      {signalement.auteur}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SignalementsTable
