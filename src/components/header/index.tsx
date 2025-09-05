"use client";

import { Loader2, Lock, LogOut, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const { status } = useSession();

  const handleLogInUser = async () => {
    try {
      await signIn();
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message);
      }
      throw new Error("Não foi possível fazer login.");
    }
  };

  const handleLogOutUser = async () => {
    try {
      await signOut();
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message);
      }
      throw new Error("Não foi possível sair da conta");
    }
  };

  return (
    <header className="flex h-20 w-full bg-white px-5 shadow-sm">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-extrabold transition-all duration-300 hover:tracking-wider">
            <span className="text-blue-500">Dev</span>Controle
          </h1>
        </Link>

        {status === "loading" && (
          <button>
            <Loader2 className="size-7 animate-spin text-zinc-500" />
          </button>
        )}

        {status === "unauthenticated" && (
          <button onClick={handleLogInUser}>
            <Lock className="size-7 text-zinc-500" />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex items-baseline gap-3">
            <Link href="/dashboard" className="text-zinc-500">
              <UserCircle2 className="size-7" />
            </Link>
            <button className="text-zinc-500" onClick={handleLogOutUser}>
              <LogOut className="size-7" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
