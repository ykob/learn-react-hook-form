import { InputHTMLAttributes } from 'react'

export const InputField = function ({
  type = 'text',
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input type={type} {...props} />
}
