"use client"

import Breadcrumb from "../components/Breadcrumb"
import Signalements from "../components/Signalements"
import Paragraph from "../components/UI/Paragraph"
import Header from "./components/Header"
import Title from "./components/typography/Title"
import Footer from "./Footer"
import SignalementTable from "../components/SignalmentTable"
import { Suspense } from "react"

const SignalementsTable = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <div>
        <Header />
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
          <div className="flex">
            <Signalements />

            <div className="w-auto">
              <Title>Liste des signalements</Title>
              <Paragraph
                text="Dernière modification le 28/11/2024"
                addStyle="text-xs font-extralight mb-6 italic"
              />
              <div className="overflow-x-auto">
                <SignalementTable />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  )
}

export default SignalementsTable
