import { forwardRef, TextareaHTMLAttributes } from 'react'

export const InputFieldMulti = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function (
  { children, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref
) {
  return (
    <textarea className="p-2 border border-black rounded" ref={ref} {...props}>
      {children}
    </textarea>
  )
})
