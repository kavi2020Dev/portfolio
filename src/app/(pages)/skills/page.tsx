'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Typography } from '@/components/ui/typography'
import { SKILLS_DATA } from '@/lib/data'
import { Database, Globe, Layers, Zap } from 'lucide-react'

const SkillsNetwork = dynamic(() => import('@/components/three/SkillsNetwork'), { ssr: false })

type IconComp = React.ComponentType<{ size?: number; className?: string }>

const CATEGORY_META: Record<string, { Icon: IconComp; color: string }> = {
  Frontend:         { Icon: Globe,     color: 'from-primary/18 to-primary/4' },
  'Backend & DB':   { Icon: Database,  color: 'from-secondary/18 to-secondary/4' },
  'UI Libraries':   { Icon: Layers,    color: 'from-cyan-500/12 to-cyan-500/3' },
  'State & Tools':  { Icon: Zap,       color: 'from-primary/14 to-transparent' },
}

export default function Skills() {
  return (
    <section className="py-28 bg-muted/15 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-primary/50 tracking-[0.35em] uppercase">04 /</span>
            <div className="flex-1 h-px bg-border/50" />
            <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              Tech Stack
            </span>
          </div>
          <h2 className="font-heading font-black text-5xl md:text-6xl leading-none">
            Skills &amp;{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </motion.div>

        {/* ── Three.js network visualization ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-52 mb-10 rounded-2xl overflow-hidden border border-border/50"
        >
          <SkillsNetwork />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-10 bg-linear-to-b from-background/40 to-transparent pointer-events-none" />
          <div className="absolute top-3 left-4 text-xs text-muted-foreground/50 font-mono tracking-widest uppercase">
            Neural / Network
          </div>
        </motion.div>

        {/* ── Skills grid ── */}
        <div className="grid md:grid-cols-2 gap-5">
          {Object.entries(SKILLS_DATA).map(([category, skills], catIndex) => {
            const meta = CATEGORY_META[category] ?? { Icon: Globe, color: 'from-primary/10 to-transparent' }
            const { Icon } = meta

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: catIndex * 0.1, duration: 0.55 }}
                className="relative bg-card border border-border rounded-2xl p-6 overflow-hidden hover:border-primary/25 transition-colors"
              >
                {/* Card tint gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${meta.color} opacity-50 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-primary/12 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <Typography variant="h5" className="text-foreground font-bold">{category}</Typography>
                    <span className="ml-auto text-xs text-muted-foreground bg-muted border border-border px-2.5 py-0.5 rounded-full font-mono">
                      {(skills as string[]).length}
                    </span>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {(skills as string[]).map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.82 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: catIndex * 0.07 + i * 0.045, duration: 0.38 }}
                        className="group flex items-center gap-1.5 bg-background/70 backdrop-blur-sm border border-border hover:border-primary/45 hover:text-primary hover:bg-primary/6 hover:shadow-[0_0_12px_oklch(0.65_0.2_145/0.15)] transition-all px-3.5 py-2 rounded-xl text-sm text-foreground cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:shadow-[0_0_6px_oklch(0.65_0.2_145)] transition-all shrink-0" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
