"use client"
import { useState } from "react"
import { Typography } from "@/components/ui/typography"
import { INFO_DATA, MOBILE, NAV_DATA } from "@/lib/data"
import Link from "next/link"
import { motion } from "framer-motion"
import { useDeviceWidth } from "@/hooks/useDevice"
import { Menu, X } from "lucide-react"
import SideMenu from "./SideMenu"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { headerContainerVariants } from "@/lib/animation"

const Header = () => {
  const active = useScrollSpy()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const device = useDeviceWidth()

  if (device === 0) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-3 flex justify-between items-center">
            <div className="flex items-center gap-2.5 animate-pulse">
              <div className="w-8 h-8 rounded-xl bg-primary/20" />
              <div className="h-4 w-16 rounded-lg bg-muted" />
            </div>
            <div className="h-8 w-24 rounded-full bg-muted animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {Number(device) >= MOBILE ? (
        <motion.header
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible"
          className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
        >
          <div className="max-w-6xl mx-auto bg-card/75 backdrop-blur-2xl border border-border/60 rounded-2xl px-5 py-3 flex justify-between items-center shadow-[0_4px_32px_oklch(0_0_0/0.5),inset_0_1px_0_oklch(1_0_0/0.04)]">

            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2.5 group">
              <div className="bg-primary rounded-xl w-8 h-8 flex items-center justify-center glow-primary-sm group-hover:scale-105 transition-transform">
                <Typography variant="h5" className="text-primary-foreground font-black p-0 leading-none">
                  K
                </Typography>
              </div>
              <span className="font-heading font-semibold text-foreground tracking-wide text-base">
                {INFO_DATA?.name}
              </span>
            </Link>

            {/* Nav links with sliding underline */}
            <nav className="flex items-center gap-1">
              {NAV_DATA?.map((nav, index) => {
                const isActive = nav.isActive?.includes(active) ?? false
                return (
                  <Link
                    key={index}
                    href={nav.link}
                    className={`relative px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    }`}
                  >
                    {nav.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-3 right-3 h-px bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA */}
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-5 py-2 text-sm font-medium transition-all glow-primary-sm hover:glow-primary"
            >
              Contact Me
            </Link>
          </div>
        </motion.header>
      ) : (
        <>
          <motion.header
            variants={headerContainerVariants}
            initial="hidden"
            animate="visible"
            className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-2xl border-b border-border/60 px-4 py-3 flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Toggle menu"
              >
                {!isOpen ? <Menu size={22} /> : <X size={22} />}
              </button>
              <span className="font-heading font-semibold text-foreground tracking-wide">
                {INFO_DATA?.name}
              </span>
            </div>
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground rounded-xl px-4 py-1.5 text-sm font-medium glow-primary-sm"
            >
              Contact
            </Link>
          </motion.header>
          <SideMenu open={isOpen} setOpen={setIsOpen} activeSection={active} />
        </>
      )}
    </>
  )
}

export default Header
