import { ReportType, ValidationResult } from "../types"

const CheckReportBody = (data: ReportType): ValidationResult => {
  const errors: string[] = []

  const isValidString = (value: unknown): boolean => {
    return typeof value === "string" && value.trim().length > 0
  }

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  if (!isValidString(data.street)) {
    errors.push(
      "Le champs street est requise et doit être une chaîne de caractères non vide"
    )
  }

  if (typeof data.street_number !== "number") {
    errors.push("Le champs street_number est requis et doit être un nombre")
  }

  if (data.street_1 !== undefined && !isValidString(data.street_1)) {
    errors.push(
      "Si fourni, le champs street_1 doit être une chaîne de caractères non vide"
    )
  }

  if (data.street_2 !== undefined && !isValidString(data.street_2)) {
    errors.push(
      "Si fourni, le champs street_2 doit être une chaîne de caractères non vide"
    )
  }

  if (!isValidString(data.report)) {
    errors.push(
      "Le champs report est requis et doit être une chaîne de caractères non vide"
    )
  }

  if (!isValidString(data.firstname)) {
    errors.push(
      "Le champs firstname est requis et doit être une chaîne de caractères non vide"
    )
  }

  if (!isValidString(data.lastname)) {
    errors.push(
      "Le champs lastname est requis et doit être une chaîne de caractères non vide"
    )
  }

  if (!isValidString(data.email) || !isValidEmail(data.email)) {
    errors.push("Le champs email est requis et doit être dans un format valide")
  }

  if (typeof data.is_habitant !== "boolean") {
    data.is_habitant = false
  }

  if (errors.length === 0) {
    const validatedData: ReportType = {
      street: data.street.trim(),
      street_number: data.street_number,
      report: data.report.trim(),
      firstname: data.firstname.trim(),
      lastname: data.lastname.trim(),
      email: data.email.trim(),
      is_habitant: data.is_habitant,
    }

    if (data.street_1) validatedData.street_1 = data.street_1.trim()
    if (data.street_2) validatedData.street_2 = data.street_2.trim()

    return {
      isValid: true,
      errors: [],
      data: validatedData,
    }
  }

  return {
    isValid: false,
    errors,
  }
}

export default CheckReportBody
