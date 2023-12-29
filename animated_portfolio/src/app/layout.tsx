import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Navbar } from "@/components/navbar/navbar.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animated Portfolio",
  description: "Complete Portfolio with modern UI and Animations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
