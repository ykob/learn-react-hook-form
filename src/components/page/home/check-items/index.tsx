import { UseFormRegister } from 'react-hook-form'
import { Checkbox } from '../../../ui-parts'
import { Inputs } from '../../../../pages/home'

type Props = {
  register: UseFormRegister<Inputs>
}

export const CheckItems = function (props: Props) {
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
      {...props.register('sampleTextArray')}
    >
      {o.label}
    </Checkbox>
  ))
  return <>{items}</>
}
