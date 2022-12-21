import { HTMLAttributes } from 'react'

export const ErrorText = function ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="text-red-500" {...props}>
      {children}
    </div>
  )
}
