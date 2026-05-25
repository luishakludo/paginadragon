"use client"

import { useEffect, useState } from "react"

export function PhoneMockup() {
  const [visibleNotifications, setVisibleNotifications] = useState<number[]>([])

  useEffect(() => {
    // Primeira notificação aparece após 0.3s
    const timer1 = setTimeout(() => setVisibleNotifications([0]), 300)
    // Segunda notificação aparece após 0.8s
    const timer2 = setTimeout(() => setVisibleNotifications([0, 1]), 800)
    // Terceira notificação aparece após 1.3s
    const timer3 = setTimeout(() => setVisibleNotifications([0, 1, 2]), 1300)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="phone-container relative w-[280px] rounded-[54px] bg-[#050505] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] sm:w-[320px]">
      {/* Phone Screen */}
      <div 
        className="phone-screen relative flex h-[570px] w-full flex-col overflow-hidden rounded-[46px] text-white sm:h-[634px]"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(0, 255, 156, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(0, 255, 156, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0B0F14 0%, #121821 100%)
          `
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-[10px] z-50 h-7 w-[90px] -translate-x-1/2 rounded-[20px] bg-black" />
        
        {/* Status Bar */}
        <div className="z-40 flex items-center justify-between px-[22px] pt-4 text-[11px] font-semibold">
          <span>09:41</span>
          <div className="flex items-center gap-[5px]">
            {/* Signal Icon */}
            <div className="flex h-[11px] w-[17px] items-end gap-[1.5px]">
              <div className="h-[35%] w-[3.2px] rounded-[1px] bg-white" />
              <div className="h-[55%] w-[3.2px] rounded-[1px] bg-white" />
              <div className="h-[75%] w-[3.2px] rounded-[1px] bg-white" />
              <div className="h-full w-[3.2px] rounded-[1px] bg-white" />
            </div>
            {/* Wifi Icon */}
            <svg width="15" height="11" viewBox="0 0 15 11" fill="white">
              <path d="M7.5 11L0 3.5C2 1.5 4.5 0.5 7.5 0.5C10.5 0.5 13 1.5 15 3.5L7.5 11Z"/>
            </svg>
            {/* Battery */}
            <div className="relative ml-[2px] h-[11px] w-[22px] rounded-[3px] border border-white/40 p-[1px]">
              <div className="h-full w-full rounded-[1.2px] bg-white" />
              <div className="absolute -right-[3.5px] top-[3px] h-[4.5px] w-[2px] rounded-r-[1px] bg-white/40" />
            </div>
          </div>
        </div>

        {/* Lock Screen Header */}
        <div className="z-10 mt-10 text-center">
          <div className="text-[17px] font-semibold text-[#E6EDF3] opacity-95">Ter. 1 de abr.</div>
          <div 
            className="bg-gradient-to-b from-[#E6EDF3] to-[#8A93A6] bg-clip-text text-[84px] font-bold leading-none tracking-[-2px] text-transparent opacity-85 drop-shadow-[0px_2px_4px_rgba(0,0,0,0.3)]"
          >
            09:41
          </div>
        </div>

        {/* Notifications Area */}
        <div className="mb-[90px] flex flex-1 flex-col justify-end gap-[10px] px-[10px] py-5">
          {/* Notification 1 */}
          <div 
            className={`flex items-center gap-3 rounded-[22px] border border-white/5 bg-[#121821]/40 p-3 backdrop-blur-[25px] transition-all duration-500 ease-out ${
              visibleNotifications.includes(0) 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-black">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EbkjBvaugtYn1C2obGaFIlPmEjsqHn.png" 
                alt="Dragon" 
                className="h-6 w-6 object-contain"
              />
            </div>
            <div className="flex-grow">
              <div className="mb-0.5 flex justify-between text-[10px] font-bold opacity-70">
                <span className="uppercase">Dragon Bot</span>
                <span>agora</span>
              </div>
              <div className="mb-0.5 text-xs font-bold leading-none">Venda Aprovada!</div>
              <div className="text-[11px] leading-tight opacity-90">Valor: R$ 29,90</div>
            </div>
          </div>

          {/* Notification 2 */}
          <div 
            className={`flex items-center gap-3 rounded-[22px] border border-white/5 bg-[#121821]/40 p-3 backdrop-blur-[25px] transition-all duration-500 ease-out ${
              visibleNotifications.includes(1) 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-black">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EbkjBvaugtYn1C2obGaFIlPmEjsqHn.png" 
                alt="Dragon" 
                className="h-6 w-6 object-contain"
              />
            </div>
            <div className="flex-grow">
              <div className="mb-0.5 flex justify-between text-[10px] font-bold opacity-70">
                <span className="uppercase">Dragon Bot</span>
                <span>há 1m</span>
              </div>
              <div className="mb-0.5 text-xs font-bold leading-none">Venda Aprovada!</div>
              <div className="text-[11px] leading-tight opacity-90">Valor: R$ 29,90</div>
            </div>
          </div>

          {/* Notification 3 */}
          <div 
            className={`flex items-center gap-3 rounded-[22px] border border-white/5 bg-[#121821]/40 p-3 backdrop-blur-[25px] transition-all duration-500 ease-out ${
              visibleNotifications.includes(2) 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-black">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EbkjBvaugtYn1C2obGaFIlPmEjsqHn.png" 
                alt="Dragon" 
                className="h-6 w-6 object-contain"
              />
            </div>
            <div className="flex-grow">
              <div className="mb-0.5 flex justify-between text-[10px] font-bold opacity-70">
                <span className="uppercase">Dragon Bot</span>
                <span>há 2m</span>
              </div>
              <div className="mb-0.5 text-xs font-bold leading-none">Venda Aprovada!</div>
              <div className="text-[11px] leading-tight opacity-90">Valor: R$ 29,90</div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-[35px] left-0 right-0 flex justify-between px-[35px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00FF9C]/20 bg-[#0B0F14]/70 backdrop-blur-[10px]">
            <svg width="20" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M18 2H6c-1.1 0-2 .9-2 2v1l2 3v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8l2-3V4c0-1.1-.9-2-2-2zM8 4h8v1H8V4zm8 18H8V11h8v11zm0-13H8l-1.33-2h10.66L16 9z"/>
              <rect x="11" y="14" width="2" height="4" rx="1" fill="#333"/>
            </svg>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00FF9C]/20 bg-[#0B0F14]/70 backdrop-blur-[10px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
              <circle cx="12" cy="13" r="3"/>
            </svg>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 h-[5px] w-[115px] -translate-x-1/2 rounded-[10px] bg-white opacity-95" />
      </div>
    </div>
  )
}
