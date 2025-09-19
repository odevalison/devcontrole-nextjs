import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'rounded-md text-center font-semibold text-white drop-shadow transition disabled:!cursor-default disabled:opacity-60',
  variants: {
    color: {
      primary: 'bg-blue-500 not-disabled:hover:bg-blue-500/75',
      secondary: 'bg-zinc-500 not-disabled:hover:bg-zinc-500/75',
      success: 'bg-emerald-500 not-disabled:hover:bg-emerald-500/75',
      danger: 'bg-rose-500 not-disabled:hover:bg-rose-500/75',
      ghost: 'bg-transparent text-zinc-800 hover:opacity-75',
    },
    size: {
      sm: 'px-4 py-1 text-sm',
      md: 'px-3 py-2 text-sm',
      lg: 'px-6 py-2',
      icon: 'p-1 size-fit *:size-5',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'sm',
  },
})

type ButtonVariants = VariantProps<typeof button>

type ButtonProps = {
  children: React.ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants

export const Button = ({
  children,
  type = 'button',
  color,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={twMerge(button({ size, color }), className)}
    >
      {children}
    </button>
  )
}
