import supabase from "../supabase"
import { UserType } from "../types"

const CreateUser = async (
  data: UserType,
  report_ai_id: string
): Promise<string | null> => {
  const { error, data: user } = await supabase
    .from("users")
    .insert({
      data,
      report_ai_id,
    })
    .select("*")
    .maybeSingle()

  if (error) {
    throw new Error(`Could'nt create new user`, error)
  }

  return user?.id ?? null
}

export default CreateUser
