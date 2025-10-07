"use client"
import { useEffect, useRef, useState } from 'react'

export default function FpsMeter({ className = '' }: { className?: string }) {
  const [fps, setFps] = useState(0)
  const last = useRef<number>(performance.now())
  const frames = useRef<number>(0)
  const acc = useRef<number>(0)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const tick = (t: number) => {
      const delta = t - last.current
      last.current = t
      acc.current += delta
      frames.current += 1
      if (acc.current >= 1000) {
        setFps(Math.round((frames.current * 1000) / acc.current))
        acc.current = 0
        frames.current = 0
      }
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <div
      className={
        `pointer-events-none fixed left-2 top-2 z-50 rounded bg-black/60 px-2 py-1 text-xs text-white ${className}`
      }
    >
      FPS: {fps}
    </div>
  )
}