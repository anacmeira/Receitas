import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// 1. IMPORTA O FOOTER BEM AQUI:
import Footer from "@/components/Footer";

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
      className={`${inter.variable} antialiased h-full`}
    >
      <body className="min-h-screen flex flex-col bg-gray-50 text-amber-950">
        <Header />

        {/* O flex-grow faz o conteúdo empurrar o footer sempre lá para baixo! */}
        <main className="flex-grow">{children}</main> 
        
        {/* 2. COLOCA O FOOTER BEM AQUI! */}
        <Footer />
      </body>
    </html>
  );
}