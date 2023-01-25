import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Inputs } from '../..'
import { SelectBox } from '../../../../components/ui-parts'

export const SelectTextEnum = memo(function () {
  const { register } = useFormContext<Inputs>()
  const data = [
    {
      id: 'select-text-enum-item-001',
      label: 'Select 1',
      value: 'Select 1',
    },
    {
      id: 'select-text-enum-item-002',
      label: 'Select 2',
      value: 'Select 2',
    },
    {
      id: 'select-text-enum-item-003',
      label: 'Select 3',
      value: 'Select 3',
    },
  ]
  const items = data.map((o) => (
    <option
      id={o.id}
      key={o.id}
      value={o.value}
      {...register('textArray')}
    >
      {o.label}
    </option>
  ))

  return (
    <SelectBox {...register('textEnum')}>
      <option value="">Select</option>
      {items}
    </SelectBox>
  )
})
