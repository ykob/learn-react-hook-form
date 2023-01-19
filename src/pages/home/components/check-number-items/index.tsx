import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Checkbox } from '../../../../components/ui-parts'
import { Inputs } from '../..'

export const CheckNumberItems = memo(function () {
  const { register } = useFormContext<Inputs>()
  const data = [
    {
      id: 'check-number-item-001',
      label: 'Check Number 1',
      value: '1',
    },
    {
      id: 'check-number-item-002',
      label: 'Check Number 2',
      value: '2',
    },
    {
      id: 'check-number-item-003',
      label: 'Check Number 3',
      value: '3',
    },
  ]
  const items = data.map((o) => (
    <Checkbox
      id={o.id}
      key={o.id}
      value={o.value}
      {...register('textAsNumberArray', {
        valueAsNumber: true
      })}
    >
      {o.label}
    </Checkbox>
  ))

  return <>{items}</>
})
