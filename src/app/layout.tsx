import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { ModalProvider } from "@/context/modal";
import { AuthProvider } from "@/providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Controle - Seu sistema de gerenciamento.",
  description: "Gerencie seus clientes e atendimentos de forma fácil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ModalProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
