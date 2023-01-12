import { HTMLAttributes } from 'react'

export const ErrorText = function ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const classNameBase = 'text-red-500'

  return (
    <div className={[classNameBase, className].join(' ')} {...props}>
      {children}
    </div>
  )
}
