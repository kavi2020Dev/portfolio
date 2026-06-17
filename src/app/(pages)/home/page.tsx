'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { STATS } from '@/lib/data'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { CountUp } from '@/components/ui/CountUp'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), { ssr: false })

const TECH_STACK = ['React', 'Next.js', 'TypeScript', 'React Native', 'Node.js', 'Electron.js', 'PostgreSQL']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">

      {/* Three.js background */}
      <HeroCanvas />

      {/* Dot grid texture */}
      <div className="absolute inset-0 z-1 dot-grid opacity-[0.18] pointer-events-none" />

      {/* Central radial glow — wider since content is centered */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/7 blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[60px]" />
      </div>

      {/* ── Main content — full-width centered ── */}
      <div className="relative z-2 flex-1 flex items-center justify-center w-full px-6 pt-28 pb-20">
        <div className="max-w-4xl w-full text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/8 border border-primary/22 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Open to work
          </motion.div>

          {/* Name — the visual centrepiece */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-[5.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] text-foreground leading-[0.88] tracking-tighter mb-6 select-none"
          >
            KAVI K
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="font-heading text-2xl md:text-4xl font-light text-muted-foreground mb-5 tracking-wide"
          >
            Frontend{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              Engineer
            </span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg font-light max-w-md mx-auto mb-10 leading-relaxed"
          >
            Building scalable web, mobile &amp; desktop products that ship.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-full font-medium transition-all glow-primary-sm hover:glow-primary text-sm"
            >
              View Projects
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border/80 hover:border-primary/50 bg-card/30 backdrop-blur-sm text-foreground hover:text-primary px-8 py-3.5 rounded-full font-medium transition-all text-sm"
            >
              Hire Me
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + i * 0.06, duration: 0.4 }}
                className="text-xs bg-card/50 backdrop-blur-sm border border-border/70 px-3.5 py-1.5 rounded-full text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-2 border-t border-border/60 bg-card/40 backdrop-blur-md"
      >
        <div className="max-w-4xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`text-center py-3 ${i < STATS.length - 1 ? 'md:border-r border-border/40' : ''}`}>
              <p className="font-heading font-black text-3xl text-primary text-glow">
                <CountUp to={stat.numericValue} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-[88px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-5 h-9 border border-border/60 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
