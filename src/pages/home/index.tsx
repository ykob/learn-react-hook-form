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
  sampleNumber: z.number().min(10),
})

export const PageHome = function () {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    defaultValues: { sampleText: '', sampleNumber: 0 },
  })

  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    reset()
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="sampleText"
          control={control}
          render={({ field }) => (
            <InputField placeholder="sampleText" {...field} />
          )}
        />
      </div>
      <div>
        <Controller
          name="sampleNumber"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputField placeholder="example required" {...field} />
          )}
        />
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
