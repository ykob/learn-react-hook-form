import { forwardRef, InputHTMLAttributes } from 'react'

export const InputField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function (
  { type = 'text', ...props }: InputHTMLAttributes<HTMLInputElement>,
  ref
) {
  return (
    <input
      className="px-2 h-8 border border-black rounded"
      ref={ref}
      type={type}
      {...props}
    />
  )
})
