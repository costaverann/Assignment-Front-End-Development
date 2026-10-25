import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FavoriteProvider } from "./components/FavoriteContext";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "MyWebsite",
  description: "Redesign UI Project",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col">
        <FavoriteProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </FavoriteProvider>
      </body>
    </html>
  );
}