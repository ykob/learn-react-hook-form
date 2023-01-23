import { forwardRef, SelectHTMLAttributes } from 'react'

export const SelectBox = forwardRef<
HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(function (
  props: SelectHTMLAttributes<HTMLSelectElement>,
  ref
) {
  const classNameBase = 'px-2 h-8 border border-black rounded'

  return (
    <select
      className={[props.className, classNameBase].join(' ')}
      ref={ref}
      {...props}
    >
    </select>
  )
})
