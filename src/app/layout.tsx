import type { Metadata } from "next";
import { Manrope, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["200", "400", "800"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600"]
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Manmitha | Cloud Engineer",
  description: "Portfolio of Manmitha, a Cloud Engineer specializing in AWS, Cloud Architecture, and modern web technologies.",
  keywords: ["Cloud Engineer", "AWS", "DevOps", "Portfolio", "Web Development"],
};

import { WebGLBackground } from "@/components/visuals/WebGLBackground";
import { CustomCursor } from "@/components/visuals/CustomCursor";
import { SmoothScrollProvider } from "@/components/visuals/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${inter.variable} ${spaceMono.variable} antialiased bg-[#050505] text-[#e0e0e0] overflow-x-hidden`}
      >
        <WebGLBackground />
        <CustomCursor />
        <Navbar />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
