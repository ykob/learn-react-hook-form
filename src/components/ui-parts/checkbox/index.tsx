import { ReactNode } from 'react'

interface Props {
  checked?: boolean
  children: ReactNode
  id: string
  name: string
  value: string
}

export const Checkbox = function (props: Props) {
  return (
    <label className="inline-flex items-center gap-2" htmlFor={props.id}>
      <input
        checked={props.checked}
        id={props.id}
        name={props.name}
        type="checkbox"
        value={props.value}
      />
      {props.children}
    </label>
  )
}
