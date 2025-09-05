interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl p-5 ${className}`}>
      {children}
    </div>
  );
}
