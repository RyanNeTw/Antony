import { verifyJwtToken } from "@/utils/VerifyToken"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next()
  if (request.nextUrl.pathname.includes("auth")) return response
  if (request.nextUrl.pathname.includes("connexion")) return response

  const token = request.headers.get("authorization")
  const verifyToken = await verifyJwtToken(token)
  if (!verifyToken)
    return NextResponse.json(
      {
        message: `You're not allowed, insert your token in Authorization headers`,
      },
      { status: 403 }
    )

  return response
}

export const config = {
  matcher: ["/api/admib/:path*"],
}
