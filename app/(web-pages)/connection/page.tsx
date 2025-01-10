"use client"

import React from "react"
import Form from "@/app/ui/connection/form"
import Header from "@/app/dashboard_agent/components/Header"
import MenuGauche from "@/app/dashboard_agent/components/MenuGauche"

const ConnectionPage = () => {
  console.log("This is a connection")
  return (
    <>
      <div className="h-full w-full">
        <Header />
        <MenuGauche />
        <Form />
      </div>
    </>
  )
}

export default ConnectionPage
