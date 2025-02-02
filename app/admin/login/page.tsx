"use client"

import { useAuth } from "@/app/AuthContext"
import Header from "@/components/Header"
import Inputs from "@/components/ui/Inputs"
import SubmitButton from "@/components/ui/SubmitButton"
import Title from "@/components/ui/Title"
import { TypeComponent } from "@/types"
import { useRouter } from "next/navigation"
import { Suspense } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}

const Page = () => {
  const { login } = useAuth()
  const router = useRouter()
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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const isLoged = await login(data.email, data.password)
    if (isLoged) {
      router.push("/admin/dashboard")
    }
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
