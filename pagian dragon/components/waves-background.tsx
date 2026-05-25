'use client'

import { Waves } from "@/components/ui/wave-background"

export function WavesBackground() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Waves
        strokeColor="rgba(0, 255, 156, 0.12)"
        backgroundColor="#0B0F14"
        pointerSize={0.4}
      />
    </div>
  )
}
