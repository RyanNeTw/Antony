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

export type OpenAiType = {
  title: string
  status: ReportStatus
}

export type ValidationResult = {
  isValid: boolean
  errors: string[]
  data?: ReportType
}
