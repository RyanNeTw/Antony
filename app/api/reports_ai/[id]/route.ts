import supabase from "@/app/supabase"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id

  const { data, error } = await supabase
    .from("reports_ai")
    .select("*, reports(*), users(*)")
    .eq("id", id)

  if (error)
    return NextResponse.json({
      status: 500,
      error,
    })

  return NextResponse.json({
    status: 200,
    data,
  })
}
