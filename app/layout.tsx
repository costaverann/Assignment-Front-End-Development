import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FavoriteProvider } from "./components/FavoriteContext";

export const metadata: Metadata = {
  title: "MyWebsite",
  description: "Redesign UI Project",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
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