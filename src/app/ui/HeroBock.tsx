"use client";

import { motion, MotionConfig, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type AnimatedHeroImageProps = {
  src: string;
  alt?: string;
  delay?: number;
  className?: string;
  companyName?: string;
  slogan?: string;
  logoSrc?: string;
};

const heroVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, filter: "blur(8px)" },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function AnimatedHeroImage({
  src,
  alt = "",
  delay = 0,
  className = "",
  companyName = "令和のホームページ",
  slogan = "和モダン × シンプルデザインで、ビジネスを魅せる。",
  logoSrc = "",
}: AnimatedHeroImageProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={`relative w-full h-[80vh] overflow-hidden flex items-center justify-center ${className}`}
        variants={heroVariants}
        initial="hidden"
        animate="show"
        custom={delay}
      >
        {/* 背景イメージ */}
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover object-center w-full h-full"
        />

        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* コンテンツ */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-3">
          {/* ロゴ */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Image
              src={logoSrc}
              alt={`${companyName} ロゴ`}
              width={512}
              height={512}
              className="drop-shadow-md"
            />
          </motion.div>

          {/* 会社名 */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-4xl md:text-2xl top-[10%] font-bold tracking-wide drop-shadow-lg"
          >
            {companyName}
          </motion.h1>

          {/* キャッチコピー */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/90"
          >
            {slogan}
          </motion.p>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-block bg-brand text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-transform duration-300"
            >
              無料お見積もり
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}