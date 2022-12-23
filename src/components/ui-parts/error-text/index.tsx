import { HTMLAttributes } from 'react'

export const ErrorText = function ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const classNameBase = 'text-red-500'

  return (
    <div className={[props.className, classNameBase].join(' ')} {...props}>
      {children}
    </div>
  )
}
