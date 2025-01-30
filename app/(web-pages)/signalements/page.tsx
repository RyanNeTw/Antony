"use client"

import React, { Suspense } from "react"
import Form from "../../ui/signalements/form"
import Header from "@/app/dashboard_agent/components/Header"
import Breadcrumb from "@/app/components/Breadcrumb"
import Footer from "@/app/dashboard_agent/Footer"
import Signalements from "@/app/components/Signalements"
import UrgentForm from "@/app/ui/signalements/urgentForm"

const SignalementPage = () => {
  return (
    <>
      <Suspense fallback={<div>Chargement...</div>}>
        <div>
          <Header />
          <div className="mx-auto max-w-5xl">
            <Breadcrumb />
            <div className="flex">
              <Signalements />
              <UrgentForm />
            </div>
          </div>
          <Footer />
        </div>
      </Suspense>
    </>
  )
}

export default SignalementPage
