import supabase from "@/supabase"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const page = Number(searchParams.get("page") ?? 1)
  const nbr = Number(searchParams.get("nbr") ?? 100)
  const status = searchParams.get("status")
  const is_deleted: { isExists: boolean; value: boolean } = {
    isExists: !!searchParams.get("is_deleted"),
    value: searchParams.get("is_deleted") === "true",
  }
  const is_read: { isExists: boolean; value: boolean } = {
    isExists: !!searchParams.get("is_read"),
    value: searchParams.get("is_read") === "true",
  }

  if (page < 1)
    return NextResponse.json({ error: "Invalid page number" }, { status: 400 })

  if (nbr <= 0 || nbr > 100) {
    return NextResponse.json(
      { error: "Invalid number of items per page" },
      { status: 400 }
    )
  }

  const limit = Math.min(nbr ?? 100, 100)
  const offset = ((page ?? 1) - 1) * limit

  let query = supabase
    .from("reports_ai")
    .select("*, reports(*), users(*)")
    .range(offset, offset + limit - 1)
    .order("updated_at", { ascending: false })
    .order("count", { ascending: false })
    .order("created_at", { ascending: false })

  if (status) query = query.eq("status", status)
  if (is_deleted.isExists) query = query.eq("is_deleted", is_deleted.value)
  if (is_read.isExists) query = query.eq("is_read", is_read.value)

  const { data, error } = await query

  if (error) return NextResponse.json({ status: 500, error })

  return NextResponse.json({
    status: 200,
    data,
    pagination: {
      currentPage: page,
      itemsPerPage: limit,
      totalItems: data.length,
    },
  })
}
