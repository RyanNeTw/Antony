"use client"

import React from "react"
import Title from "./components/typography/Title"
import Header from "./components/Header"
import Footer from "./Footer"
import Breadcrumb from "../components/Breadcrumb"
import LeftMenu from "./components/LeftMenu"

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
    <div>
      <Header />
      <Breadcrumb />
      <div className="px-page flex justify-evenly text-body ">
        <LeftMenu
          title="Signalements"
          links={[
            { title: "Récemment Consultés", link: "/" },
            {
              title: "Liste des signalements",
              link: "/",
              links: [
                { link: "Tous", text: "Tous" },
                { link: "Non-Consultés", text: "Non-Consultés" },
                { link: "Consultés", text: "Consultés" },
              ],
            },
            {
              title: "Status",
              link: "/",
            },
            {
              title: "Supprimés",
              link: "/",
            },
          ]}
        />
        <div className="px-9 w-auto">
          <Title>Liste des signalements</Title>
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
      <Footer />
    </div>
  )
}

export default SignalementsTable
