import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Inputs } from '../..'
import { SelectBox } from '../../../../components/ui-parts'

export const SelectTextEnum = memo(function () {
  const { register } = useFormContext<Inputs>()
  return (
    <SelectBox {...register('textEnum')}>
      <option value="">Select</option>
      <option value="1">Select 1</option>
      <option value="2">Select 2</option>
      <option value="3">Select 3</option>
    </SelectBox>
  )
})
