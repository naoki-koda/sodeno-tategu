import AnimatedHeroImage from '@/app/ui/HeroBock';
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <AnimatedHeroImage
        src="/topimage.webp"
        alt="和モダンな室内"
        companyName="名古屋を拠点とする建具店"
        slogan="住まいに馴染む、美しい建具を"
        logoSrc="/logoandtext.png"
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
            {/* 左：イメージ画像 */}
            <div className="relative">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md bg-gray-200">
                <Image
                  src="/topimage.webp" // ← お好みのパスに変更してください
                  alt="袖野建具店の作業風景"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-4 text-xs text-gray-500">
                ※写真はイメージです。実際の工房・現場風景とは異なる場合があります。
              </p>
            </div>

            {/* 右：テキストエリア */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {/* 小ラベル */}
              <span className="inline-flex items-center rounded-full bg-gray-900 text-white text-xs px-3 py-1 tracking-[0.2em] uppercase">
                ABOUT
              </span>

              <h2 className="text-3xl font-bold mt-2">
                袖野建具店について
              </h2>

              <p>
                袖野建具店は、名古屋を拠点に
                <span className="font-semibold">40年以上</span>
                の歴史を持つ、一人の職人が営む小さな建具店です。
                ひとつひとつのご依頼に真摯に向き合い、細部まで丁寧に仕上げることを大切にしています。
              </p>

              <p>
                建具（引き戸・開き戸・障子・ふすま・框戸）はもちろん、
                カップボードや収納棚などの
                <span className="font-semibold">造作家具</span>
                まで、木で作れるものであればほぼ全て対応可能です。
              </p>

              <p>
                また、
                <span className="font-semibold">アイカ工業のメラミン化粧板</span>
                も取り扱っており、色・質感・特徴の異なる豊富な素材の中から、
                お客様のお好みに合わせて
                <span className="font-semibold">完全オーダーメイド</span>
                の建具・家具を製作いたします。
              </p>

              {/* 強みリスト */}
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-700" />
                  <p>既製品では叶わない、寸法ぴったり・空間に馴染む建具・家具のご提案。</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-700" />
                  <p>小さな工房だからこそできる、柔軟な相談と細やかな仕様決め。</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-700" />
                  <p>「壊れたから直したい」「今の暮らしに合わせて造り替えたい」という修繕・リフォームにも対応。</p>
                </div>
              </div>

              {/* 職人プロフィール風ボックス */}
              <div className="mt-6 border-l-4 border-gray-700 pl-4 text-sm text-gray-700 bg-white/70 rounded-md py-3 shadow-[0_0_0_1px_rgba(148,163,184,0.2)]">
                <p className="font-semibold mb-1">職人よりひと言</p>
                <p>
                  「長く使っていただけるか」「毎日触って気持ちがいいか」。
                  図面には表れない部分こそ、いちばん大事だと思っています。
                  気になることやご希望は、どんな小さなことでも遠慮なくお聞かせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-300 my-12" />

      <section className="relative max-w-6xl mx-auto px-6 py-20">
        {/* 背景の淡いグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10 rounded-xl"></div>

        <h2 className="text-3xl font-bold text-center mb-12">
          施工内容
        </h2>

        {/* 装飾ライン */}
        <div className="h-1 w-20 bg-gray-700 mx-auto rounded-full mb-12"></div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* ----- 建具の製作・交換 ----- */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 text-center border border-gray-100">
            <div className="mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-700 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 4h18M3 12h18M3 20h18" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">建具の製作・交換</h3>
            <p className="text-gray-600 leading-relaxed">
              引き戸・開き戸・障子・ふすま・框戸など、
              <br />
              ご希望に合わせて丁寧に製作いたします。
            </p>
          </div>

          {/* ----- 造作家具 ----- */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 text-center border border-gray-100">
            <div className="mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-700 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">造作家具</h3>
            <p className="text-gray-600 leading-relaxed">
              カップボード・収納棚・TVボード・吊り戸棚など、
              <br />
              住まいに合わせてオーダーメイド製作。
            </p>
          </div>

          {/* ----- 素材 ----- */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 text-center border border-gray-100">
            <div className="mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-700 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">取り扱い素材</h3>
            <p className="text-gray-600 leading-relaxed">
              アイカ工業のメラミン化粧板、無垢材、集成材など
              <br />
              素材を自由にお選びいただけます。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-300 my-12" />

      {/* ----- 対応エリア ----- */}
      <section className="bg-gray-100 rounded-xl p-8 my-12 mx-4 md:mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-bold mb-2">対応エリア</h2>
        <p className="text-lg font-bold mb-6">愛知県　名古屋市</p>

        <div className="text-gray-800 space-y-2 leading-relaxed">
          <p>緑区　天白区　南区　瑞穂区　昭和区　千種区　東区　港区　中川区　熱田区　中区　名東区　守山区　中村区　西区　北区</p>
          <p>大府市　東海市　知多市　知多郡東浦町　阿久比町　半田市　常滑市　豊明市　愛知郡東郷町　みよし市　日進市　長久手市</p>
          <p>瀬戸市　刈谷市　知立市　豊田市　安城市　碧南市　西尾市　岡崎市　尾張旭市　春日井市　丹羽郡大口町</p>
          <p>西春日井郡豊山町　小牧市　北名古屋市　岩倉市　稲沢市　あま市　清須市　海部郡大治町　愛西市　津島市　弥富市</p>
          <p>一宮市　犬山市</p>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          ※工事状況により、施工をお受けできない場合があります。
        </p>
      </section>

      <hr className="border-gray-300 my-12" />

      {/* ----- CTA ----- */}
      <section className="max-w-4xl mx-auto text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">ご相談・お見積もりは無料です</h2>
        <p className="text-gray-700 mb-8">
          建具の交換・リフォーム・オーダー家具のご相談など、まずはお気軽にお問い合わせください。
        </p>

        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-black transition"
        >
          お問い合わせはこちら
        </a>
      </section>
    </main>
  );
}