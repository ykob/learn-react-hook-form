import { Control, useFormState } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Inputs } from '../..'
import { ErrorText } from '../../../../components/ui-parts'

type Props = {
  control: Control<Inputs>
}

export const ViewErrorMessage = function ({ control }: Props) {
  const { errors, isValid } = useFormState({ control })

  const ErrorMessages = function () {
    const items = Object.keys(errors).map((o) => (
      <ErrorText
        className="flex flex-wrap gap-x-2"
        key={`error-message-block-${o}`}
      >
        <div className="font-bold shrink-0">{o}</div>
        <div>:</div>
        <ErrorMessage errors={errors} name={o} />
      </ErrorText>
    ))

    return <div className="flex flex-col gap-2">{items}</div>
  }

  return (
    <div>
      <h2 className="mb-2 text-xl">Errors</h2>
      {isValid || Object.keys(errors).length < 1 ? (
        <div>no errors.</div>
      ) : (
        <ErrorMessages />
      )}
    </div>
  )
}
