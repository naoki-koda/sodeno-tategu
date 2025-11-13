import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'


export const metadata = {
  title: "袖野建具店｜愛知・名古屋・熱田区の老舗建具店",
  description: "愛知県名古屋市熱田区で創業70年以上。障子・襖・木製建具の製作・修理・張り替えは袖野建具店へ。",
  keywords: [
    "建具", "建具店", "名古屋", "熱田区", "愛知", "襖", "障子", "木製建具", "リフォーム", "老舗"
  ],
  openGraph: {
    title: "袖野建具店｜愛知・名古屋・熱田区の老舗建具店",
    description: "名古屋市熱田区で建具の製作・修理・張替えを行う老舗建具店。木の温もりを活かした職人技をご提供。",
    url: "https://sodeno-tategu.com",
    siteName: "袖野建具店",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://sodeno-tategu.com/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "袖野建具店の建具施工事例",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "袖野建具店｜名古屋の老舗建具店",
    description: "障子・襖・木製建具の製作・修理は名古屋・熱田区の袖野建具店へ。",
    images: ["https://sodeno-tategu.com/ogp.jpg"],
  },
};

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
    <html lang="ja">
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
