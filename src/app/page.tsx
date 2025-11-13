import AnimatedHeroImage from '@/app/ui/HeroBock';

export default function Page() {
  return (
    <main>
      <AnimatedHeroImage
        src="/topimage.webp"
        alt="和モダンな室内"
        companyName="令和のホームページ"
        slogan="和モダン × シンプルデザインで、ビジネスを魅せる。"
        logoSrc="/logoandtext.png"
      />


      {/* <div className="relative w-screen h-[600px] md:h-[600px]" >
        <Image
          src="/topimage.jpg"       // public/header.jpg に画像を置く
          alt="Hero Image"
          fill                   // 親要素いっぱいに画像を広げる
          style={{ objectFit: 'cover' }}  // 画像を枠にフィットさせてトリミング
          priority               // 先読みで表示を速く
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/icon.svg"
            alt="Company Icon"
            width={256}
            height={256}
          />

          <h1 className={`text-white text-4xl font-bold drop-shadow-2xl ${kosugiMaru.className}`}
            style={{ textShadow: '3px 3px 8px rgba(0, 0, 0, 0.85)' }}>
            袖野建具店
          </h1>
        </div>
      </div > */}

      {/* <section className="rounded-xl inset-0 p-7 my-12 mx-4 h-[408px] md:mx-auto max-w-7xl bg-no-repeat bg-cover bg-center" */}
      {/*   style={{ backgroundImage: "url('/bg-shokunin.jpg')" }}> */}
      {/*   <div className="absolute inset-0 bg-white bg-opacity-50 rounded-xl"></div> */}
      {/* </section> */}
      {/**/}
      <section className="bg-gray-100 rounded-xl p-8 my-12 mx-4 md:mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-bold mb-2">Area</h2>
        <p className="text-lg font-bold mb-6">愛知県　名古屋市</p>

        <div className="text-gray-800 space-y-2 leading-relaxed">
          <p>緑区　天白区　南区　瑞穂区　昭和区　千種区　東区　港区　中川区　熱田区　中区　名東区　守山区　中村区　西区　北区</p>
          <p>大府市　東海市　知多市　知多郡東浦町　阿久比町　半田市　常滑市　豊明市　愛知郡東郷町　みよし市　日進市　長久手市</p>
          <p>瀬戸市　刈谷市　知立市　豊田市　安城市　碧南市　西尾市　岡崎市　尾張旭市　春日井市　丹羽郡大口町</p>
          <p>西春日井郡豊山町　小牧市　北名古屋市　岩倉市　稲沢市　あま市　清須市　海部郡大治町　愛西市　津島市　弥富市</p>
          <p>一宮市　犬山市</p>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          ※弊社の工事混雑状況により、施工できない場合があります。
        </p>
        <hr className="border-black mb-8" />
        {/* 工事内容タイトル */}
        <h2 className="text-center text-xl font-bold mb-10">施工内容</h2>

        {/* 新築及びリフォーム外構・エクステリア工事 */}
        <div className="text-center space-y-2 mb-8">
          <h3 className="font-bold">【建具】</h3>
          <p>引き戸、開戸</p>
        </div>

        {/* エクステリア製品工事 */}
        <div className="text-center space-y-2 mb-8">
          <h3 className="font-bold">【造作家具】</h3>
          <p>カップボード、収納棚</p>
        </div>

        {/* ウッドデッキ工事 */}
        <div className="text-center space-y-2 mb-8">
          <h3 className="font-bold">【取り扱いメーカー】</h3>
          <p>アイカ工業</p>
        </div>

        <div className="text-center space-y-2">
          <h3 className="font-bold">【仮】</h3>
          <p>etc</p>
        </div>

      </section>
    </main>
  );
}
