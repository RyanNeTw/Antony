import { JWTPayload, jwtVerify } from "jose"

export const verifyJwtToken = async (
  token: string | null
): Promise<JWTPayload | null> => {
  if (!token) {
    console.warn("No access token provided")
    return null
  }

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET)
    )
    return verified.payload
  } catch (error) {
    console.log({ error })
    return null
  }
}
