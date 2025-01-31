import { NextRequest, NextResponse } from "next/server"
import { ReportType } from "../../../types"
import CheckReportBody from "../../../utils/CheckReportBody"
import CreateReport from "../../../utils/CreateReport"
import CreateReportAi from "../../../utils/CreateReportAi"
import CreateUser from "../../../utils/CreateUser"
import GetTitleAndReportStatusFromOpenAI from "../../../utils/GetTitleAndReportStatusFromOpenAI"
import IncrementReportAi from "../../../utils/IncrementReportAi"
import MatchingReports from "../../../utils/MatchingReports"

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

  if (!openAiRes) {
    return NextResponse.json(
      {
        message: "Error while fetching AI",
      },
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
      {
        message: "Error",
      },
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
