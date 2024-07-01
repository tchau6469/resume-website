import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";

import "./globals.css";


const inter = Inter({
  subsets: ["latin"]
})

const noto = Noto_Sans({
  subsets: ["latin"],
  
})


export const metadata: Metadata = {
  title: "Tony Chau",
  description: "Tony Chau's Resume Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
