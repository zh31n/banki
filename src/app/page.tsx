import React from "react";
import HomePage from "@/screens/HomePage/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
  description: "Главная страница банков",
};

export default function Home() {
  return <HomePage />;
}
