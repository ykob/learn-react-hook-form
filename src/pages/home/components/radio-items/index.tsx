import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { RadioButton } from '../../../../components/ui-parts'
import { Inputs } from '../..'

export const RadioItems = memo(function () {
  const { register } = useFormContext<Inputs>()
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
      {...register('textSelectOnlyOne')}
    >
      {o.label}
    </RadioButton>
  ))

  return <>{items}</>
})
