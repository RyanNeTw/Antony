import "@/globals.css"
import type { Metadata } from "next"
import ReduxProvider from "./ReduxProvider"

export const metadata: Metadata = {
  title: "Projet révolutionnaire, sky is the limit",
  description: "Sky is the limit",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
