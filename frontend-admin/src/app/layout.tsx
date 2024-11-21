import type { Metadata } from "next";
import "./globals.css";
import XSidebar from "@/components/XSidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for Snack Safari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="flex min-h-screen">
          <XSidebar />
          <main className="flex-1 bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  );
}
