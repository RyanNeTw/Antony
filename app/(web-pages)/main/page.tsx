"use client"

import UrgentForm from "@/app/ui/signalements/form"
import React, { Suspense } from "react"

function MainPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <div>
        <UrgentForm />
      </div>
    </Suspense>
  )
}

export default MainPage
