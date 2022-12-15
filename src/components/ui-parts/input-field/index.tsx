import { InputHTMLAttributes } from 'react'

export const InputField = function ({
  type = 'text',
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="border border-black rounded" type={type} {...props} />
}
