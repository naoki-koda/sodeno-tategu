// app/faq/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "建具とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "建具（たてぐ）とは、建物の開口部に取り付けられる可動性のある仕切りのことです。ドアや引き戸、障子、ふすま、格子、窓などが該当し、採光・通風・断熱・防音・意匠性といった住宅性能を左右する重要なパーツです。"
      }
    },
    {
      "@type": "Question",
      "name": "造作家具とは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "造作家具とは、お部屋の寸法や使い方、収納量に合わせて一から設計・製作するオーダーメイドの家具のことです。カップボード、TVボード、収納棚、デスク、洗面台など、市販品ではサイズやデザインが合わない場合でも、お部屋にぴったり合った家具を製作できます。"
      }
    },
    // ...必要なら他のQ&Aも追加
  ]
};

export const metadata: Metadata = {
  // さっきの metadata と同じ
  title: "よくあるご質問｜名古屋の建具店・造作家具｜袖野建具店",
  description:
    "建具とは？造作家具とは？袖野建具店によく寄せられるご質問をまとめました。名古屋市熱田区の老舗建具店が、建具の種類や造作家具、対応エリア、納期、依頼方法についてわかりやすく解説します。",
  alternates: {
    canonical: "https://www.sodeno-tategu.jp/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}