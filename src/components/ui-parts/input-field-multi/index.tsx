import { TextareaHTMLAttributes } from 'react'

export const InputFieldMulti = function ({
  children,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props}>{children}</textarea>
}
