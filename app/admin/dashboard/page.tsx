"use client"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Paragraph from "@/components/typography/Paragraph"
import Signalements from "@/components/ui/signalements/Signalements"
import SignalementTable from "@/components/ui/signalements/SignalmentTable"
import Title from "@/components/ui/Title"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

const SignalementsTable = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <div>
        <Header />
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
          <div className="flex flex-wrap">
            <Signalements />

            <div className="w-9/12">
              <div>
                <Title text="Liste des signalements" />
                <FilterSpan />
              </div>
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
