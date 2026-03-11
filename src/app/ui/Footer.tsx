import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center" >
        <h2 className="mb-2">SODENO TATEGU</h2>
        <div className="flex items-center justify-center gap-2 mb-3">
          <Image
            src="/ico_black.png"
            alt="Site Icon"
            width={36}
            height={36}
            className="align-middle"
          />
          <p className="text-lg">袖野建具店</p>
        </div>
        <p className="mb-2 mb-8">愛知県名古屋市を中心とした建具店</p>
        <p>著作権、及びお客様のプライバシー保護のため、サイト内の写真や内容の無断転載等はお断り致します。</p>
        <p>© SODENO TATEGU.</p>
      </div>
      <div className="bg-zinc-800 p-4" />
      <div className="flex justify-center gap-4">
        <div className="bg-zinc-800 mx-auto p-4 w-24 h-10">
        </div>
        <div className="bg-zinc-800  mx-auto p-4 w-24 h-10">
        </div>
      </div>
      <div className="bg-zinc-800 p-4" />
    </footer >

  )
}
