import { zodResolver } from '@hookform/resolvers/zod'
import { MouseEventHandler } from 'react'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import { CheckboxController } from '../../components/features'
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
  sampleTextArray: string[]
}

const schema = z.object({
  sampleText: z.string().min(1, { message: 'Required' }),
  sampleNumber: z
    .number()
    .min(1, { message: 'Input a number greater than equal to 1.' })
    .max(10, { message: 'Input a number less than equal to 10.' }),
  sampleTextArray: z.string().array(),
})

const checkItems = [
  {
    id: 'check-item-001',
    label: 'Check 1',
    value: '1',
  },
  {
    id: 'check-item-002',
    label: 'Check 2',
    value: '2',
  },
]

export const PageHome = function () {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    defaultValues: { sampleText: '', sampleNumber: 1, sampleTextArray: ['1'] },
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
        <CheckboxController
          control={control}
          items={checkItems}
          name="sampleTextArray"
        />
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
