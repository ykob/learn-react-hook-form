import { forwardRef, ReactNode } from 'react'

interface Props {
  checked?: boolean
  children?: ReactNode
  id: string
  name: string
  value: string
}

export const RadioButton = forwardRef<
  HTMLInputElement,
  Props
>(function (props, ref) {
  return (
    <label className="inline-flex items-center gap-2" htmlFor={props.id}>
      <input
        checked={props.checked}
        id={props.id}
        name={props.name}
        ref={ref}
        type="radio"
        value={props.value}
      />
      {props.children}
    </label>
  )
})
