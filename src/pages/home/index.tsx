import { zodResolver } from '@hookform/resolvers/zod'
import { MouseEventHandler, useState } from 'react'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import {
  CheckItems,
  ErrorMessageBlock,
  RadioItems,
  ViewFormState,
  ViewSubmittedData,
} from './components/'
import { schema } from './schema'
import {
  ButtonFilled,
  Checkbox,
  ErrorText,
  InputField,
  SelectBox,
} from '../../components/ui-parts'

export type Inputs = {
  textRequired: string
  textAsNumber: number
  textAsEmail: string
  textAsDate: string
  textArray: string[]
  textSelectOnlyOne: string
  booleanWithCheck: boolean
  textEnum: string
}

export const PageHome = function () {
  const methods = useForm<Inputs>({
    defaultValues: {
      textRequired: 'text',
      textAsNumber: 1,
      textAsEmail: 'info@tplh.net',
      textAsDate: '2023-01-01',
      textArray: ['Check 1'],
      textSelectOnlyOne: 'Radio 1',
      booleanWithCheck: true,
      textEnum: '',
    },
    resolver: zodResolver(schema),
  })
  const { errors } = methods.formState
  const [formData, setFormData] = useState<Inputs>()

  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    methods.reset()
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormData(data)
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div>
            <InputField
              placeholder="text required"
              {...methods.register('textRequired')}
            />
            {errors.textRequired?.message && (
              <ErrorText>{errors.textRequired?.message}</ErrorText>
            )}
          </div>
          <div>
            <InputField
              placeholder="text as number"
              type="number"
              {...methods.register('textAsNumber', {
                setValueAs: (v) => parseInt(v),
              })}
            />
            {errors.textAsNumber?.message && (
              <ErrorText>{errors.textAsNumber?.message}</ErrorText>
            )}
          </div>
          <div>
            <InputField
              placeholder="text as email"
              type="email"
              {...methods.register('textAsEmail')}
            />
            {errors.textAsEmail?.message && (
              <ErrorText>{errors.textAsEmail?.message}</ErrorText>
            )}
          </div>
          <div>
            <InputField
              placeholder="text as date"
              type="date"
              {...methods.register('textAsDate', {
                valueAsDate: true,
              })}
            />
            {errors.textAsDate?.message && (
              <ErrorText>{errors.textAsDate?.message}</ErrorText>
            )}
          </div>
          <div className="flex gap-4">
            <CheckItems />
            {errors.textArray?.message && (
              <ErrorText>{errors.textArray?.message}</ErrorText>
            )}
          </div>
          <div className="flex gap-4">
            <RadioItems />
            {errors.textSelectOnlyOne?.message && (
              <ErrorText>{errors.textSelectOnlyOne?.message}</ErrorText>
            )}
          </div>
          <div className="flex gap-4">
            <Checkbox value="" {...methods.register('booleanWithCheck')}>
              Boolean with Checkbox
            </Checkbox>
            {errors.booleanWithCheck?.message && (
              <ErrorText>{errors.booleanWithCheck?.message}</ErrorText>
            )}
          </div>
          <div className="flex gap-4">
            <SelectBox {...methods.register('textEnum')}>
            <option value="">Select</option>
            <option value="1">Select 1</option>
              <option value="2">Select 2</option>
              <option value="3">Select 3</option>
            </SelectBox>
            {errors.textEnum?.message && (
              <ErrorText>{errors.textEnum?.message}</ErrorText>
            )}
          </div>
          <div className="flex gap-4">
            <ButtonFilled type="button" onClick={onReset}>
              Reset
            </ButtonFilled>
            <ButtonFilled>Submit</ButtonFilled>
          </div>
        </form>
      </FormProvider>
      <div className="flex flex-col gap-8">
        <ErrorMessageBlock control={methods.control} />
        <ViewFormState control={methods.control} />
        <ViewSubmittedData data={formData} />
      </div>
    </div>
  )
}
