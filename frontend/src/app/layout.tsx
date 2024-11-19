"use client";

import localFont from "next/font/local";
import XNavbar from "@/components/XNavbar";
import "./globals.css";
import { AuthProvider } from "@/components/XAuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body suppressHydrationWarning className={`${geistSans.variable} antialiased`}>
          <XNavbar />
          <div className="bg-amber-50 min-h-screen">
            {children}
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
