import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://www.sodeno-tategu.jp";
const SITE_NAME = "袖野建具店";
const PHONE_NUMBER = "052-661-4970"; // 実際の電話番号に変更してください

// SEO対策キーワード：名古屋 建具店, 名古屋 建具 修理, 障子 張り替え, 襖 張り替え
const DEFAULT_TITLE =
  "名古屋の建具店 袖野建具店｜建具の修理・製作・障子襖の張り替え";
const DEFAULT_DESCRIPTION =
  "名古屋市熱田区で創業70年。袖野建具店は障子・襖の張り替え、木製建具の修理・製作、造作家具の専門店です。「建具の動きが悪い」「穴が開いた」など、小さな修理から名古屋市内・近郊へ迅速に伺います。職人直営の安心価格で対応。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: DEFAULT_TITLE,
    template: `%s｜${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "名古屋 建具店",
    "名古屋 建具 修理",
    "名古屋 障子 張り替え",
    "名古屋 襖 張り替え",
    "熱田区 建具店",
    "木製建具 製作",
    "造作家具 名古屋",
    "袖野建具店",
    "建具 調整",
  ],
  category: "HomeAndConstruction",
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
    languages: {
      "ja-JP": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "袖野建具店 - 名古屋の建具製作・修理の職人",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [`/og-image.jpg`],
  },
};

// 構造化データの強化（LocalBusiness）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness", // 建具店に最適なカテゴリ
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-32.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description: DEFAULT_DESCRIPTION,
  telephone: PHONE_NUMBER,
  priceRange: "¥30,000 - ¥1,200,000", // 目安を記載
  address: {
    "@type": "PostalAddress",
    streetAddress: "五番町7-6",
    addressLocality: "名古屋市熱田区",
    addressRegion: "愛知県",
    postalCode: "456-0057",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.116057, // 熱田区五番町付近の緯度（正確な値に調整してください）
    longitude: 136.891996, // 熱田区五番町付近の経度
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:30",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Nagoya" },
    { "@type": "AdministrativeArea", name: "Aichi" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "建具サービスメニュー",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "障子・襖の張り替え" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "木製建具の修理・調整" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "オーダーメイド建具・造作家具の製作",
        },
      },
    ],
  },
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PGS9T7Q6TS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PGS9T7Q6TS');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
