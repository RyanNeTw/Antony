"use client"

import Paragraph from "@/components/typography/Paragraph"
import Title from "@/components/typography/Title"
import InputFile from "@/components/ui/InputFile"
import Inputs from "@/components/ui/Inputs"
import Radios from "@/components/ui/Radios"
import SubmitButton from "@/components/ui/SubmitButton"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  firstname: string
  lastname: string
  email: string
  is_habitant: boolean
  report: string
  street_number: number
  street: string
  street_1: string
  street_2: string
  postcode: string
  region: string
  files: string
}

const Form = () => {
  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      is_habitant: undefined,
      report: "",
      street_number: undefined,
      street: "",
      street_1: "",
      street_2: "",
      postcode: "92",
      region: "Antony",
      files: "",
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault()

    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`Erreur API ${response.status}: ${errorText}`)
        throw new Error(`Erreur API ${response.status}: ${errorText}`)
      }

      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        const rawResponse = await response.text()
        console.error("Réponse non JSON reçue :", rawResponse)
        throw new Error(`Réponse incorrecte: ${rawResponse}`)
      }

      const result = await response.json()
      console.log("Réponse de l'API:", result)
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error)
    }
  }

  return (
    <div className="w-auto">
      <Title>Formulaire de signalements</Title>
      <Paragraph
        text="Dernière modification le 28/11/2024"
        addStyle="font-extralight text-xs italic"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-2"
      >
        <div className="flex flex-row justify-between">
          <Controller
            name="firstname"
            control={control}
            render={({ field }) => (
              <Inputs
                label="Prénom"
                placeholder="Amélia"
                addStyle="w-h"
                {...field}
              />
            )}
          />
          <Controller
            name="lastname"
            control={control}
            render={({ field }) => (
              <Inputs
                label="Nom"
                placeholder="Dupont"
                addStyle="w-h"
                {...field}
              />
            )}
          />
        </div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Inputs
              label="Adresse E-mail"
              placeholder="amélia.dupont@yahoo.fr"
              addStyle="w-h"
              {...field}
            />
          )}
        />
        <Controller
          name="is_habitant"
          control={control}
          render={({ field }) => (
            <Radios label="Habitant" iteration={2} {...field} />
          )}
        />
        <Controller
          name="report"
          control={control}
          render={({ field }) => (
            <Inputs
              label="Signalement"
              placeholder="Écrire votre signalement ici ..."
              {...field}
              addStyle="w-full"
            />
          )}
        />
        <Controller
          name="files"
          control={control}
          render={({ field }) => (
            <InputFile
              label="Pièces jointes"
              placeholder="Sélectionner"
              addStyle="w-fit"
              {...field}
            />
          )}
        />

        <div>
          <label className="text-purple text-xs font-medium pl-2">
            Emplacement
          </label>
          <div className="flex flex-row gap-1 w-h">
            <Controller
              name="street_number"
              control={control}
              render={({ field }) => (
                <Inputs placeholder="N°" addStyle="w-1/5" {...field} />
              )}
            />
            <Controller
              name="street"
              control={control}
              render={({ field }) => (
                <Inputs placeholder="Rue" addStyle="w-4/5" {...field} />
              )}
            />
          </div>
          <Controller
            name="street_1"
            control={control}
            render={({ field }) => (
              <Inputs
                placeholder="Complément d'adresse 1"
                addStyle="w-h"
                {...field}
              />
            )}
          />
          <Controller
            name="street_2"
            control={control}
            render={({ field }) => (
              <Inputs
                placeholder="Complément d'adresse 2"
                addStyle="w-h"
                {...field}
              />
            )}
          />
          <div className="flex flex-row gap-1 w-[50%]">
            <Controller
              name="postcode"
              control={control}
              render={({ field }) => (
                <Inputs
                  placeholder="92160"
                  addStyle="w-2/5"
                  readonly={true}
                  {...field}
                />
              )}
            />
            <Controller
              name="region"
              control={control}
              render={({ field }) => (
                <Inputs
                  placeholder="Antony"
                  addStyle="w-3/5"
                  readonly={true}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <SubmitButton text="Soumettre" addStyle="mt-4" />
      </form>
    </div>
  )
}

export default Form
