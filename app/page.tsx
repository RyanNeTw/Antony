"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SignalementsTable from "@/components/ui/signalements/SignalmentTable"
import { Suspense } from "react"
import Title from "@/components/ui/Title"

const Page = () => {
  return (
    <>
      <Suspense fallback={<div>Chargement...</div>}>
        <div>
          <Header />
          <div className="mx-auto max-w-5xl mt-4">
            <div className="flex flex-col gap-8">
              <Title text="Signalements" />
              <SignalementsTable />
            </div>
          </div>
          <Footer />
        </div>
      </Suspense>
    </>
  )
}

export default Page
