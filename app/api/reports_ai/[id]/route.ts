import supabase from "@/supabase"
import { NextRequest, NextResponse } from "next/server"
import { unstable_cache } from "next/cache"

const timeCache = 60

const getReportAI = unstable_cache(
  async ({ id }: { id: string }) => {
    const { data, error } = await supabase
      .from("reports_ai")
      .select("*, reports(*), users(*)")
      .eq("id", id)
      .maybeSingle()

    return { data, error }
  },
  ["report-ai"],
  {
    revalidate: timeCache,
    tags: ["update-report-ai"],
  }
)

const updateReportAI = unstable_cache(
  async ({
    id,
    is_deleted,
    is_read,
  }: {
    id: string
    is_deleted?: boolean
    is_read?: boolean
  }) => {
    const updateData: { is_deleted?: boolean; is_read?: boolean } = {}
    if (typeof is_deleted === "boolean") updateData.is_deleted = is_deleted
    if (typeof is_read === "boolean") updateData.is_read = is_read

    const { data, error } = await supabase
      .from("reports_ai")
      .update(updateData)
      .eq("id", id)

    return { data, error }
  },
  ["update-report-ai"]
)

/*export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id

  const { data, error } = await getReportAI({ id })

  if (error)
    return NextResponse.json({
      status: 500,
      error,
    })

  return NextResponse.json(
    {
      status: 200,
      data,
    },
    {
      headers: {
        "Cache-Control": "max-age=10",
        "CDN-Cache-Control": "max-age=60",
        "Vercel-CDN-Cache-Control": `max-age=${timeCache}`,
      },
    }
  )
}*/

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id

  const { data, error } = await getReportAI({ id })

  if (error)
    return NextResponse.json({
      status: 500,
      error,
    })

  return NextResponse.json(
    {
      status: 200,
      data,
    },
    {
      headers: {
        "Cache-Control": "private, no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        "X-Cache-Status": "MISS", // Toujours MISS pour données privées
      },
    }
  )
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

  const { data, error } = await updateReportAI({ id, is_deleted, is_read })

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
