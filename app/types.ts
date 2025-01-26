import { z } from "zod"

const BasicZod = z.object({
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string().nullable(),
})

export type ReportType = UserType & {
  street: string
  street_number: number
  street_1?: string | null
  street_2?: string | null
  report: string
}

export type ReportAiType = OpenAiType & {
  is_deleted: boolean
  is_read: boolean
  count: number
}

export type UserType = {
  firstname: string
  lastname: string
  email: string
  is_habitant: boolean
}

export enum ReportStatus {
  HIGH = "HIGH",
  MID = "MID",
  LOW = "LOW",
}

export const OpenAiTypeZod = z.object({
  title: z.string(),
  status: z.nativeEnum(ReportStatus),
})
export type OpenAiType = z.infer<typeof OpenAiTypeZod>

export const UserZod = BasicZod.merge(
  z.object({
    email: z.string(),
    lastname: z.string(),
    firstname: z.string(),
    is_habitant: z.boolean().default(false),
    report_ai_id: z.string(),
  })
)
export type User = z.infer<typeof UserZod>

export const ReportZod = z.object({
  date: z.string(),
  report: z.string(),
  street: z.string(),
  user_id: z.string(),
  street_1: z.string().nullable(),
  street_2: z.string().nullable(),
  report_ai_id: z.string(),
  street_number: z.number(),
})
export type Report = z.infer<typeof ReportZod>

export const ReportsZod = z.array(ReportZod)
export type Reports = z.infer<typeof ReportsZod>

export const ReportAiZod = z.object({
  title: z.string(),
  status: z.nativeEnum(ReportStatus),
  is_deleted: z.boolean().default(false),
  is_read: z.boolean().default(false),
  count: z.number(),
  reports: ReportsZod,
  users: z.array(UserZod),
})
export type ReportAi = z.infer<typeof ReportAiZod>

export const ReportAisZod = z.array(ReportAiZod)
export type ReportAis = z.infer<typeof ReportAisZod>

export type ValidationResult = {
  isValid: boolean
  errors: string[]
  data?: ReportType
}
