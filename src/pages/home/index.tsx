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
    watch,
  } = useForm<Inputs>({
    defaultValues: { example: '', exampleRequired: '' },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('example'))

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
      <div>
        <ButtonFilled>Submit</ButtonFilled>
      </div>
    </form>
  )
}
