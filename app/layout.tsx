
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript/PrelineScript";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";


export const metadata: Metadata = {
  title: "Shoe Shop By Backbuilder",
  description: "Shoe Shop by Backbuilder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <StoreProvider>
        <Navbar/>
        {children}
        <Footer/>
        </StoreProvider>
        <PrelineScript/>
        <Toaster position="top-center"/>
      </body>
    </html>
  );
}
