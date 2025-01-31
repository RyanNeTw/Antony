"use client"

import React, { Suspense } from "react"

function page() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <div>page</div>
    </Suspense>
  )
}

export default page
