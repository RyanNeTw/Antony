"use client"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Signalement from "@/components/ui/signalements/Signalement"
import Signalements from "@/components/ui/signalements/Signalements"
import { Suspense } from "react"
import { useParams } from "next/navigation"
import { useGetReportAiQuery } from "@/redux/reportsAi"
// import ReportsTable from "@/components/ui/ReportsTable"
import { ReportAi } from "@/types"
import Paragraph from "@/components/typography/Paragraph"
import { getBadgeUi } from "@/components/ui/Badge"

const BreadcrumbLastElement = ({
  signalment,
}: {
  signalment: ReportAi | null
}) => {
  if (!signalment) return
  return (
    <div className="flex flex-row items-center">
      <Paragraph
        text={`> ${getBadgeUi(signalment?.status).s}`}
        addStyle="text-purple font-bold"
      />
      <Paragraph text={`-${signalment?.title}-`} addStyle="font-bold" />
      <Paragraph
        text={`${signalment?.users[0]?.firstname} ${signalment?.users[0]?.lastname}`}
        addStyle="text-purple font-bold"
      />
    </div>
  )
}

const SignalementsTable = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useGetReportAiQuery({ id })
  const signalement = data?.data

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <div>
        <Header />
        <div className="mx-auto max-w-5xl">
          <Breadcrumb
            replaceLastElement={
              <BreadcrumbLastElement signalment={signalement ?? null} />
            }
          />
          <div className="flex">
            <Signalements />
            <Signalement
              id={id}
              isError={isError}
              isLoading={isLoading}
              signalment={signalement ?? null}
            />
          </div>
          {/* {signalement && (
            <ReportsTable
              reports={signalement.reports}
              users={signalement.users}
            />
          )} */}
        </div>
        <Footer />
      </div>
    </Suspense>
  )
}

export default SignalementsTable
