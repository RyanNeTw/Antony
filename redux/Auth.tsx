import { Login } from "@/app/api/auth/login/route"
import { ReportAi, ReportAis } from "@/types"
import { ReponseType } from "@/utils/Fetcher"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type LoginTypeResponse = {
  session: {
    access_token: string | null
    refresh_token: string | null
    errorCode: string | null
  }
}

export const auth = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginTypeResponse, Login>({
      query: ({ email, password }) => ({
        url: `auth/login`,
        method: "POST",
        body: { email, password },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
})

export const { useLoginMutation } = auth
