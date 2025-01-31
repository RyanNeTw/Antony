import supabase from "@/supabase"
import { NextResponse } from "next/server"
import { z } from "zod"

const LoginZod = z.object({
  email: z.string(),
  password: z.string(),
})
type Login = z.infer<typeof LoginZod>

export async function POST(req: Request) {
  const body = (await req.json()) as Login
  if (LoginZod.parse(body)) {
    return NextResponse.json(
      {
        message: `Error while signing in user`,
      },
      { status: 500 }
    )
  }

  const { email, password } = body

  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return NextResponse.json(
      {
        message: `Error while signing in user`,
        error: JSON.stringify(error),
      },
      { status: 500 }
    )
  }

  const { session } = data
  const { expires_in, expires_at, refresh_token, token_type, access_token } =
    session

  const { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .match({ id: session?.user?.id })
    .maybeSingle()

  if (userError) {
    return NextResponse.json(
      { message: `Error while crawling user data` },
      { status: 500 }
    )
  }

  return NextResponse.json(
    {
      message: `Connected`,
      session: {
        access_token,
        refresh_token,
        token_type,
        expires_at,
        expires_in,
      },
      user,
    },
    { status: 200 }
  )
}
