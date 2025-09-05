import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "@/components/header";
import { ModalProvider } from "@/context/modal";
import { AuthProvider } from "@/providers/auth";
import ReactQueryProvider from "@/providers/react-query";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <body className={`${poppins.className} antialiased`}>
        <ReactQueryProvider>
          <ModalProvider>
            <AuthProvider>
              <Header />
              {children}
            </AuthProvider>
          </ModalProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
