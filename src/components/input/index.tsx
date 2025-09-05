import { InputHTMLAttributes, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({
  label,
  error,
  placeholder,
  type = "text",
  ...props
}: InputProps) {
  const inputId = useId();

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={inputId} className="text-sm font-semibold">
        {label}
      </label>

      <input
        {...props}
        type={type}
        id={inputId}
        placeholder={placeholder}
        className="rounded-md border border-zinc-200 px-3 py-1.5 text-sm outline-blue-500 placeholder:text-sm"
      />

      {error && <p className="text-xs font-medium text-rose-500">{error}</p>}
    </div>
  );
}
