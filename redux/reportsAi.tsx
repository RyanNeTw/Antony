import { ReponseType, ReportAi, ReportAis } from "@/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import Cookies from "js-cookie"

const headers = {
  "Content-Type": "application/json",
  authorization: Cookies.get("token"),
}

export const reportsAi = createApi({
  reducerPath: "reports",
  tagTypes: ["GetReportsAi"],
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getReportsAi: builder.query<
      ReponseType<ReportAis>,
      { is_deleted?: boolean; is_read?: boolean }
    >({
      query: ({ is_deleted, is_read }) => {
        const params: Record<string, boolean> = {}
        if (is_deleted !== undefined) params.is_deleted = is_deleted
        if (is_read !== undefined) params.is_read = is_read

        return {
          url: `reports_ai`,
          params,
          headers,
        }
      },
      providesTags: ["GetReportsAi"],
    }),
    getReportAi: builder.query<ReponseType<ReportAi>, { id: string }>({
      query: ({ id }) => ({
        url: `reports_ai/${id}`,
        headers,
      }),
      providesTags: ["GetReportsAi"],
    }),
    deleteReportAi: builder.mutation<
      void,
      { id: string; is_deleted?: boolean; is_read?: boolean }
    >({
      query: ({ id, is_deleted, is_read }) => ({
        url: `reports_ai/${id}`,
        method: "PUT",
        body: { is_deleted, is_read },
        headers,
      }),
      invalidatesTags: ["GetReportsAi"],
    }),
  }),
})

export const {
  useGetReportsAiQuery,
  useGetReportAiQuery,
  useDeleteReportAiMutation,
} = reportsAi
