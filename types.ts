import { z } from "zod"

const BasicZod = z.object({
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string().nullable(),
})

export const ReportSchema = z.object({
  firstname: z.string().min(1, "Le champ prénom est requis"),
  lastname: z.string().min(1, "Le champ nom est requis"),
  email: z.string().email("Le champ email doit être valide"),
  is_habitant: z.preprocess(
    (val) => (val === "true" ? true : val === "false" ? false : val),
    z.boolean()
  ),
  street_number: z.preprocess(
    (val) => (typeof val === "string" ? Number(val.trim()) : val),
    z.number().positive("Le champ street_number doit être un nombre valide")
  ),
  street: z.string().min(1, "Le champ street est requis"),
  street_1: z.string().optional(),
  street_2: z.string().optional(),
  report: z.string().min(1, "Le champ report est requis"),
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

export enum TypeComponent {
  WARNING = "bg-warning",
  OK = "bg-greenForm",
}

export enum SignalmentsFilter {
  DELETED = "Supprimés",
  NOT_CONSULTED = "Non-Consultés",
  CONSULTED = "Consultés",
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

export const ReportAiZod = BasicZod.merge(
  z.object({
    title: z.string(),
    status: z.nativeEnum(ReportStatus),
    is_deleted: z.boolean().default(false),
    is_read: z.boolean().default(false),
    count: z.number(),
    reports: ReportsZod,
    users: z.array(UserZod),
  })
)
export type ReportAi = z.infer<typeof ReportAiZod>

export const ReportAisZod = z.array(ReportAiZod)
export type ReportAis = z.infer<typeof ReportAisZod>

export type ValidationResult = {
  isValid: boolean
  errors: string[]
  data?: ReportType
}
