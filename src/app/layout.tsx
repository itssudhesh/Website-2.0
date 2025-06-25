import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorDotWrapper from './components/CursorDotWrapper';
import FloatingIcons from './components/FloatingIcons';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudhesh Kumar",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ position: "relative", minHeight: "100vh", overflowX: "hidden", cursor: "none" }}
      >
        <FloatingIcons />
        <CursorDotWrapper />
        {/* Removed header/topbar/logo/social icons */}
        {children}
      </body>
    </html>
  );
}
