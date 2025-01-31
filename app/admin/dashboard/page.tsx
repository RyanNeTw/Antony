"use client"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SignalementTable from "@/components/SignalmentTable"
import Paragraph from "@/components/typography/Paragraph"
import Title from "@/components/typography/Title"
import Signalements from "@/components/ui/signalements/Signalements"
import { useSearchParams } from "next/navigation"
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
              <Title>
                Liste des signalements
                <FilterSpan />
              </Title>
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

const FilterSpan = () => {
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter")
  return <span className="font-semibold"> {filter}</span>
}

export default SignalementsTable
