"use client"

import Inputs from "@/app/components/UI/Inputs"
import SubmitButton from "@/app/components/UI/SubmitButton"
import Header from "@/app/dashboard_agent/components/Header"
import Title from "@/app/dashboard_agent/components/typography/Title"
import { TypeComponent } from "@/app/types"
import { Suspense } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}

const Page = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }
  return (
    <>
      <Suspense fallback={<div>Chargement...</div>}>
        <Header />
        <div className="mx-auto max-w-5xl">
          <Title text={"Connectez-vous"} addStyle="flex justify-center my-16" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col gap-2 justify-center items-center"
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Le mail est requis",
                maxLength: 100,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Regex",
                },
              }}
              render={({ field }) => (
                <Inputs
                  label="Identifiant / Adress E-mail"
                  placeholder="amelia.dupont@yahoo.com"
                  addStyle="w-h"
                  isError={!!errors.email?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Le password est requis",
                maxLength: 100,
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: "Regex",
                },
              }}
              render={({ field }) => (
                <Inputs
                  label="Mot de passe"
                  inputType="password"
                  placeholder="***********"
                  addStyle="w-h"
                  isError={!!errors.password?.message}
                  {...field}
                />
              )}
            />
            <p className="text-xs font-extralight">
              Vous avez oublié votre mot de passe ?
            </p>
            <SubmitButton
              text="Connexion"
              type={TypeComponent.BASIC}
              addStyle="self-center mt-12"
            />
          </form>
        </div>
      </Suspense>
    </>
  )
}

export default Page
