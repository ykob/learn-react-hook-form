import { zodResolver } from '@hookform/resolvers/zod'
import { MouseEventHandler, useState } from 'react'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import {
  CheckItems,
  ErrorMessageBlock,
  RadioItems,
  ViewFormState,
  ViewSubmittedData,
} from './components/'
import { ButtonFilled, ErrorText, InputField } from '../../components/ui-parts'

export type Inputs = {
  textRequired: string
  textAsNumber: number
  textAsDate: string
  textArray: string[]
  textSelectOnlyOne: string
}

const schema = z.object({
  textRequired: z.string().min(1, { message: 'Required' }),
  textAsNumber: z
    .number()
    .min(1, { message: 'Input a number greater than equal to 1.' })
    .max(10, { message: 'Input a number less than equal to 10.' }),
  textAsDate: z
    .date()
    .min(new Date('1990-01-01'), { message: 'Too old.' })
    .max(new Date('2100-01-01'), { message: 'Too young.' }),
  textArray: z.string().array(),
  textSelectOnlyOne: z.string(),
})

export const PageHome = function () {
  const methods = useForm<Inputs>({
    defaultValues: {
      textRequired: '',
      textAsNumber: 1,
      textAsDate: '',
      textArray: ['Check 1'],
      textSelectOnlyOne: 'Radio 1',
    },
    resolver: zodResolver(schema),
  })
  const { errors } = methods.formState
  const [formData, setFormData] = useState<Inputs>()

  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    methods.reset()
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormData(data)
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div>
            <InputField
              placeholder="text required"
              {...methods.register('textRequired')}
            />
            {errors.textRequired?.message && (
              <ErrorText>{errors.textRequired?.message}</ErrorText>
            )}
          </div>
          <div>
            <InputField
              placeholder="text as number"
              type="number"
              {...methods.register('textAsNumber', {
                setValueAs: (v) => parseInt(v),
              })}
            />
            {errors.textAsNumber?.message && (
              <ErrorText>{errors.textAsNumber?.message}</ErrorText>
            )}
          </div>
          <div>
            <InputField
              placeholder="text as date"
              type="date"
              {...methods.register('textAsDate', {
                valueAsDate: true,
              })}
            />
            {errors.textAsDate?.message && (
              <ErrorText>{errors.textAsDate?.message}</ErrorText>
            )}
          </div>
          <div className="flex gap-4">
            <CheckItems />
            {errors.textArray?.message && (
              <ErrorText>{errors.textArray?.message}</ErrorText>
            )}
          </div>
          <div className="flex gap-4">
            <RadioItems />
            {errors.textSelectOnlyOne?.message && (
              <ErrorText>{errors.textSelectOnlyOne?.message}</ErrorText>
            )}
          </div>
          <div className="flex gap-4">
            <ButtonFilled type="button" onClick={onReset}>
              Reset
            </ButtonFilled>
            <ButtonFilled>Submit</ButtonFilled>
          </div>
        </form>
      </FormProvider>
      <div className="flex flex-col gap-8">
        <ErrorMessageBlock control={methods.control} />
        <ViewFormState control={methods.control} />
        <ViewSubmittedData data={formData} />
      </div>
    </div>
  )
}
