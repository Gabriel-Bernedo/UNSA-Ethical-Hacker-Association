import { Inter } from "next/font/google";
import "./globals.css";

import Navegacion from '@/sections/landing/Navegacion'

import Provider from "@/hooks/providers";
import HeaderNav from "@/components/ui/navs/HeaderNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UNSA Ethical Hacker Association",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " bg-fixed h-full"}>
        {/* <Provider> */}
        <Navegacion />
        
          {/* <HeaderNav /> */}
          {children}
        {/* </Provider> */}
      </body>
    </html>
  );
}
