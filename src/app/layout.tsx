import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

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
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
