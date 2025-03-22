"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
    let storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | undefined;
    if (!storedTheme) {
      localStorage.setItem("theme", "dark");
      storedTheme = "dark";
    }
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme || "dark");
    }
  }, [theme, mounted]);

  return (
    <html lang="en" data-theme={theme || "dark"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar setTheme={setTheme} currentTheme={theme} />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
