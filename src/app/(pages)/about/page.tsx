'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { EDUCATION_DATA, PERSONAL_INFO } from '@/lib/data'
import { Award, GraduationCap, MapPin, Trophy } from 'lucide-react'
import { fadeInLeft, fadeInRight, sectionVariants } from '@/lib/animation'

const AboutOrb = dynamic(() => import('@/components/three/AboutOrb'), { ssr: false })

const QUICK_STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '12+', label: 'Production Apps' },
  { value: '2', label: 'Awards Won' },
  { value: '2', label: 'Companies' },
]

export default function About() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Number label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-primary/50 tracking-[0.35em] uppercase">01 /</span>
            <div className="flex-1 h-px bg-border/50" />
            <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              About Me
            </span>
          </div>

          <h2 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl leading-none">
            Who I{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Am
            </span>
          </h2>
        </motion.div>

        {/* ── Bio + Orb ── */}
        <div className="grid md:grid-cols-[1fr_380px] gap-14 items-center mb-16">

          {/* Left: bio */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              Frontend <span className="text-foreground font-semibold">Engineer</span> with{' '}
              <span className="text-primary font-semibold">4+ years</span> of experience independently
              architecting and shipping production-grade applications across ERP, healthcare,
              e-commerce, and advertising.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              Deep expertise in{' '}
              <span className="text-foreground font-medium">React, Next.js, TypeScript</span>,{' '}
              <span className="text-foreground font-medium">React Native, Electron.js</span>, and{' '}
              <span className="text-foreground font-medium">Node.js</span>. Strong focus on
              reusable component systems, clean state management, and maintainable codebases.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Proven ability to own full development cycles — from system design and UI architecture
              to deployment and performance optimization. Recognized with the{' '}
              <span className="text-primary font-medium">Elite Developer Certificate</span> and{' '}
              <span className="text-primary font-medium">Best Teamwork Award</span>.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <MapPin size={14} className="text-primary" />
              {PERSONAL_INFO.location}
            </div>

            {/* Awards */}
            <div className="flex flex-col gap-3">
              {PERSONAL_INFO.awards.map((award) => (
                <div
                  key={award}
                  className="flex items-center gap-3 bg-primary/8 border border-primary/15 rounded-xl px-4 py-3 hover:border-primary/35 hover:bg-primary/10 transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                    <Award size={13} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{award}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Orb */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-105 h-95">
              <div className="absolute inset-0 rounded-full bg-primary/8 blur-3xl scale-75 pointer-events-none" />
              <AboutOrb />
            </div>
          </motion.div>
        </div>

        {/* ── Quick stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {QUICK_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/30 hover:shadow-[0_0_25px_oklch(0.6_0.2_255/0.07)] transition-all"
            >
              <p className="font-heading font-black text-3xl text-primary text-glow mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Education ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
              <GraduationCap size={16} className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground">Education</h3>
            <div className="flex-1 h-px bg-border/60" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {EDUCATION_DATA.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                className="group gradient-border rounded-2xl p-6 hover:shadow-[0_0_30px_oklch(0.6_0.2_255/0.08)] transition-all"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h4 className="font-heading font-bold text-base text-foreground">{edu.degree}</h4>
                  <span className="text-xs text-muted-foreground bg-muted border border-border px-3 py-0.5 rounded-full shrink-0 font-mono">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-primary font-semibold mb-3">{edu.institution}</p>
                {edu.achievement && (
                  <div className="flex items-start gap-2.5 bg-primary/6 border border-primary/15 rounded-xl px-3 py-2.5">
                    <Trophy size={13} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground leading-relaxed">{edu.achievement}</span>
                  </div>
                )}
                {edu.description && (
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
