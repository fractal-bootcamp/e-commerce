"use client";

import localFont from "next/font/local";
import XNavbar from "@/components/XNavbar";
import "./globals.css";
import { AuthProvider } from "@/components/XAuthProvider";
import { Lobster, Open_Sans } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body suppressHydrationWarning className={`${geistSans.variable} antialiased ${openSans.className}`}>
          <XNavbar />
          <div className="bg-zinc-50 min-h-screen">
            {children}
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
