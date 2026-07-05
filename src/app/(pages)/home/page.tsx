'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/data'
import { ArrowRight, MessageCircle, Mail, MapPin, Rocket, Code2, Award, ChevronDown, Layers } from 'lucide-react'
import { CountUp } from '@/components/ui/CountUp'
import {
  ReactIcon, NextIcon, TsIcon, NodeIcon, ElectronIcon, PostgresIcon,
  GithubIcon, LinkedinIcon,
} from '@/components/shared/BrandIcons'
import profileImg from '../../../../public/image/png/banner.png'

const TECH = [
  { name: 'React', icon: <ReactIcon className="w-7 h-7" /> },
  { name: 'Next.js', icon: <NextIcon className="w-7 h-7" /> },
  { name: 'TypeScript', icon: <TsIcon className="w-7 h-7" /> },
  { name: 'Node.js', icon: <NodeIcon className="w-7 h-7" /> },
  { name: 'React Native', icon: <ReactIcon className="w-7 h-7" /> },
  { name: 'Electron', icon: <ElectronIcon className="w-7 h-7" /> },
  { name: 'PostgreSQL', icon: <PostgresIcon className="w-7 h-7" /> },
]

const FLOAT_CARDS = [
  { icon: Rocket, value: 4, suffix: '+', label: 'Years\nExperience', pos: 'top-4 -right-4 md:top-8 md:-right-6', delay: 0 },
  { icon: Code2, value: 12, suffix: '+', label: 'Projects\nCompleted', pos: 'top-1/3 -left-4 md:-left-10', delay: 0.8 },
  { icon: Award, value: 2, suffix: '', label: 'Awards\nWon', pos: 'bottom-8 -right-2 md:bottom-12 md:-right-8', delay: 1.6 },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">

      {/* Drifting aurora blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="animate-aurora absolute -top-20 left-1/4 w-125 h-125 rounded-full bg-primary/15 blur-[120px]" />
        <div className="animate-aurora-slow absolute top-1/3 right-1/5 w-120 h-120 rounded-full bg-secondary/15 blur-[120px]" />
        <div className="animate-aurora absolute bottom-0 left-1/3 w-100 h-100 rounded-full bg-chart-3/12 blur-[110px]" style={{ animationDelay: '-8s' }} />
      </div>
      <div className="absolute inset-0 z-0 hero-grid pointer-events-none" />

      {/* ── Main two-column content ── */}
      <div className="relative z-2 flex-1 w-full max-w-7xl mx-auto px-6 pt-32 pb-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left column */}
        <div className="order-2 lg:order-1 text-center lg:text-left">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-card border border-border shadow-sm text-foreground px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Open to work
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5 }}
            className="text-2xl md:text-3xl font-heading font-medium text-muted-foreground mb-1"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-3"
          >
            <span className="text-primary">Kavi</span>{' '}
            <span className="text-foreground">K</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-5"
          >
            Frontend{' '}
            <span className="text-primary">Engineer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Building scalable web, mobile &amp; desktop products that solve real-world problems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-card border border-border hover:border-primary/40 text-foreground px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              Let&apos;s Talk
              <MessageCircle size={16} className="text-primary" />
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-muted-foreground"
          >
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={15} /> Email
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-primary" /> {PERSONAL_INFO.location}
            </span>
          </motion.div>
        </div>

        {/* Right column — profile + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 relative flex justify-center items-center py-8 lg:py-0"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]">

            {/* Orbital rings */}
            <div className="absolute inset-0 rounded-full border border-primary/15" />
            <div className="absolute -inset-5 rounded-full border border-dashed border-primary/12 animate-[spin_45s_linear_infinite]" />
            <div className="absolute -inset-10 rounded-full border border-primary/8" />
            {/* Orbit dots */}
            <div className="absolute -inset-5 rounded-full animate-[spin_45s_linear_infinite]">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.55_0.22_260/0.6)]" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-secondary" />
            </div>

            {/* Glow behind photo */}
            <div className="absolute inset-6 rounded-full bg-primary/15 blur-2xl" />

            {/* Photo */}
            <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-card shadow-[0_20px_60px_oklch(0.55_0.22_260/0.2)] bg-muted">
              <Image
                src={profileImg}
                alt="Kavi K"
                fill
                priority
                sizes="(max-width: 1024px) 340px, 420px"
                className="object-cover"
              />
            </div>

            {/* Floating stat cards */}
            {FLOAT_CARDS.map(({ icon: Icon, value, suffix, label, pos, delay }) => (
              <motion.div
                key={label}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay }}
                className={`absolute ${pos} bg-card border border-border rounded-2xl shadow-lg shadow-black/5 px-4 py-3 flex items-center gap-3`}
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <div className="leading-tight">
                  <p className="font-heading font-black text-lg text-foreground">
                    <CountUp to={value} suffix={suffix} />
                  </p>
                  <p className="text-[10px] text-muted-foreground whitespace-pre-line leading-tight">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Tech stack bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-2 px-4 pb-8"
      >
        <div className="max-w-6xl mx-auto bg-card border border-border rounded-2xl shadow-sm px-6 py-4 flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-5">
          <div className="flex items-center gap-2 lg:pr-4 lg:border-r border-border">
            <Layers size={18} className="text-primary" />
            <span className="font-heading font-bold text-sm text-foreground whitespace-nowrap">Tech Stack</span>
          </div>
          {TECH.map((t) => (
            <div key={t.name} className="group flex flex-col items-center gap-1.5">
              <span className="grayscale-0 group-hover:scale-110 transition-transform">{t.icon}</span>
              <span className="text-[11px] text-muted-foreground font-medium">{t.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-2 mx-auto mb-6 w-9 h-9 rounded-full bg-card border border-border shadow-sm flex items-center justify-center text-primary"
      >
        <motion.span animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <ChevronDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}
