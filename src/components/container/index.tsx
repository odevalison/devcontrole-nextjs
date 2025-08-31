export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100dvh-80px)] w-dvw items-center justify-center px-5 py-10">
      {children}
    </div>
  );
}
