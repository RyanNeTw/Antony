"use client"

import { useAuth } from "@/app/AuthContext"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Toast from "@/components/Toast"
import Inputs from "@/components/ui/Inputs"
import SubmitButton from "@/components/ui/SubmitButton"
import Title from "@/components/ui/Title"
import { ToastType, TypeComponent } from "@/types"
import { useRouter } from "next/navigation"
import { Suspense, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}

const Page = () => {
  const { login } = useAuth()
  const [showToast, setShowToast] = useState(false)
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
      setShowToast(true)
      router.push("/admin/dashboard")
    }
  }
  return (
    <>
      <Suspense fallback={<div>Chargement...</div>}>
        {showToast && (
          <Toast
            message="tt"
            type={ToastType.SUCCESS}
            onClose={() => setShowToast(false)}
          />
        )}
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
        <Footer />
      </Suspense>
    </>
  )
}

export default Page
