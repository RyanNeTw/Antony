'use client'

import InputFile from '@/app/components/UI/InputFile'
import Inputs from '@/app/components/UI/Inputs'
import Paragraph from '@/app/components/UI/Paragraph'
import Radios from '@/app/components/UI/Radios'
import SubmitButton from '@/app/components/UI/SubmitButton'
import Title from '@/app/dashboard_agent/components/typography/Title'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  firstname: string
  lastname: string
  email: string
  is_habitant: string
  signalment: string
  street_number: string
  street_name: string
  street_name_1: string
  street_name_2: string
  postcode: string
  region: string
  files: string
}

const Form = () => {
  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      is_habitant: '',
      signalment: '',
      street_number: '',
      street_name: '',
      street_name_1: '',
      street_name_2: '',
      postcode: '',
      region: '',
      files: '',
    },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
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
            rules={{ required: 'Le prénom est requis', maxLength: 100 }}
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
            rules={{ required: 'Le Nom est requis', maxLength: 100 }}
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
          rules={{
            required: 'Le email est requis',
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          }}
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
          rules={{
            required: 'Le is_habitant est requis',
          }}
          render={({ field }) => (
            <Radios label="Habitant" iteration={2} {...field} />
          )}
        />
        <Controller
          name="signalment"
          control={control}
          rules={{
            required: 'Le signalment est requis',
            maxLength: 300,
            minLength: 20,
          }}
          render={({ field }) => (
            <Inputs
              label="Signalment"
              placeholder="Ecrire votre signalement ici ..."
              {...field}
              addStyle="w-full"
            />
          )}
        />

        <Controller
          name="files"
          control={control}
          rules={{
            required: 'Le files est requis',
            maxLength: 300,
            minLength: 20,
          }}
          render={({ field }) => (
            <InputFile
              label="Pieces jointes"
              placeholder="Selectionner"
              addStyle="w-1/5"
              {...field}
            />
          )}
        />

        <div>
          <div className="w-h flex flex-col gap-2">
            <label className="text-purple text-xs font-medium pl-2">
              Emplacement
            </label>
            <div className="flex flex-row gap-1">
              <Controller
                name="street_number"
                control={control}
                rules={{
                  required: 'Le street_number est requis',
                }}
                render={({ field }) => (
                  <Inputs placeholder="N" addStyle="w-1/5" {...field} />
                )}
              />
              <Controller
                name="street_name"
                control={control}
                rules={{
                  required: 'Le street_name est requis',
                }}
                render={({ field }) => (
                  <Inputs placeholder="Rue" addStyle="w-4/5" {...field} />
                )}
              />
            </div>
            <Controller
              name="street_name_1"
              control={control}
              render={({ field }) => (
                <Inputs placeholder={`Complement d'addresse 1`} {...field} />
              )}
            />
            <Controller
              name="street_name_2"
              control={control}
              render={({ field }) => (
                <Inputs placeholder={`Complement d'addresse 2`} {...field} />
              )}
            />
            <div className="flex flex-row gap-1">
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
        </div>

        <SubmitButton text="Soumettre" addStyle="mt-4" />
      </form>
    </div>
  )
}

export default Form
