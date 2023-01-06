import { zodResolver } from '@hookform/resolvers/zod'
import { MouseEventHandler } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
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

  const CheckItems = function () {
    const data = [
      {
        id: 'check-item-001',
        label: 'Check 1',
        value: 'Check 1',
      },
      {
        id: 'check-item-002',
        label: 'Check 2',
        value: 'Check 2',
      },
    ]
    const items = data.map((o) => (
      <Checkbox
        id={o.id}
        key={o.id}
        value={o.value}
        {...register('sampleTextArray')}
      >
        {o.label}
      </Checkbox>
    ))
    return <>{items}</>
  }

  const RadioItems = function () {
    const data = [
      {
        id: 'radio-item-001',
        label: 'Radio 1',
        value: 'Radio 1',
      },
      {
        id: 'radio-item-002',
        label: 'Radio 2',
        value: 'Radio 2',
      },
    ]
    const items = data.map((o) => (
      <RadioButton
        id={o.id}
        key={o.id}
        value={o.value}
        {...register('sampleTextRadio')}
      >
        {o.label}
      </RadioButton>
    ))
    return <>{items}</>
  }

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
      <div className="flex gap-4">{CheckItems()}</div>
      <div className="flex gap-4">{RadioItems()}</div>
      <div className="flex gap-4">
        <ButtonFilled type="button" onClick={onReset}>
          Reset
        </ButtonFilled>
        <ButtonFilled>Submit</ButtonFilled>
      </div>
    </form>
  )
}
