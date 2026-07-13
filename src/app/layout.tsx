import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Receitas",
  description: "Site com as mais diversas e deliciosas receitas mineiras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}