import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'


export const metadata: Metadata = {
  title: 'Sodeno TateguTen',
  description: '',
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <Header />
        {/* <main className="max-w-6xl mx-auto p-4"> */}
        <main className="mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
