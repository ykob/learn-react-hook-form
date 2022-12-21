import { zodResolver } from '@hookform/resolvers/zod'
import { MouseEventHandler } from 'react'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import { InputField, ButtonFilled } from '../../components/ui-parts'

type Inputs = {
  sampleText: string
  sampleNumber: number
}

const schema = z.object({
  sampleText: z.string().min(1, { message: 'Required' }),
  sampleNumber: z
    .number()
    .min(1, { message: 'Input a number greater than equal to 1.' })
    .max(10, { message: 'Input a number less than equal to 10.' }),
})

export const PageHome = function () {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    defaultValues: { sampleText: '', sampleNumber: 1 },
    resolver: zodResolver(schema),
  })

  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    reset()
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="sampleText"
          control={control}
          render={({ field }) => (
            <InputField placeholder="sample text" {...field} />
          )}
        />
        {errors.sampleText?.message && <p>{errors.sampleText?.message}</p>}
      </div>
      <div>
        <Controller
          name="sampleNumber"
          control={control}
          render={({ field }) => (
            <InputField
              placeholder="sample number"
              type="number"
              {...field}
              onChange={(e) => field.onChange(parseInt(e.target.value))}
            />
          )}
        />
        {errors.sampleNumber?.message && <p>{errors.sampleNumber?.message}</p>}
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
