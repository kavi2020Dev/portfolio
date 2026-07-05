'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Trailing halo lags slightly behind the crisp dot
  const haloX = useSpring(cursorX, { stiffness: 180, damping: 22 })
  const haloY = useSpring(cursorY, { stiffness: 180, damping: 22 })

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      const el = e.target as HTMLElement
      const interactive = el.closest('a, button, input, textarea, [role="button"]')
      setHovering(Boolean(interactive))
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [cursorX, cursorY])

  if (!enabled) return null

  return (
    <>
      {/* Soft trailing halo */}
      <motion.div
        style={{ translateX: haloX, translateY: haloY }}
        className="pointer-events-none fixed top-0 left-0 z-[70] hidden md:block"
      >
        <motion.div
          animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.25 : 0.14 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-xl"
        />
      </motion.div>

      {/* Crisp dot */}
      <motion.div
        style={{ translateX: cursorX, translateY: cursorY }}
        className="pointer-events-none fixed top-0 left-0 z-[70] hidden md:block"
      >
        <motion.div
          animate={{ scale: hovering ? 0.4 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        />
      </motion.div>
    </>
  )
}

export default CursorGlow
