'use client'
import { motion } from 'framer-motion'
import { Typography } from '@/components/ui/typography'
import { EXPERIENCE_DATA } from '@/lib/data'
import { Briefcase, Calendar } from 'lucide-react'

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
          className="text-center mb-20"
        >
          <span className="inline-block text-primary text-xs font-semibold tracking-[0.25em] uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
            Work History
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl mt-2">
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
            {/* Base track */}
            <div className="absolute inset-0 bg-border/40" />
            {/* Growing green line */}
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.15 }}
              className={`relative flex mb-14 pl-20 md:pl-0 ${
                index % 2 === 0
                  ? 'md:flex-row md:pr-[calc(50%+2rem)]'
                  : 'md:flex-row-reverse md:pl-[calc(50%+2rem)]'
              }`}
            >

              {/* ── Animated dot ── */}
              <div className="absolute left-6 md:left-1/2 top-5 -translate-x-1/2 z-10 w-5 h-5">
                {/* Outer pulse ring */}
                <motion.div
                  animate={{ scale: [1, 2.6], opacity: [0.55, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: 'easeOut',
                    delay: index * 0.4,
                  }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
                {/* Second slower ring */}
                <motion.div
                  animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.8,
                    ease: 'easeOut',
                    delay: index * 0.4 + 0.5,
                  }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
                {/* Core dot — spring pop-in */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.5,
                    type: 'spring',
                    stiffness: 380,
                    damping: 18,
                  }}
                  className="absolute inset-0 rounded-full bg-primary border-4 border-background shadow-[0_0_16px_oklch(0.65_0.2_145/0.75)]"
                />
              </div>

              {/* Card */}
              <div className="flex-1 group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_30px_oklch(0.65_0.2_145/0.07)] transition-all">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={11} />
                  {exp.period}
                </div>
                <Typography variant="h4" className="text-foreground mb-1">{exp.role}</Typography>
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase size={13} className="text-primary" />
                  <Typography variant="small" className="text-primary font-semibold">{exp.company}</Typography>
                </div>
                <Typography variant="small" className="text-muted-foreground leading-relaxed mb-5">
                  {exp.description}
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
