import { MouseEventHandler } from 'react'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { InputField, ButtonFilled } from '../../components/ui-parts'

type Inputs = {
  example: string
  exampleRequired: string
}

export const PageHome = function () {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    defaultValues: { example: '', exampleRequired: '' },
  })

  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    reset()
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="example"
          control={control}
          render={({ field }) => (
            <InputField placeholder="example" {...field} />
          )}
        />
      </div>
      <div>
        <Controller
          name="exampleRequired"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputField placeholder="example required" {...field} />
          )}
        />
      </div>
      {errors.exampleRequired && <span>This field is required</span>}
      <div className="flex gap-4">
        <ButtonFilled type="button" onClick={onReset}>
          Reset
        </ButtonFilled>
        <ButtonFilled>Submit</ButtonFilled>
      </div>
    </form>
  )
}
