import { kosugiMaru } from '@/app/ui/fonts';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-pulse">😢</div>
        <h1 className={`text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100 ${kosugiMaru.className}`}>
          メールの送信に失敗しました
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          お手数ですが、時間を置いてもう一度お試しください。
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-brand px-6 py-2 text-white shadow-md shadow-orange-300/30 transition hover:brightness-105"
          >
            再度お問い合わせ
          </Link>
          <Link
            href="/"
            className="inline-block rounded-md border border-orange-200/60 bg-white px-6 py-2 text-orange-600 transition hover:brightness-110"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}