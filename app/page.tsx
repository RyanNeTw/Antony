"use client"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SignalementsTable from "@/components/ui/signalements/SignalmentTable"
import SignalementsPanel from "@/components/ui/signalements/Signalements"
import { useAuth } from "@/app/AuthContext"
import { Suspense } from "react"

const Page = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <Suspense fallback={<div>Chargement...</div>}>
        <div>
          <Header />
          <div className="mx-auto max-w-5xl">
            <Breadcrumb />
            <div className="flex">
              {isAuthenticated && <SignalementsPanel />}
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
