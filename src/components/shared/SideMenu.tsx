'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Typography } from '../ui/typography'
import { INFO_DATA, NAV_DATA } from '@/lib/data'
import Link from 'next/link'

interface SideMenuProps {
  open: boolean
  setOpen: (v: boolean) => void
  activeSection?: string
}

const SideMenu = ({ open, setOpen, activeSection = '' }: SideMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-50 w-72 h-full bg-card border-r border-border/60 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
              <Link href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <div className="bg-primary rounded-xl w-8 h-8 flex items-center justify-center glow-primary-sm">
                  <Typography variant="h5" className="text-primary-foreground font-black p-0 leading-none">
                    K
                  </Typography>
                </div>
                <span className="font-heading font-semibold text-foreground tracking-wide">
                  {INFO_DATA?.name}
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-0.5 px-3 py-4">
              {NAV_DATA?.map((nav, index) => {
                const isActive = nav.isActive?.includes(activeSection) ?? false
                return (
                  <Link
                    key={index}
                    href={nav.link}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                      isActive
                        ? 'text-foreground font-medium bg-primary/8 border border-primary/15'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_6px_oklch(0.65_0.2_145)]" />
                    )}
                    {!isActive && <span className="w-1.5 h-1.5 shrink-0" />}
                    {nav.name}
                  </Link>
                )
              })}
            </div>

            {/* Footer CTA */}
            <div className="mt-auto px-5 py-6 border-t border-border/60">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-xl transition-all glow-primary-sm"
              >
                Contact Me
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}

export default SideMenu
