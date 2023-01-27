import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Inputs } from '../..'
import { SelectBox } from '../../../../components/ui-parts'
import { Fruits } from '../../../../configs/enum'

export const SelectTextEnum = memo(function () {
  const { register } = useFormContext<Inputs>()
  const data = [
    {
      id: 'select-text-enum-item-001',
      label: 'Apple',
      value: Fruits.Apple,
    },
    {
      id: 'select-text-enum-item-002',
      label: 'Banana',
      value: Fruits.Banana,
    },
    {
      id: 'select-text-enum-item-003',
      label: 'Cantaloupe',
      value: Fruits.Cantaloupe,
    },
  ]
  const items = data.map((o) => (
    <option id={o.id} key={o.id} value={o.value}>
      {o.label}
    </option>
  ))

  return (
    <SelectBox
      {...register('textEnum', {
        valueAsNumber: true,
      })}
    >
      <option value="">Select Fluit</option>
      {items}
    </SelectBox>
  )
})
