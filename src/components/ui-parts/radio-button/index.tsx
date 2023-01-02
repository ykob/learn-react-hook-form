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
  value: string
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const RadioButton = forwardRef<HTMLInputElement, Props>(function (
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
        type="radio"
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      {props.children}
    </label>
  )
})
