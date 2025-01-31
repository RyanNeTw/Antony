"use client"

import Header from "@/app/dashboard_agent/components/Header"
import { Suspense } from "react"

const Page = () => {
  return (
    <>
      <Suspense fallback={<div>Chargement...</div>}>
        <Header />
        <div className="mx-auto max-w-5xl">
          <div className="flex"></div>
        </div>
      </Suspense>
    </>
  )
}

export default Page
