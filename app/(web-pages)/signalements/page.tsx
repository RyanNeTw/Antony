'use client'

import React from 'react'
import Form from '../../ui/signalements/form'
import Header from '@/app/dashboard_agent/components/Header'
import Breadcrumb from '@/app/components/Breadcrumb'
import Footer from '@/app/dashboard_agent/Footer'
import Signalements from '@/app/components/Signalements'

const SignalementPage = () => {
  return (
    <>
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
    </>
  )
}

export default SignalementPage
