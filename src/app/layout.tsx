import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" passHref>
              <span className="text-white text-xl font-bold cursor-pointer">Your App Name</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/home" passHref>
              <span className="text-white cursor-pointer">Home</span>
            </Link>
            <Link href="/school" passHref>
              <span className="text-white cursor-pointer">login</span>
            </Link>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </nav>
        {children}
      </body>
    </html>
  );
}
