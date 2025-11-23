"use client";

import AnimatedHeroImage from '@/app/ui/HeroBock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-slate-50 mb-12">
      <AnimatedHeroImage
          src="/topimage.webp"
          alt="よくあるご質問"
          companyName="建具とは? 造作家具とは?"
          slogan="よくあるご質問"
          logoSrc="/logotextwhite.svg"
      />
      <section className="mx-auto max-w-4xl px-4 md:px-6 pa-6">
        <div className="rounded-xl mt-12 mb -12 bg-white p-4 shadow-sm md:p-6">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-9">

              <AccordionTrigger>
                Q. 建具とは？
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-700">
                建具（たてぐ）とは、建物の開口部に取り付けられる“可動性のある仕切り”のことです。<br />
                ドアや引き戸、障子、ふすま、格子、窓などが該当し、<br />
                単なる開閉装置ではなく 採光・通風・断熱・防音・意匠性 といった住宅性能を左右する重要なパーツです。<br />
                特にオーダー建具は、寸法・素材・デザイン・金物・開閉方式 を細かく調整でき、既製品では実現できない空間づくりが可能です。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>
                Q. 造作家具とは？
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-700">
                A. お部屋の寸法や使い方、収納量に合わせて一から設計・製作する<br />
                オーダーメイドの家具のことです。<br /><br />
                カップボード、TVボード、収納棚、デスク、洗面台など、<br />
                市販品ではサイズやデザインが合わない場合でも、<br />
                お客様の暮らしにぴったりと馴染む形で制作できます。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">

              <AccordionTrigger>
                Q. 見積もりや相談に費用はかかりますか？
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-700">
                お見積もり・ご相談は
                <span className="font-semibold">無料</span>
                です。<br />
                ご希望の建具・造作家具のイメージやサイズ、現場の状況をお伺いし、
                概算のお見積もりをお出しします。現地確認が必要な場合も、まずはお気軽にご相談ください。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Q. 対応エリアはどこまでですか？
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-700">
                愛知県名古屋市を中心に、近隣エリアまで対応しております。<br />
                熱田区・中川区・港区・南区・緑区・天白区・瑞穂区 など名古屋市内、
                そのほか近郊エリアもご相談内容によって対応可能です。<br />
                <span className="text-xs text-slate-500">
                  ※エリア外の場合でも、内容によっては対応できる場合があります。
                </span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Q. 建具1枚だけの交換や、戸車・調整だけでも依頼できますか？
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-700">
                はい、
                <span className="font-semibold">建具1枚からのご依頼や調整のみ</span>
                でも対応しております。<br />
                「戸が重くて開け閉めしづらい」「敷居を擦ってしまう」などの不具合も、
                可能な範囲で調整・補修いたします。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Q. オーダーメイドの造作家具もお願いできますか？
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-700">
                はい、カップボード・収納棚・TVボード・本棚など、
                <span className="font-semibold">完全オーダーメイドの造作家具</span>
                を製作いたします。<br />
                メラミン化粧板をはじめ、木目・カラー・質感をお選びいただき、
                お部屋に合わせたサイズ・デザインでお作りします。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Q. メラミン化粧板は、実物サンプルを見ることはできますか？
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-700">
                はい、カタログやサンプルを見ながらお選びいただけます。<br />
                実際の色味や質感は、写真と実物で印象が異なることも多いため、
                できるだけサンプルをご確認いただきながらご提案いたします。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Q. 納期はどのくらいかかりますか？
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-700">
                ご依頼内容や時期によって前後しますが、<br />
                <span className="font-semibold">建具1枚でおおよそ2〜3週間前後</span>
                を目安としてお考えください。<br />
                造作家具や点数の多いご注文の場合は、もう少しお時間を頂く場合があります。
                お見積もり時に、おおよそのスケジュールも合わせてご案内いたします。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Q. ハウスメーカーや工務店を通さず、直接依頼しても大丈夫ですか？
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-700">
                はい、個人のお客様からの
                <span className="font-semibold">直接のご依頼も承っております。</span>
                <br />
                戸建て・マンション・店舗問わず、既存のお住まいの建具交換や造作家具の追加など、
                お気軽にご相談ください。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                Q. まずはどのように問い合わせればよいですか？
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-700">
                お問い合わせフォーム、またはお電話にてご連絡ください。<br />
                お困りごとやご希望の内容・お住まいのエリアをお伝えいただければ、
                対応可否やおおよその流れをご案内いたします。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}