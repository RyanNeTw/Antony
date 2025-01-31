"use client"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Form from "@/components/ui/signalements/form"
import Signalements from "@/components/ui/signalements/Signalements"
import { Suspense } from "react"
// import MainPage from "./(web-pages)/main/page"
const Page = () => {
  return (
    <>
      <Suspense fallback={<div>Chargement...</div>}>
        <div>
          <Header />
          <div className="mx-auto max-w-5xl">
            <Breadcrumb />
            <div className="flex">
              <Signalements />
              <Form />
            </div>
          </div>
          <Footer />
        </div>
      </Suspense>
    </>
  )
}

export default Page
