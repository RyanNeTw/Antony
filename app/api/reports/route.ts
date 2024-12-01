import { ReportType } from "@/app/types"
import CheckReportBody from "@/app/utils/CheckReportBody"
import CreateReport from "@/app/utils/CreateReport"
import CreateReportAi from "@/app/utils/CreateReportAi"
import CreateUser from "@/app/utils/CreateUser"
import GetTitleAndReportStatusFromOpenAI from "@/app/utils/GetTitleAndReportStatusFromOpenAI"
import IncrementReportAi from "@/app/utils/IncrementReportAi"
import MatchingReports from "@/app/utils/MatchingReports"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = (await req.json()) as ReportType

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

  const isDataCorrect = CheckReportBody(data)
  if (!isDataCorrect.isValid) {
    return NextResponse.json(
      {
        message: isDataCorrect.errors,
      },
      { status: 500 }
    )
  }

  const openAiRes = await GetTitleAndReportStatusFromOpenAI(report)

  if (!openAiRes || !Boolean(openAiRes?.title && openAiRes?.status)) {
    return NextResponse.json(
      {
        message: "Error while fetching AI",
        content: openAiRes,
      },
      { status: 500 }
    )
  }

  const isReportExists = await MatchingReports({
    title: openAiRes.title,
    street,
  })

  const user_id = await CreateUser({ firstname, lastname, email, is_habitant })

  const report_ai_id = isReportExists
    ? await IncrementReportAi(isReportExists)
    : await CreateReportAi(openAiRes)

  if (!user_id || !report_ai_id) {
    return NextResponse.json(
      {
        message: "Error",
      },
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
    {
      message: isReportCreated ? "Report created" : "Error",
    },
    { status: isReportCreated ? 201 : 500 }
  )
}
