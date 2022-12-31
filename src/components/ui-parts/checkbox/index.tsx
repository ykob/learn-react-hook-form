import { ChangeEventHandler, forwardRef, ReactNode } from 'react'

interface Props {
  checked?: boolean
  children?: ReactNode
  id?: string
  name: string
  value: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(function (
  props,
  ref
) {
  return (
    <label className="inline-flex items-center gap-2" htmlFor={props.id}>
      <input
        checked={props.checked}
        id={props.id}
        name={props.name}
        ref={ref}
        type="checkbox"
        value={props.value}
        onChange={props.onChange}
      />
      {props.children}
    </label>
  )
})
