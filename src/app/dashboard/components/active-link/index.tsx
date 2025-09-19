'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ children, href, ...props }: ActiveLinkProps) => {
  const pathname = usePathname()
  const isCurrentTab = pathname === href || pathname === props.as

  return (
    <Link
      {...props}
      href={href}
      className={`${isCurrentTab ? 'text-blue-500' : 'text-white'} flex items-center gap-1 font-semibold transition hover:text-blue-200`}
    >
      {children}
    </Link>
  )
}
