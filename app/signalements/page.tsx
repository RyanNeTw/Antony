"use client"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Form from "@/components/ui/signalements/form"
import { Suspense } from "react"
const SignalementPage = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <div>
        <Header />
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
          <div className="flex">
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  )
}
export default SignalementPage
