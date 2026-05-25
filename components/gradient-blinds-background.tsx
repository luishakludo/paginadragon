"use client"

import dynamic from "next/dynamic"

const GradientBlinds = dynamic(() => import("./gradient-blinds"), {
  ssr: false,
})

export function GradientBlindsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-40" style={{ width: '100vw', height: '100vh' }}>
      <GradientBlinds
        gradientColors={["#00FF9C", "#00E68A", "#0B0F14"]}
        angle={25}
        noise={0.2}
        blindCount={10}
        blindMinWidth={60}
        spotlightRadius={0.6}
        spotlightSoftness={0.8}
        spotlightOpacity={1}
        mouseDampening={0.25}
        distortAmount={0}
        shineDirection="left"
        mixBlendMode="lighten"
        autoAnimate={true}
        autoAnimateSpeed={0.25}
      />
    </div>
  )
}
