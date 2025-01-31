// pages/_app.tsx
import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Projet révolutionnaire, sky is the limit",
  description: "Sky is the limit",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
