"use client"

import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()

  return router.replace("/main")
}

export default Page
