import { zodResolver } from '@hookform/resolvers/zod'
import { MouseEventHandler } from 'react'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import { CheckItems, RadioItems } from './components/'
import { ButtonFilled, ErrorText, InputField } from '../../components/ui-parts'

export type Inputs = {
  sampleText: string
  sampleNumber: number
  sampleTextArray: string[]
  sampleTextRadio: string
}

const schema = z.object({
  sampleText: z.string().min(1, { message: 'Required' }),
  sampleNumber: z
    .number()
    .min(1, { message: 'Input a number greater than equal to 1.' })
    .max(10, { message: 'Input a number less than equal to 10.' }),
  sampleTextArray: z.string().array(),
  sampleTextRadio: z.string(),
})

export const PageHome = function () {
  const methods = useForm<Inputs>({
    defaultValues: {
      sampleText: '',
      sampleNumber: 1,
      sampleTextArray: ['Check 1'],
      sampleTextRadio: 'Radio 1',
    },
    resolver: zodResolver(schema),
  })
  const { errors, isDirty, isSubmitted, isSubmitSuccessful } = methods.formState

  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    methods.reset()
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div className="grid grid-cols-2 gap-8">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div>
            <InputField
              placeholder="sample text"
              {...methods.register('sampleText')}
            />
            {errors.sampleText?.message && (
              <ErrorText>{errors.sampleText?.message}</ErrorText>
            )}
          </div>
          <div>
            <InputField
              placeholder="sample number"
              type="number"
              {...methods.register('sampleNumber', {
                setValueAs: (v) => parseInt(v),
              })}
            />
            {errors.sampleNumber?.message && (
              <ErrorText>{errors.sampleNumber?.message}</ErrorText>
            )}
          </div>
          <div className="flex gap-4">
            <CheckItems />
          </div>
          <div className="flex gap-4">
            <RadioItems />
          </div>
          <div className="flex gap-4">
            <ButtonFilled type="button" onClick={onReset}>
              Reset
            </ButtonFilled>
            <ButtonFilled>Submit</ButtonFilled>
          </div>
        </form>
      </FormProvider>
      <div>
        <h2 className="text-xl">formState</h2>
        <p>isDirty: {String(isDirty)}</p>
        <p>isSubmitted: {String(isSubmitted)}</p>
        <p>isSubmitSuccessful: {String(isSubmitSuccessful)}</p>
      </div>
    </div>
  )
}
