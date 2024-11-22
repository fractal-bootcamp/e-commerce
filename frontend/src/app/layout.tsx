"use client";

import XNavbar from "@/components/XNavbar";
import "./globals.css";
import { AuthProvider } from "@/components/XAuthProvider";
import { openSans } from "@/utils/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body suppressHydrationWarning className={`antialiased ${openSans.className}`}>
          <XNavbar />
          <div className="bg-[#f4f5ef] min-h-screen px-6 py-8">{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
