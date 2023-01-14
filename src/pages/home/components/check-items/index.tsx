import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Checkbox } from '../../../../components/ui-parts'
import { Inputs } from '../..'

export const CheckItems = memo(function () {
  const { register } = useFormContext<Inputs>()
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
      {...register('textArray')}
    >
      {o.label}
    </Checkbox>
  ))

  return <>{items}</>
})
