'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Typography } from '@/components/ui/typography'
import { EDUCATION_DATA, PERSONAL_INFO } from '@/lib/data'
import { Award, GraduationCap, MapPin } from 'lucide-react'
import { sectionVariants, fadeInLeft, fadeInRight } from '@/lib/animation'

const AboutOrb = dynamic(() => import('@/components/three/AboutOrb'), { ssr: false })

export default function About() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary text-xs font-semibold tracking-[0.25em] uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
            About Me
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl mt-2">
            Who I{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Am
            </span>
          </h2>
        </motion.div>

        {/* ── Top row: bio + 3D orb ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Left: bio */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Typography variant="p" className="text-muted-foreground leading-relaxed mb-5 text-base">
              Frontend Developer with{' '}
              <span className="text-foreground font-semibold">4+ years</span> of experience
              building scalable web, mobile, and desktop applications using React, Next.js,
              React Native, TypeScript, Electron.js, Node.js, and PostgreSQL.
            </Typography>
            <Typography variant="p" className="text-muted-foreground leading-relaxed mb-5 text-base">
              I focus on understanding JavaScript at a deep, machine-level to write more
              predictable, optimized, and maintainable code. Passionate about clean
              architecture and reusable component systems.
            </Typography>
            <Typography variant="p" className="text-muted-foreground leading-relaxed mb-8 text-base">
              Delivered real-world products across{' '}
              <span className="text-primary font-medium">healthcare</span>,{' '}
              <span className="text-primary font-medium">ERP</span>,{' '}
              <span className="text-primary font-medium">e-commerce</span>, and{' '}
              <span className="text-primary font-medium">advertising</span> domains.
            </Typography>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <MapPin size={14} className="text-primary" />
              {PERSONAL_INFO.location}
            </div>

            <div className="flex flex-col gap-3">
              {PERSONAL_INFO.awards.map((award) => (
                <div
                  key={award}
                  className="flex items-center gap-3 bg-primary/8 border border-primary/15 rounded-xl px-4 py-3 hover:border-primary/35 hover:bg-primary/10 transition-all"
                >
                  <Award size={16} className="text-primary shrink-0" />
                  <Typography variant="small" className="text-foreground font-medium">
                    {award}
                  </Typography>
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
              {/* Ambient glow behind orb */}
              <div className="absolute inset-0 rounded-full bg-primary/8 blur-3xl scale-75 pointer-events-none" />
              <AboutOrb />
            </div>
          </motion.div>
        </div>

        {/* ── Education row ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
              <GraduationCap size={16} className="text-primary" />
            </div>
            <Typography variant="h4" className="text-foreground">Education</Typography>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {EDUCATION_DATA.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                className="group gradient-border rounded-2xl p-6 hover:shadow-[0_0_30px_oklch(0.65_0.2_145/0.08)] transition-all"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <Typography variant="h5" className="text-foreground">{edu.degree}</Typography>
                  <span className="text-xs text-muted-foreground bg-muted border border-border px-3 py-0.5 rounded-full shrink-0">
                    {edu.period}
                  </span>
                </div>
                <Typography variant="small" className="text-primary font-semibold mb-2">
                  {edu.institution}
                </Typography>
                {edu.achievement && (
                  <div className="flex items-start gap-2 mt-2 text-muted-foreground text-xs">
                    <span>🏆</span>
                    <span>{edu.achievement}</span>
                  </div>
                )}
                {edu.description && (
                  <Typography variant="muted" className="text-muted-foreground mt-2">
                    {edu.description}
                  </Typography>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
