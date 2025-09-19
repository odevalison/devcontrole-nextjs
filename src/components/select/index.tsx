import { SelectHTMLAttributes, useId } from 'react'

type SelectProps = {
  children: React.ReactNode
  label: string
  error?: string
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select = ({ label, error, children, ...props }: SelectProps) => {
  const selectId = useId()

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={selectId} className="text-sm font-semibold">
        {label}
      </label>

      <select
        {...props}
        id={selectId}
        className="w-full rounded-md border border-zinc-200 px-3 py-1.5 text-sm outline-blue-500 placeholder:text-sm disabled:opacity-75"
      >
        {children}
      </select>

      {error && <p className="text-xs font-medium text-rose-500">{error}</p>}
    </div>
  )
}
