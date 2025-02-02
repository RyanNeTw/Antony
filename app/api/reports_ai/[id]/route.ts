import supabase from "@/supabase"
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
    .maybeSingle()

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

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id
  const { is_deleted, is_read } = (await req.json()) as {
    is_deleted?: boolean
    is_read?: boolean
  }

  const updateData: { is_deleted?: boolean; is_read?: boolean } = {}
  if (typeof is_deleted === "boolean") updateData.is_deleted = is_deleted
  if (typeof is_read === "boolean") updateData.is_read = is_read

  const { data, error } = await supabase
    .from("reports_ai")
    .update(updateData)
    .eq("id", id)

  if (error)
    return NextResponse.json({
      status: 500,
      error,
    })

  return NextResponse.json({
    status: 201,
    data,
  })
}
