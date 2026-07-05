'use client'
import { SERVICES } from '@/lib/data'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, Code2, Cpu, Database, Globe,
  Layers, LineChart, Settings, Smartphone, Zap,
} from 'lucide-react'

const SERVICE_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  strategy:   LineChart,
  mvp:        Zap,
  'web-app':  Globe,
  mobile:     Smartphone,
  backend:    Database,
  scaling:    Cpu,
  support:    Settings,
  ui:         Layers,
  consulting: Code2,
}

const SERVICE_ACCENTS: Record<string, string> = {
  strategy:   'group-hover:from-primary/15',
  mvp:        'group-hover:from-secondary/15',
  'web-app':  'group-hover:from-blue-500/12',
  mobile:     'group-hover:from-purple-500/12',
  backend:    'group-hover:from-cyan-500/12',
  scaling:    'group-hover:from-primary/12',
  support:    'group-hover:from-secondary/12',
  ui:         'group-hover:from-pink-500/12',
  consulting: 'group-hover:from-primary/15',
}

export default function Service() {
  return (
    <section className="py-28 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-primary/50 tracking-[0.35em] uppercase">05 /</span>
            <div className="flex-1 h-px bg-border/50" />
            <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              What I Do
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl leading-none">
              Services I{' '}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Provide
              </span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed md:text-right">
              End-to-end product development — from concept to production.
            </p>
          </div>
        </motion.div>

        {/* ── Services grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon] ?? Code2
            const accent = SERVICE_ACCENTS[service.icon] ?? 'group-hover:from-primary/10'
            const num = String(index + 1).padStart(2, '0')

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className={`group relative bg-card border border-border rounded-2xl p-6 overflow-hidden hover:border-primary/30 hover:shadow-[0_0_35px_oklch(0.6_0.2_255/0.08)] transition-all duration-300 cursor-default ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Gradient tint on hover */}
                <div className={`absolute inset-0 bg-linear-to-br from-transparent to-transparent ${accent} transition-all duration-500 pointer-events-none`} />

                {/* Large background number */}
                <span className="absolute top-3 right-4 font-heading font-black text-6xl text-foreground/4 group-hover:text-primary/8 transition-colors select-none leading-none">
                  {num}
                </span>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_14px_oklch(0.6_0.2_255/0.2)] transition-all">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <motion.div
                      whileHover={{ x: 2, y: -2 }}
                      className="w-7 h-7 rounded-full border border-border/60 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-primary/30 transition-all"
                    >
                      <ArrowUpRight size={13} className="text-primary" />
                    </motion.div>
                  </div>

                  <h5 className="font-heading font-bold text-base text-foreground mb-2">
                    {service.title}
                  </h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
