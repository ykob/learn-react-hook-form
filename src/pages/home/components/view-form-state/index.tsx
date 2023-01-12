import { memo } from 'react'
import { Control, useFormState } from 'react-hook-form'
import { Inputs } from '../..'

type Props = {
  control: Control<Inputs>
}

export const ViewFormState = memo(function ({ control }: Props) {
  const { isDirty, isSubmitted, isSubmitSuccessful } = useFormState({ control })

  return (
    <div>
      <h2 className="mb-2 text-xl">formState</h2>
      <p>isDirty: {String(isDirty)}</p>
      <p>isSubmitted: {String(isSubmitted)}</p>
      <p>isSubmitSuccessful: {String(isSubmitSuccessful)}</p>
    </div>
  )
})
