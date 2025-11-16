
import AnimatedHeroImage from '@/app/ui/HeroBock';
import Image from 'next/image';
export default function Page() {
    return(
        <main className="bg-slate-50">
            <AnimatedHeroImage
                src="/topimage.webp"
                alt="事業所案内"
                companyName="事業所案内"
                slogan=""
                logoSrc="/logotextwhite.svg"
            />
            <section className="max-w-5xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* 左側：写真（後で差し替え） */}
                    <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md">
                        <Image
                        src="/kouba.webp" // ← お好みのパスに変更してください
                        alt="袖野建具店の作業風景"
                        fill
                        className="object-cover object-center"
                        />
                    </div>

                    {/* 右側：説明文 */}
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        袖野建具店は、名古屋市熱田区に工房を構える、
                        <span className="font-semibold">創業40年以上の建具・造作家具専門店</span>です。
                    </p>

                    <p>
                        一人の職人が最初から最後まで責任を持って製作するため、
                        小規模ながらも品質重視の丁寧な仕事を心掛けています。
                    </p>

                    <p>
                        建具（引き戸・開き戸・障子・ふすま）から、
                        カップボード・収納棚・テレビボードなどの
                        <span className="font-semibold">オーダーメイド家具</span>まで幅広く対応。
                    </p>

                    <p>
                        また、当店は <span className="font-semibold">愛知県建具協同組合</span> に所属しており、
                        正しい技術に基づいた確かな施工をお届けしています。
                    </p>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-xl p-8 mt-16">
                    <h3 className="text-xl font-bold mb-6 text-center">事業所情報</h3>

                    <div className="space-y-4 text-gray-800">

                    <p>
                        <span className="font-semibold">店名：</span>
                        袖野建具店
                    </p>

                    <p>
                        <span className="font-semibold">所在地：</span>
                        〒456-0057 愛知県名古屋市熱田区五番町7-6
                    </p>

                    <p>
                        <span className="font-semibold">業務内容：</span>
                        建具製作 / 建具修理 / 障子・ふすま張替え / 造作家具製作
                    </p>

                    <p>
                        <span className="font-semibold">対応素材：</span>
                        アイカ工業メラミン化粧板 / 集成材 / 無垢材 ほか
                    </p>

                    <p>
                        <span className="font-semibold">所属組合：</span>
                        愛知県建具協同組合
                    </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.625494044423!2d136.8894210760144!3d35.116061360812814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600379ed98bf6d8b%3A0x13275d8161e60e66!2z6KKW6YeO5bu65YW35bqX!5e0!3m2!1sja!2sjp!4v1763044612367!5m2!1sja!2sjp"
                        width="100%" height="350" style={{ border: 0 }} loading="lazy">
                        </iframe>
                        {/* <iframe
                            src="https://www.google.com/maps/q=袖野建具店＆embed?pb=!1m18!1m12!1m3!1d3272.542882939091!2d136.8990713!3d35.1266353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600376c9c57fdf8f%3A0xd24a2e1602043614!2z44CSNDU2LTAwNTgg5oSb55-l55yM6Iqx5p2-5biC5YyX5riv55S677yR77yQ!5e0!3m2!1sja!2sjp!4v1731487060000!5m2!1sja!2sjp"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                        ></iframe> */}
                    </div>
                </div>
                <div className="mt-12 rounded-xl overflow-hidden shadow-md">

                </div>
            </section>
        </main>
    )
}