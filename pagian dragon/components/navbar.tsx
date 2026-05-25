"use client"

import Image from "next/image"

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-[#e6edf3]/[0.06] bg-[#0d1117]/60 px-5 py-3 backdrop-blur-xl sm:px-8 sm:py-3.5">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <Image
            src="/images/logo-dragon.png"
            alt="Dragon Bot"
            width={140}
            height={36}
            style={{ width: 'auto' }}
            className="h-8 sm:h-9"
            priority
          />
        </a>

        {/* Acessar Button */}
        <a
          href="#"
          className="btn-glow-green relative overflow-hidden rounded-full border border-[#00FF9C]/60 bg-[#00FF9C] px-5 py-2 text-sm font-bold text-[#0a0e13] shadow-[0_0_20px_rgba(0,255,156,0.4),0_0_50px_rgba(0,255,156,0.2)] transition-all hover:bg-[#00ffaa] hover:shadow-[0_0_30px_rgba(0,255,156,0.55),0_0_70px_rgba(0,255,156,0.25)] sm:px-6 sm:py-2.5"
        >
          <span className="btn-shimmer pointer-events-none absolute inset-0 rounded-full" />
          <span className="relative z-10">Acessar</span>
        </a>
      </div>
    </nav>
  )
}
