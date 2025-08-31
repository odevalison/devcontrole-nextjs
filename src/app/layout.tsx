import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Container } from "@/components/container";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Control - Your management system.",
  description: "Manage your customers and services easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
