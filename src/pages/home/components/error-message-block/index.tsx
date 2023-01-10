import { Control, useFormState } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Inputs } from '../..'

type Props = {
  control: Control<Inputs>
}

export const ErrorMessageBlock = function ({ control }: Props) {
  const { errors } = useFormState({ control })

  return (
    <div>
      <h2 className="text-xl">Errors</h2>
      <ErrorMessage
        errors={errors}
        name="sampleText"
      />
    </div>
  )
}
