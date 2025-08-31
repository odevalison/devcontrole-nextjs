export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[calc(100dvh-80px)] w-dvw px-5 py-10">{children}</div>
  );
}
