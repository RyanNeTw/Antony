import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Projet révolutionnaire, sky is the limit', //J'ai pas d'idée mettez ce que vous voulez en vrai
  description: 'Sky is the limit', // aucune idée mais team building
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
