import { zodResolver } from '@hookform/resolvers/zod'
import { MouseEventHandler } from 'react'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import {
  ButtonFilled,
  Checkbox,
  ErrorText,
  InputField,
  RadioButton,
} from '../../components/ui-parts'

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
        {errors.sampleText?.message && (
          <ErrorText>{errors.sampleText?.message}</ErrorText>
        )}
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
        {errors.sampleNumber?.message && (
          <ErrorText>{errors.sampleNumber?.message}</ErrorText>
        )}
      </div>
      <div className="flex gap-4">
        <Checkbox id="check1" name="check" value="1">
          Check 1
        </Checkbox>
        <Checkbox id="check2" name="check" value="2">
          Check 2
        </Checkbox>
      </div>
      <div className="flex gap-4">
        <RadioButton id="radio1" name="radio" value="1">
          Radio 1
        </RadioButton>
        <RadioButton id="radio2" name="radio" value="2">
          Radio 2
        </RadioButton>
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
