"use client"

import React, { useState, useEffect } from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"

type FormValues = {
  status: boolean
  issueDetails: string
  additionalInfo: string
}

const UrgentForm = () => {
  const [priority, setPriority] = useState<string>("Urgent")
  const [name, setName] = useState<string>("Josette Morrin")
  const [issueName, setIssueName] = useState<string>(
    "Trou au milieu de la route"
  )
  const [location, setLocation] = useState<string>(
    "5 Boulevard Benjamin le Grand, 92160 Antony"
  )

  const { control, watch, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      status: true,
      issueDetails: "",
      additionalInfo: "",
    },
  })

  useEffect(() => {
    setName(name)
    setPriority(priority)
    setIssueName(issueName)
    setLocation(location)
  }, [name, priority, issueName, location])

  const status = watch("status")

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center"
    >
      <div className="flex flex-col space-y-4">
        <h1 className="h-[41px] w-[623px] text-[34px] font-light text-burgundy">
          Signalement Urgent de {name}
        </h1>
        <p className="text-[#252B4F] text-xs font-extralight italic">
          Dernière modification le 28/11/2024
        </p>
        <div className="flex relative flex-col h-[550px] w-[476px] space-y-2">
          <p className="flex items-center bg-warning w-[84px] h-[36px] px-[14px] py-[10px] font-bold text-xs text-white">
            {priority}
          </p>

          <div className="flex space-x-2">
            <p className="flex items-center bg-backgroundInput w-[136px] h-[36px] px-[14px] py-[10px] text-xs font-normal text-[#9D397C]">
              {name}
            </p>
            <p className="flex bg-darkGray w-[231px] h-[36px] px-[14px] py-[10px] text-xs font-normal text-white">
              {issueName}
            </p>
          </div>
          <p className="flex bg-backgroundInput w-[476px] h-[36px] px-[14px] py-[10px] text-xs font-extralight text-[#252B4F]">
            {location}
          </p>

          <Controller
            name="issueDetails"
            control={control}
            rules={{
              required: "Les détails du problème sont requis",
              minLength: 20,
              maxLength: 300,
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <textarea
                  {...field}
                  className="bg-backgroundInput h-[139px] p-2 text-blue text-xs"
                ></textarea>
                {error && (
                  <p className="text-red-500 text-xs">{error.message}</p>
                )}
              </>
            )}
          />

          <Controller
            name="additionalInfo"
            control={control}
            rules={{
              required: "Informations supplémentaires requises",
              minLength: 10,
              maxLength: 300,
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <textarea
                  {...field}
                  className="bg-darkGray h-[139px] p-2 text-blue text-xs text-white"
                ></textarea>
                {error && (
                  <p className="text-red-500 text-xs">{error.message}</p>
                )}
              </>
            )}
          />

          <div className="absolute bottom-0 w-full flex justify-between">
            <button
              type="button"
              className={`px-[14px] py-[10px] w-[87px] h-[36px] text-white text-xs font-normal ${
                status ? "bg-burgundy" : "bg-green"
              }`}
            >
              {status ? "Supprimer" : "Récupérer"}
            </button>

            {status && (
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="bg-primary px-[14px] py-[10px] w-[75px] h-[36px] text-white text-xs font-normal"
                >
                  Modifier
                </button>
                <button
                  type="submit"
                  className="bg-green px-[14px] py-[10px] w-[74px] h-[36px] text-white text-xs font-normal"
                >
                  Envoyer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  )
}

export default UrgentForm
