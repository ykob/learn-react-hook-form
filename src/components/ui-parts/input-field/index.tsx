import { InputHTMLAttributes } from 'react'

export const InputField = function ({
  type = 'text',
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="px-2 h-8 border border-black rounded"
      type={type}
      {...props}
    />
  )
}
