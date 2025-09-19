'use client'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-7xl p-5 ${className}`}>
      {children}
    </div>
  )
}
