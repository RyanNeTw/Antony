import { ReportAis } from "@/types"
import { ReponseType } from "@/utils/Fetcher"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const reportsAi = createApi({
  reducerPath: "reports",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getReportsAi: builder.query<ReponseType<ReportAis>, void>({
      query: () => ({ url: `reports_ai` }),
    }),
  }),
})

export const { useGetReportsAiQuery } = reportsAi
