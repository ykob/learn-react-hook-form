import { Control, useFormState } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Inputs } from '../..'

type Props = {
  control: Control<Inputs>
}

export const ErrorMessageBlock = function ({ control }: Props) {
  const { errors } = useFormState({ control })

  const ErrorMessages = function () {
    const items = Object.keys(errors).map((o) => (
      <div className='flex flex-wrap gap-x-2'>
        <div className='font-bold shrink-0'>{o}</div>
        <div>:</div>
        <ErrorMessage errors={errors} name={o} />
      </div>
    ))

    return <div className='flex flex-col gap-2'>{items}</div>
  }

  return (
    <div>
      <h2 className="mb-2 text-xl">Errors</h2>
      <ErrorMessages />
    </div>
  )
}
