import { useForm, SubmitHandler } from 'react-hook-form'
import { InputField, ButtonFilled } from '../../components/ui-parts'

type Inputs = {
  example: string
  exampleRequired: string
}

export const PageHome = function () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('example'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputField placeholder="example" {...register('example')} />
      </div>
      <div>
        <InputField
          placeholder="example required"
          {...register('exampleRequired', { required: true })}
        />
      </div>
      {errors.exampleRequired && <span>This field is required</span>}
      <div>
        <ButtonFilled>Submit</ButtonFilled>
      </div>
    </form>
  )
}
