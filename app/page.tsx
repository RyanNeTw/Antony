"use client"

import { useRouter } from "next/navigation"

export default async function Page() {
  const router = useRouter()

  return router.replace("/main")
}
