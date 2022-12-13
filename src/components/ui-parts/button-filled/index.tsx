import { ComponentProps, createElement, memo } from 'react'

type Tags = 'button' | 'a'
type Props<T extends Tags> = ComponentProps<T> & {
  as?: T
}

const ButtonFilledBase = <T extends Tags = 'button'>({
  as,
  children,
  className,
  ...props
}: Props<T>) => {
  const classNameBase = 'bg-emerald-500 px-4 py-2 rounded text-white'

  return createElement(
    as || 'button',
    {
      className: [className, classNameBase].join(' '),
      ...props,
    },
    children
  )
}

export const ButtonFilled = memo<Props<'button'>>(ButtonFilledBase)
export const ButtonFilledLink = memo<Props<'a'>>(ButtonFilledBase)
