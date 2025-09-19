import { TextareaHTMLAttributes, useId } from 'react'

type TextareaProps = {
  label: string
  error?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({
  label,
  error,
  placeholder,
  ...props
}: TextareaProps) => {
  const textareaId = useId()

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={textareaId} className="text-sm font-semibold">
        {label}
      </label>

      <textarea
        {...props}
        id={textareaId}
        placeholder={placeholder}
        className="w-full resize-none rounded-md border border-zinc-200 px-3 py-1.5 text-sm outline-blue-500 placeholder:text-sm disabled:opacity-75"
      ></textarea>

      {error && <p className="text-xs font-medium text-rose-500">{error}</p>}
    </div>
  )
}
