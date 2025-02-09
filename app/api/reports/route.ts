import { ReportSchema, ReportType } from "@/types"
import CreateReport from "@/utils/CreateReport"
import CreateReportAi from "@/utils/CreateReportAi"
import CreateUser from "@/utils/CreateUser"
import GetTitleAndReportStatusFromOpenAI from "@/utils/GetTitleAndReportStatusFromOpenAI"
import IncrementReportAi from "@/utils/IncrementReportAi"
import MatchingReports from "@/utils/MatchingReports"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const rawData = await req.json()
    const validationResult = ReportSchema.safeParse(rawData)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: validationResult.error.errors.map((err) => err.message),
        },
        { status: 400 }
      )
    }

    const data: ReportType = validationResult.data

    const {
      street,
      street_number,
      street_1,
      street_2,
      report,
      firstname,
      lastname,
      email,
      is_habitant,
    } = data

    const openAiRes = await GetTitleAndReportStatusFromOpenAI(report)
    if (!openAiRes) {
      return NextResponse.json(
        { message: "Error while fetching AI" },
        { status: 500 }
      )
    }

    const isReportExists = await MatchingReports({
      title: openAiRes.title,
      street,
    })

    const report_ai_id =
      isReportExists?.id && isReportExists?.count
        ? await IncrementReportAi(isReportExists)
        : await CreateReportAi(openAiRes)

    if (!report_ai_id) {
      return NextResponse.json(
        { message: "Error creating AI report" },
        { status: 500 }
      )
    }

    const user_id = await CreateUser(
      {
        firstname,
        lastname,
        email,
        is_habitant,
      },
      report_ai_id
    )

    if (!user_id) {
      return NextResponse.json(
        { message: "Error creating user" },
        { status: 500 }
      )
    }

    const isReportCreated = await CreateReport({
      street,
      street_1,
      street_2,
      street_number,
      report,
      user_id,
      report_ai_id,
    })

    return NextResponse.json(
      { message: isReportCreated ? "Report created" : "Error" },
      { status: isReportCreated ? 201 : 500 }
    )
  } catch (error) {
    console.error("Erreur serveur:", error)
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    )
  }
}
