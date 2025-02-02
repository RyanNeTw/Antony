import "@/globals.css"
import type { Metadata } from "next"
import ReduxProvider from "./ReduxProvider"
import { AuthProvider } from "./AuthContext"

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
        <ReduxProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
