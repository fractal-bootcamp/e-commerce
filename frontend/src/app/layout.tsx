"use client";

import XNavbar from "@/components/XNavbar";
import "./globals.css";
import { AuthProvider } from "@/components/XAuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body suppressHydrationWarning className={`antialiased`}>
          <XNavbar />
          <div className="bg-amber-50 min-h-screen">{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
