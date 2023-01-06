import { zodResolver } from '@hookform/resolvers/zod'
import { MouseEventHandler } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import { CheckItems, RadioItems } from '../../components/page/home/'
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
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      sampleText: '',
      sampleNumber: 1,
      sampleTextArray: ['Check 1'],
      sampleTextRadio: 'Radio 1',
    },
    resolver: zodResolver(schema),
  })

  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    reset()
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputField placeholder="sample text" {...register('sampleText')} />
        {errors.sampleText?.message && (
          <ErrorText>{errors.sampleText?.message}</ErrorText>
        )}
      </div>
      <div>
        <InputField
          placeholder="sample number"
          type="number"
          {...register('sampleNumber', {
            setValueAs: (v) => parseInt(v),
          })}
        />
        {errors.sampleNumber?.message && (
          <ErrorText>{errors.sampleNumber?.message}</ErrorText>
        )}
      </div>
      <div className="flex gap-4">
        <CheckItems register={register} />
      </div>
      <div className="flex gap-4">
        <RadioItems register={register} />
      </div>
      <div className="flex gap-4">
        <ButtonFilled type="button" onClick={onReset}>
          Reset
        </ButtonFilled>
        <ButtonFilled>Submit</ButtonFilled>
      </div>
    </form>
  )
}
