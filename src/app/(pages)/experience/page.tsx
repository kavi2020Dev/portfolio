'use client'
import { motion } from 'framer-motion'
import { EXPERIENCE_DATA } from '@/lib/data'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  return (
    <section className="py-28 bg-muted/20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-primary/50 tracking-[0.35em] uppercase">02 /</span>
            <div className="flex-1 h-px bg-border/50" />
            <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              Work History
            </span>
          </div>
          <h2 className="font-heading font-black text-5xl md:text-6xl leading-none">
            My{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* ── Animated vertical line ── */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div className="absolute inset-0 bg-border/40" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              style={{ transformOrigin: 'top center' }}
              className="absolute inset-0 bg-linear-to-b from-primary via-primary/50 to-primary/10"
            />
          </div>

          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.15 }}
              className={`relative flex mb-16 pl-20 md:pl-0 ${
                index % 2 === 0
                  ? 'md:flex-row md:pr-[calc(50%+2rem)]'
                  : 'md:flex-row-reverse md:pl-[calc(50%+2rem)]'
              }`}
            >

              {/* ── Animated dot ── */}
              <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10 w-5 h-5">
                <motion.div
                  animate={{ scale: [1, 2.6], opacity: [0.55, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut', delay: index * 0.4 }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
                <motion.div
                  animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: 'easeOut', delay: index * 0.4 + 0.5 }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, type: 'spring', stiffness: 380, damping: 18 }}
                  className="absolute inset-0 rounded-full bg-primary border-4 border-background shadow-[0_0_16px_oklch(0.6_0.2_255/0.75)]"
                />
              </div>

              {/* Card */}
              <div className="flex-1 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-[0_0_40px_oklch(0.6_0.2_255/0.07)] transition-all group">

                {/* Card top bar */}
                <div className="px-6 pt-6 pb-5 border-b border-border/60">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={11} className="text-primary/70" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin size={11} className="text-primary/70" />
                      {exp.location}
                    </span>
                    <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full font-medium">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2">
                    <Briefcase size={13} className="text-primary shrink-0" />
                    <span className="text-sm text-primary font-semibold">{exp.company}</span>
                  </div>
                </div>

                {/* Description + Highlights */}
                <div className="px-6 py-5">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.06 + 0.4, duration: 0.4 }}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-border/50 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary/8 text-primary border border-primary/18 px-2.5 py-1 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
