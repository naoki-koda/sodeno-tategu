'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { kosugiMaru } from '@/app/ui/fonts';
import Image from 'next/image';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={`relative sticky top-0 z-30 bg-gray-800 text-white p-4 ${kosugiMaru.className}`}>
        <div className="relative mx-auto flex items-center justify-center px-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/favicon.ico"
              alt="Site Icon"
              width={37}
              height={37}
            />
            <Link href="/" className="text-xl font-bold ">
              袖野建具店
            </Link>
          </div>
          <div className="absolute right-4">
            <button
              aria-label="メニューを開く"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ?
                (<XMarkIcon className="h-6 w-6 text-white hover:text-gray-300" />)
                :
                (<Bars3Icon className="h-6 w-6 text-white hover:text-gray-300 " />)
              }
            </button>
          </div>
        </div>
      </header>
      {/* オーバーレイ（クリックで閉じる） */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {
        isMenuOpen && (
          <nav className="fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-md z-20 pt-16 p-4">
            <ul className="flex flex-col p-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white block hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}>
                  TOP
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-white block hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}>
                  施工事例
                </Link>
              </li>
              <li>
                <Link
                  href="/price"
                  className="text-white block hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  料金

                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white block hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  お問い合わせ

                </Link>
              </li>

            </ul>
          </nav>
        )
      }
    </>
  );

}
