import { ButtonHTMLAttributes } from "react";

type ButtonVariants = "primary" | "secondary" | "danger";
type ButtonSizes = "sm" | "lg" | "md" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
}

export function Button({
  children,
  size = "sm",
  variant = "primary",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-4 py-1 text-sm";
      case "md":
        return "px-3 py-2 text-sm";
      case "lg":
        return "px-6 py-2";
      case "icon":
        return "p-1.5 size-fit *:size-5";
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 not-disabled:hover:bg-blue-500/75";
      case "danger":
        return "bg-rose-500 not-disabled:hover:bg-rose-500/75";
      case "secondary":
        return "bg-zinc-500 not-disabled:hover:bg-zinc-500/75";
    }
  };

  return (
    <button
      {...props}
      type={type}
      className={`${getSizeClasses()} ${getVariantClasses()} ${className} rounded-md text-center font-semibold text-white drop-shadow transition disabled:!cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </button>
  );
}
