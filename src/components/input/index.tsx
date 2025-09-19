import { InputHTMLAttributes, useId } from 'react'

type InputProps = {
  label?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  label,
  error,
  placeholder,
  type = 'text',
  ...props
}: InputProps) => {
  const inputId = useId()

  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold">
          {label}
        </label>
      )}

      <input
        {...props}
        type={type}
        id={inputId}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm outline-blue-500 placeholder:text-sm disabled:opacity-75"
      />

      {error && <p className="text-xs font-medium text-rose-500">{error}</p>}
    </div>
  )
}
