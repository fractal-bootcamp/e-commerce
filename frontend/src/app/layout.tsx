import type { Metadata } from "next";
import localFont from "next/font/local";
import XNavbar from "@/components/XNavbar";
import "./globals.css";
import XAuthProvider from "@/components/XAuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Snack Safari",
  description: "Your wild adventure into delicious snacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${geistSans.variable} antialiased`}>
        <XAuthProvider>
          <XNavbar />
          {children}
        </XAuthProvider>
      </body>
    </html>
  );
}
