import { Control, Controller } from 'react-hook-form'
import { Checkbox } from '../../../components/ui-parts'

type Item = {
  id: string
  label: string
  value: string
}
type Props = {
  control: Control<any>
  items: Item[]
  name: string
}

export const CheckboxController = function (props: Props) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={() => (
        <>
          {props.items.map((o) => (
            <Checkbox key={o.id} name={props.name} {...o}>
              {o.label}
            </Checkbox>
          ))}
        </>
      )}
    />
  )
}
