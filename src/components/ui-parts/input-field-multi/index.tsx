import { forwardRef, TextareaHTMLAttributes } from 'react'

export const InputFieldMulti = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function (
  { children, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref
) {
  const classNameBase = 'p-2 border border-black rounded'

  return (
    <textarea
      className={[props.className, classNameBase].join(' ')}
      ref={ref}
      {...props}
    >
      {children}
    </textarea>
  )
})
