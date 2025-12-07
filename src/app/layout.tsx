import Footer from '@/app/ui/Footer';
import Header from '@/app/ui/Header';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const SITE_URL = 'https://www.sodeno-tategu.jp';
const DEFAULT_TITLE = '名古屋の建具店・造作家具なら袖野建具店｜熱田区の老舗';
const DEFAULT_DESCRIPTION =
  '愛知県名古屋市熱田区で創業70年以上の建具店。障子・襖・木製建具の製作・修理・張り替えや造作家具のご相談は袖野建具店へ。名古屋市内・近郊に対応。';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: '袖野建具店',
  title: {
    default: DEFAULT_TITLE,
    template: '%s｜名古屋の建具店 袖野建具店',
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    '建具',
    '建具店',
    '名古屋',
    '熱田区',
    '愛知',
    '襖',
    '障子',
    '木製建具',
    'リフォーム',
    '老舗',
  ],
  category: 'HomeAndConstruction',
  authors: [{ name: '袖野建具店' }],
  alternates: {
    canonical: SITE_URL,
    languages: {
      'ja-JP': SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description:
      '名古屋市熱田区で建具の製作・修理・張替えを行う老舗建具店。木の温もりを活かした職人技をご提供。',
    url: SITE_URL,
    siteName: "袖野建具店",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "袖野建具店の事業所イメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "袖野建具店｜名古屋の老舗建具店",
    description: "障子・襖・木製建具の製作・修理は名古屋・熱田区の袖野建具店へ。",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: '袖野建具店',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logoandtext.png`,
  description: DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '愛知県名古屋市熱田区五番町7-6',
    addressLocality: '名古屋市熱田区',
    addressRegion: '愛知県',
    postalCode: '456-0057',
    addressCountry: 'JP',
  },
  areaServed: ['名古屋市', '愛知県'],
  makesOffer: {
    '@type': 'Offer',
    itemOffered: [
      { '@type': 'Service', name: '建具製作' },
      { '@type': 'Service', name: '建具修理' },
      { '@type': 'Service', name: '障子・襖の張り替え' },
      { '@type': 'Service', name: '造作家具製作' },
    ],
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
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
