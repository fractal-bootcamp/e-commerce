"use client";

import XNavbar from "@/components/XNavbar";
import "./globals.css";
import { AuthProvider } from "@/components/XAuthProvider";
import { Lobster, Open_Sans } from "next/font/google";

export const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
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
          <div className="bg-[#f4f5ef] min-h-screen">{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
