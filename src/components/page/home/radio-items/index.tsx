import { UseFormRegister } from 'react-hook-form'
import { RadioButton } from '../../../ui-parts'
import { Inputs } from '../../../../pages/home'

type Props = {
  register: UseFormRegister<Inputs>
}

export const RadioItems = function (props: Props) {
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
      {...props.register('sampleTextRadio')}
    >
      {o.label}
    </RadioButton>
  ))
  return <>{items}</>
}
