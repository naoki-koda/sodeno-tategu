'use client'

import { Button } from '@/components/ui/button';
import {
  Bars3Icon,
  BookOpenIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  HomeIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NAV_ITEMS = [
  {
    href: '/',
    label: 'トップページ',
    subLabel: 'トップページ',
    icon: HomeIcon,
  },
  {
    href: '/about',
    label: '事業所案内',
    subLabel: '事業所案内',
    icon: BuildingOffice2Icon,
  },
  // {
  //   href: '/works',
  //   label: 'WORKS',
  //   subLabel: '制作事例',
  //   icon: WrenchIcon,
  // },
  {
    href: '/faq',
    label: 'よくあるご質問',
    subLabel: 'よくあるご質問',
    icon: BookOpenIcon,
  },
  {
    href: '/contact',
    label: 'お問い合わせ',
    subLabel: 'お問い合わせ',
    icon: EnvelopeIcon,
  },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={`relative sticky top-0 z-30 bg-zinc-800 text-white p-4`}>
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-teal-950">
            {/* <Image src="/ico_white.ico" alt="Site Icon" width={50} height={50} className="rounded-lg" /> */}
            <Image src="/logotext.svg" alt="Site Icon" width={200} height={200} />
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-100 md:flex">
            {NAV_ITEMS.map(({ href, subLabel }) => (
                <Button
                key={href}
                asChild
                variant="ghost" // ghost = 背景なしで上品
                className="text-slate-100 hover:text-sky-600 transition-colors font-semibold"
                >
                <Link href={href}>{subLabel}</Link>
                </Button>
            ))}
          </nav>
          <button
            type="button"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-teal-950 shadow-sm transition hover:bg-white/50 md:hidden"
          >
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <nav
          className={`fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col bg-zinc-800 px-6 pb-12 pt-8 text-teal-950 md:hidden font-jp`}
        >
          <div className="mx-auto w-full max-w-sm flex-1 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between text-white">
            </div>

            <ul className="flex flex-col space-y-4">
              {NAV_ITEMS.map(({ href, label, subLabel, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group block rounded-3xl border border-white/20 bg-white/15 px-6 py-5 text-center text-teal-950 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.45)] backdrop-blur transition hover:border-white/40 hover:bg-white/25 hover:text-white/90"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-teal-950 shadow-sm shadow-orange-200/40 transition group-hover:bg-white group-hover:text-gray-500">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-1">
                        <span className="block text-gray-100 font-semibold">{label}</span>
                        <div className="mx-auto h-px w-14 bg-gradient-to-r from-gray-100 to-gray-400" />
                        {/* <span className="block text-xs tracking-wide text-slate-700 group-hover:text-white/80">
                          {subLabel}
                        </span> */}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );

}
