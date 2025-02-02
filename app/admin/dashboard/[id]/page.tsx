"use client"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Signalement from "@/components/ui/signalements/Signalement"
import Signalements from "@/components/ui/signalements/Signalements"
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
              <Signalement />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  )
}

export default SignalementsTable
