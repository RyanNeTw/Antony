"use client"

import React from "react"
import Form from "@/app/ui/signalements/form"
import Header from "@/app/dashboard_agent/components/Header"


const SignalementPage = () => {
  console.log("This is a page")
  return (
    <>
      <div className="h-full w-full">
        <Header />
        <Form />
      </div>
    </>
  )
}

export default SignalementPage
