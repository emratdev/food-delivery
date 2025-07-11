import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../Styles/globals.css";
import Notification from "@/components/Notification";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { LayoutType } from "@/Types/type";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const RootLayout: LayoutType = ({ children }) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Notification />
      <NavBar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
