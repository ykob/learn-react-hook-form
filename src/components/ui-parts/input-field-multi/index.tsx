import { TextareaHTMLAttributes } from 'react'

export const InputFieldMulti = function ({
  children,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="border border-black rounded" {...props}>{children}</textarea>
}
