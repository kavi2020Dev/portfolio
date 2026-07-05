'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { STATS, PERSONAL_INFO } from '@/lib/data'
import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { CountUp } from '@/components/ui/CountUp'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), { ssr: false })

const TECH_STACK = ['React', 'Next.js', 'TypeScript', 'React Native', 'Node.js', 'Electron.js', 'PostgreSQL']

const TICKER_ITEMS = [
  'React', 'Next.js', 'TypeScript', 'React Native', 'Electron.js', 'Node.js',
  'PostgreSQL', 'Zustand', 'Tanstack Query', 'ShadCN UI', 'Tailwind CSS',
  'MUI', 'Redux', 'Framer Motion', 'Git', 'Jest', 'REST APIs', 'Agile',
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">

      {/* Drifting aurora blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="animate-aurora absolute -top-20 left-1/4 w-125 h-125 rounded-full bg-primary/20 blur-[120px]" />
        <div className="animate-aurora-slow absolute top-1/3 right-1/5 w-120 h-120 rounded-full bg-secondary/18 blur-[120px]" />
        <div className="animate-aurora absolute bottom-0 left-1/3 w-100 h-100 rounded-full bg-chart-3/15 blur-[110px]" style={{ animationDelay: '-8s' }} />
      </div>

      {/* Fading grid overlay */}
      <div className="absolute inset-0 z-0 hero-grid pointer-events-none" />

      {/* Three.js particle scene */}
      <HeroCanvas />

      {/* Soft radial spotlight behind the name */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(1_0_0/0.9),transparent_70%)]" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-2 flex-1 flex items-center justify-center w-full px-6 pt-28 pb-20">
        <div className="max-w-4xl w-full text-center">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/8 border border-primary/22 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Open to work
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.18 } },
            }}
            className="font-heading font-black text-[5.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] text-foreground leading-[0.88] tracking-tighter mb-6 select-none flex justify-center"
          >
            {'KAVI K'.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 80, rotateX: -90 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className={`inline-block ${char === ' ' ? 'w-8 md:w-12' : ''} hover:text-primary transition-colors duration-300`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </motion.h1>

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

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg font-light max-w-md mx-auto mb-10 leading-relaxed"
          >
            Building scalable web, mobile &amp; desktop products that ship.
          </motion.p>

          {/* Primary actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-card border border-border hover:border-primary/40 text-foreground px-8 py-4 rounded-2xl font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Social links + location */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-12"
          >
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary bg-card/60 border border-border/70 hover:border-primary/40 px-4 py-2 rounded-full transition-all"
            >
              LinkedIn
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary bg-card/60 border border-border/70 hover:border-primary/40 px-4 py-2 rounded-full transition-all"
            >
              <Mail size={12} />
              Email
            </a>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground px-2 py-2">
              <MapPin size={12} className="text-primary" />
              {PERSONAL_INFO.location}
            </span>
          </motion.div>

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
            <div
              key={stat.label}
              className={`text-center py-3 ${i < STATS.length - 1 ? 'md:border-r border-border/40' : ''}`}
            >
              <p className="font-heading font-black text-3xl text-primary text-glow">
                <CountUp to={stat.numericValue} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Scrolling tech ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-2 border-t border-border/30 bg-background/50 backdrop-blur-sm py-3 overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap will-change-transform">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 text-[10px] text-muted-foreground/45 font-mono tracking-[0.22em] uppercase px-6"
            >
              {item}
              <span className="text-primary/25 text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
