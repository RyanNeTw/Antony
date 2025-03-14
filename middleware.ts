import { verifyJwtToken } from "@/utils/VerifyToken"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next()
  if (
    request.nextUrl.pathname.includes("login") ||
    request.nextUrl.pathname.includes("reports")
  )
    return response

  let token = request.nextUrl.pathname.includes("api")
    ? request.headers.get("authorization")
    : request.nextUrl.pathname.includes("admin")
      ? request.cookies.get("token")?.value
      : null

  const verifyToken = await verifyJwtToken(token)

  if (!verifyToken) {
    return NextResponse.json(
      {
        message: `You're not allowed, insert your token in Authorization headers`,
      },
      { status: 403 }
    )
  }

  return response
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
}
