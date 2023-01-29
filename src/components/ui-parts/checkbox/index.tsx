import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  ReactNode,
} from 'react'

type Props = {
  checked?: boolean
  children?: ReactNode
  id?: string
  name: string
  value: string | number
  onBlur?: FocusEventHandler<HTMLInputElement>
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
        onBlur={props.onBlur}
        onChange={props.onChange}
        />
      {props.children}
    </label>
  )
})
