import "./globals.scss";
import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import React from "react";

export const metadata: Metadata = {
  title: "Главная",
  description: "Главная страница банков",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
