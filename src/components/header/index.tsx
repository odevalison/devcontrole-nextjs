import { LogOut, UserCircle2 } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-20 w-full bg-white px-5 shadow-sm">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-extrabold transition-all duration-300 hover:tracking-wider">
            <span className="text-blue-500">Dev</span>Controle
          </h1>
        </Link>

        <div className="flex items-baseline gap-3">
          <Link href="/dashboard" className="text-zinc-500">
            <UserCircle2 className="size-7" />
          </Link>
          <button className="text-zinc-500">
            <LogOut className="size-7" />
          </button>
        </div>
      </nav>
    </header>
  );
}
