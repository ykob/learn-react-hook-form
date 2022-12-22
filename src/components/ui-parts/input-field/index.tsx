import { forwardRef, InputHTMLAttributes } from 'react'

export const InputField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function (
  { type = 'text', ...props }: InputHTMLAttributes<HTMLInputElement>,
  ref
) {
  const classNameBase = 'px-2 h-8 border border-black rounded'

  return (
    <input
      className={[props.className, classNameBase].join(' ')}
      ref={ref}
      type={type}
      {...props}
    />
  )
})
