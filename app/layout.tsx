import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Red Horizon", description: "Landing page for Red Horizon AS"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-gray-800 text-white shadow">
            <nav className="container mx-auto p-4 flex justify-between items-center">
              {/* Brand / Logo */}
              <h1 className="text-lg font-bold">
                <Link href="/">
                  <img
                    src="/red_horizon.png"
                    alt="Red Horizon"
                    className="w-full"
                  />
                </Link>
              </h1>

              {/* Navigation Links */}
              <ul className="flex space-x-4">
                <li>
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto p-6">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white text-center p-4">
            <p>&copy; {new Date().getFullYear()} Red Horizon AS. All rights reserved.</p>
            <text>Org. nr. 931 728 326</text>
          </footer>
        </div>
      </body>
    </html>
  );
}
