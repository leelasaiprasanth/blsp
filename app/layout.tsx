import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

// import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/app/components/Navigation";
import { ThemeProvider } from "@/app/components/ThemeProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Indian Software Engineer and a Artist, sharing insights on well-designed products and technology advancements.",
  metadataBase: new URL("https://blsp.io"),
  title: "Leela Sai Prasanth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="width-full bg-contrast dark:bg-primary text-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </div>
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
