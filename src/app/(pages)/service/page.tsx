'use client'
import { Typography } from '@/components/ui/typography'
import { SERVICES } from '@/lib/data'
import { motion } from 'framer-motion'
import {
  ArrowRight, Code2, Cpu, Database, Globe,
  Layers, LineChart, Settings, Smartphone, Zap,
} from 'lucide-react'

const SERVICE_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  strategy:  LineChart,
  mvp:       Zap,
  'web-app': Globe,
  mobile:    Smartphone,
  backend:   Database,
  scaling:   Cpu,
  support:   Settings,
  ui:        Layers,
  consulting: Code2,
}

export default function Service() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">What I Do</span>
          <Typography variant="h2" className="mt-3 text-4xl md:text-5xl font-black">
            Services I <span className="text-primary">Provide</span>
          </Typography>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon] ?? Code2
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_30px_oklch(0.65_0.2_145/0.07)] transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:shadow-[0_0_12px_oklch(0.65_0.2_145/0.2)] transition-all">
                  <Icon size={20} className="text-primary" />
                </div>
                <Typography variant="h5" className="text-foreground mb-2">
                  {service.title}
                </Typography>
                <Typography variant="small" className="text-muted-foreground leading-relaxed">
                  {service.description}
                </Typography>
                <div className="flex items-center gap-1.5 text-primary text-xs mt-5 font-medium opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                  Learn more <ArrowRight size={12} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
