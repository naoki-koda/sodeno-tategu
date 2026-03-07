import AnimatedHeroImage from "@/app/ui/HeroBock";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const products = [
  {
    title: "建具",
    icon: "/door.webp",
    alt: "ドアの説明",
    work: "/door.webp",
    description:
      "設置場所や使い勝手に合わせて最適な戸の種類をご提案し、寸法に合わせた完全オーダー製作を行います。",
    points: [
      "引き戸：開閉スペースを取らず、廊下や和室など省スペースに最適です。",
      "開き戸：気密性が高く、寝室・個室・玄関など静けさを求める場所に向いています。",
      "フラッシュドア：軽量でコストバランスに優れ、シンプルでモダンな仕上がりにできます。",
    ],
  },
  {
    title: "建具(障子)",
    icon: "/shoujiicon.webp",
    alt: "障子の説明",
    work: "/workshouji.webp",
    description:
      "和室はもちろん、現代住宅にも調和する『和モダン』な障子を製作いたします。紙・ワーロン等素材も選択可能です。",
    points: [
      "和紙・ワーロン紙など、用途に応じた素材提案が可能です。",
      "採光性と柔らかい空気感を演出し、部屋を広く見せる効果があります。",
      "破れにくい樹脂障子紙の選択で、メンテナンス性も向上します。",
    ],
  },
  {
    title: "格子スクリーン",
    icon: "/kousiicon.webp",
    alt: "格子スクリーンの説明",
    work: "/kousiicon.webp",
    description:
      "和の意匠性を活かしつつ、空間の間仕切りやインテリアとして人気の格子デザインもオーダー対応可能です。",
    points: [
      "視線を遮りながらも、光と風を通す構造です。",
      "住宅・店舗・旅館など幅広い空間に対応可能です。",
      "木材の種類・ピッチ・色味を調整でき、調和したデザインへ仕上げます。",
    ],
  },
  {
    title: "造作玄関収納",
    icon: "/genkanicon.webp",
    alt: "玄関収納の説明",
    work: "/genkanicon.webp",
    description:
      "間取りや収納量に合わせて、玄関をすっきり保つ造作収納を製作します。",
    points: [
      "靴・傘・小物を用途別に整理できる設計が可能です。",
      "圧迫感を抑えたデザインで玄関の雰囲気を損ないません。",
      "壁面・L型・床浮かせ(フロート)など自由設計に対応します。",
    ],
  },
  {
    title: "造作収納",
    icon: "/shunoicon.webp",
    alt: "収納の説明",
    work: "/workshuno.webp",
    description:
      "既製品では収まらないスペースに、ミリ単位で設計された収納家具を製作します。",
    points: [
      "デッドスペースを有効活用し、住まいの収納力を向上します。",
      "扉・棚板・内部仕様・取手など細部まで選択可能です。",
      "空間デザインに合わせて素材・色味の統一が可能です。",
    ],
  },
  {
    title: "造作ロッカー",
    icon: "/rockericon.webp",
    alt: "造作ロッカーの説明",
    work: "/rockericon.webp",
    description:
      "学校・オフィス・店舗・スポーツ施設など用途に応じた耐久性あるロッカーをお作りします。",
    points: [
      "鍵・ダイヤル式・取手など機能面の選択が可能です。",
      "繰り返しの使用や荷重に耐える頑丈な設計が可能です。",
      "サイズ・段数・素材・色まで自由にカスタムできます。",
    ],
  },
  {
    title: "カップボード",
    icon: "/cupboardicon.webp",
    alt: "カップボードの説明",
    work: "/cupboardicon.webp",
    description:
      "キッチンに美しく調和し、無駄のない収納動線を作るオーダーカップボードを製作します。",
    points: [
      "天井までの大型設計で収納力を最大化します。",
      "引き出し・可動棚・ゴミ箱スペースなどを自由設計できます。",
      "メラミン化粧板対応で汚れや傷にも強い仕上がりに。",
    ],
  },
  {
    title: "造作デスク",
    icon: "/deskicon.webp",
    alt: "造作デスクの説明",
    work: "/deskicon.webp",
    description:
      "ワークスペースや子ども部屋に合わせ、サイズと仕様を最適化したデスクを製作します。",
    points: [
      "PC配線やコード収納を考慮した設計が可能です。",
      "L字型・壁付け・造作棚一体型などレイアウト自由です。",
      "材質・表面仕上げを用途に合わせて選べます。",
    ],
  },
  {
    title: "造作洗面",
    icon: "/senmen.webp",
    alt: "造作洗面の説明",
    work: "/senmen.webp",
    description:
      "洗面ボウルや有孔板収納、ホテルライクなデザインなど希望に合わせて提案いたします。",
    points: [
      "素材はメラミン・無垢材などから選べます。",
      "収納を一体化し、生活感を抑えた設計が可能です。",
      "空間に合わせた幅・高さ・奥行きまでミリ単位で調整できます。",
    ],
  },
];

const newsItems = [
  {
    date: "2026.03.7",
    title: "造作デスクを制作しました。",
    image: "/work_desk.jpg",
    images: [
      "/work_desk.jpg",
      "/work_desk1.JPG",
      "/work_desk2.JPG",
      "/work_desk3.JPG",
      "/work_desk4.JPG",
      "/work_desk5.JPG",
      "/work_desk6.JPG",
    ],
    alt: "工房の写真",
    detail:
      "造作デスクを製作しました。デザイン性の高いメラミン化粧板を使用し、既製品にはない一台に仕上げています。さらに、モニターアーム用の配線穴や電源ラックを設け、ワーキングデスクとしての機能性も高めました。",
  },
  {
    date: "2026.03.01",
    title: "公式サイトのお知らせ欄を公開しました",
    image: "/kouba.webp",
    images: ["/kouba.webp"],
    alt: "工房の写真",
    detail:
      "袖野建具店の最新情報をお届けするため、お知らせ欄を公開しました。今後は施工事例や営業案内などを随時更新していきます。",
  },
];

export default function Page() {
  return (
    <main>
      <AnimatedHeroImage
        src="/topimage.webp"
        alt="和モダンな室内"
        companyName="名古屋の建具店・造作家具のことなら"
        slogan="住まいに馴染む、美しい建具を"
        logoSrc="/logotextwhite.svg"
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 p-8 md:p-12 items-center">
            {/* 右：イメージ画像 */}
            <div className="relative md:order-2 md:ml-auto md:w-full md:max-w-[460px]">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md bg-gray-200">
                <Image
                  src="/kouba.webp"
                  alt="袖野建具店の作業風景"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-4 text-xs text-gray-500 md:text-right">
                ※実際の弊社の工場です。建具、造作家具を一から丹精込めて制作します。
              </p>
            </div>

            {/* 左：テキストエリア */}
            <div className="space-y-6 text-gray-700 leading-relaxed md:order-1">
              {/* 小ラベル */}
              <span className="inline-flex items-center rounded-full bg-brand text-white text-xs px-3 py-1 tracking-[0.2em] uppercase">
                ABOUT
              </span>

              <h2 className="text-3xl font-bold mt-2">
                創業70年以上。
                <br />
                名古屋市で木製建具と
                <br />
                造作家具を手がける老舗の建具店
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
                <span className="font-semibold">メラミン化粧板</span>
                も取り扱っており、色・質感・特徴の異なる豊富な素材の中から、
                お客様のお好みに合わせて
                <span className="font-semibold">完全オーダーメイド</span>
                の建具・家具を製作いたします。
              </p>

              {/* 強みリスト */}
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-700" />
                  <p>
                    既製品では叶わない、寸法ぴったり・空間に馴染む建具・家具のご提案。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-700" />
                  <p>
                    小さな工房だからこそできる、柔軟な相談と細やかな仕様決め。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-700" />
                  <p>
                    「壊れたから直したい」「今の暮らしに合わせて造り替えたい」という修繕・リフォームにも対応。
                  </p>
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

      <News />

      <hr className="border-gray-300 my-12" />

      <section className="relative max-w-6xl mx-auto px-6 py-20">
        {/* 背景の淡いグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10 rounded-xl"></div>

        <h2 className="text-3xl font-bold text-center mb-12">
          建具製作、
          <br />
          修理から造作家具まで、
          <br />
          職人が一つひとつ丁寧に対応
        </h2>
        {/* 装飾ライン */}
        <div className="w-20 bg-gray-700 mx-auto rounded-full mb-12"></div>
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 text-center border border-gray-100">
          <div className="mx-auto mb-4">
            <p className="text-gray-600 leading-relaxed">
              引き戸・開き戸・障子・ふすま・框戸など、
              <br />
              ご希望に合わせて丁寧に製作いたします。
            </p>
            <div className="grid grid-cols-3">
              {products.map((item, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <button className="inline-block w-full text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 rounded-lg">
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        width={512}
                        height={512}
                        className="object-cover w-full aspect-square hover:opacity-90 transition rounded-lg"
                      />
                      <p className="mb-4 text-sm font-bold text-center font-medium text-gray-800">
                        {item.title}
                      </p>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[1200px]">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                      <div
                        className="
                              flex flex-col md:flex-row
                              items-start gap-5 p-4 rounded-xl bg-white shadow-sm border border-gray-200
                            "
                      >
                        <Image
                          src={item.work}
                          alt={item.alt}
                          height="512"
                          width="512"
                        />
                        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                          <p>{item.description}</p>

                          <ul className="list-disc pl-5 space-y-1">
                            {item.points.map((p, index) => (
                              <li key={index}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}

              {/* ----- 建具の製作・交換 ----- */}
              {/* <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 text-center border border-gray-100">
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
                </div> */}

              {/* ----- 造作家具 ----- */}
              {/* <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 text-center border border-gray-100">
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
                </div> */}

              {/* ----- 素材 ----- */}
              {/* <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 text-center border border-gray-100">
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
                </div> */}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-300 my-12" />

      {/* ----- 対応エリア ----- */}
      <section className="bg-gray-100 rounded-xl p-8 my-12 mx-4 md:mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-bold mb-2">
          名古屋市全域・愛知県近郊の建具工事・造作家具に対応
        </h2>
        <p className="text-lg font-bold mb-6">愛知県　名古屋市</p>

        <div className="text-gray-800 space-y-2 leading-relaxed">
          <p>
            緑区　天白区　南区　瑞穂区　昭和区　千種区　東区　港区　中川区　熱田区　中区　名東区　守山区　中村区　西区　北区
          </p>
          <p>
            大府市　東海市　知多市　知多郡東浦町　阿久比町　半田市　常滑市　豊明市　愛知郡東郷町　みよし市　日進市　長久手市
          </p>
          <p>
            瀬戸市　刈谷市　知立市　豊田市　安城市　碧南市　西尾市　岡崎市　尾張旭市　春日井市　丹羽郡大口町
          </p>
          <p>
            西春日井郡豊山町　小牧市　北名古屋市　岩倉市　稲沢市　あま市　清須市　海部郡大治町　愛西市　津島市　弥富市
          </p>
          <p>一宮市　犬山市</p>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          ※工事状況により、施工をお受けできないエリアの場合があります。
        </p>
      </section>

      <hr className="border-gray-300 my-12" />

      {/* ----- CTA ----- */}
      <section className="max-w-4xl mx-auto text-center px-6 py-20">
        <h2 className="text-xl md:text-3xl font-bold mb-6">
          ご相談・お見積もりは無料です
        </h2>
        <p className="text-gray-700 mb-8">
          建具の交換・リフォーム・オーダー家具のご相談など、まずはお気軽にお問い合わせください。
        </p>

        <a
          href="/contact"
          className="inline-block bg-brand text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-black transition"
        >
          お問い合わせはこちら
        </a>
      </section>
    </main>
  );
}

function News() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-4">
      <h2 className="text-3xl font-bold text-center mb-8">お知らせ</h2>
      <div className="grid gap-6">
        {newsItems.map((item) => (
          <article
            key={item.title}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 grid md:grid-cols-[220px_1fr] gap-6 items-center"
          >
            <div className="space-y-3">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center px-4 py-2 rounded-md bg-brand text-white hover:bg-black transition">
                    詳細
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <DialogTitle>{item.title}</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-4">
                    <p className="text-xs text-gray-500">
                      画像をタップすると拡大表示できます。
                    </p>
                    <div className="max-h-[48vh] overflow-y-auto pr-1">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {item.images.map((src, index) => (
                          <Dialog key={`${item.title}-${src}-${index}`}>
                            <DialogTrigger asChild>
                              <button
                                type="button"
                                className="relative w-full h-44 rounded-lg overflow-hidden ring-1 ring-gray-200 hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                              >
                                <Image
                                  src={src}
                                  alt={`${item.alt} ${index + 1}`}
                                  fill
                                  className="object-cover object-center"
                                />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-5xl">
                              <DialogHeader>
                                <DialogTitle className="text-base">
                                  {item.title}（画像{index + 1}）
                                </DialogTitle>
                              </DialogHeader>
                              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                                <Image
                                  src={src}
                                  alt={`${item.alt} ${index + 1}`}
                                  fill
                                  className="object-contain bg-black/90"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative w-full h-44 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover object-center"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
