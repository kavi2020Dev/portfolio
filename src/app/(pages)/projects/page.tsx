'use client'
import { motion } from 'framer-motion'
import { PROJECTS_DATA } from '@/lib/data'
import { ExternalLink, Layers } from 'lucide-react'

const CATEGORY_COLORS: Record<string, string> = {
  'Web Platform': 'bg-primary/10 text-primary border-primary/25',
  'Desktop App':  'bg-blue-500/10 text-blue-600 border-blue-500/25',
  'Back Office':  'bg-purple-500/10 text-purple-600 border-purple-500/25',
  'ERP System':   'bg-secondary/10 text-secondary border-secondary/30',
  Healthcare:     'bg-cyan-500/10 text-cyan-600 border-cyan-500/25',
  'E-Commerce':   'bg-amber-500/10 text-amber-600 border-amber-500/25',
}

export default function Projects() {
  const [featured, ...rest] = PROJECTS_DATA

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/4 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="font-mono text-xs text-primary/50 tracking-[0.35em] uppercase">03 /</span>
            <div className="flex-1 h-px bg-border/50" />
            <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              Portfolio
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="font-heading font-black text-5xl md:text-6xl leading-none">
              Featured{' '}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed md:text-right">
              12+ production apps shipped across healthcare, ERP, e-commerce, and enterprise.
            </p>
          </div>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Featured — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group md:col-span-2 relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-[0_0_50px_oklch(0.6_0.2_255/0.1)] transition-all duration-400 cursor-default"
          >
            {/* Top accent bar */}
            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/60 to-transparent" />

            <div className="p-8 relative z-10">
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/6 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className={`text-xs border px-3 py-1 rounded-full font-medium ${CATEGORY_COLORS[featured.category] ?? 'bg-primary/10 text-primary border-primary/20'}`}>
                    {featured.category}
                  </span>
                </div>
                <ExternalLink size={15} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-primary/12 border border-primary/25 flex items-center justify-center mb-5 group-hover:bg-primary/18 group-hover:shadow-[0_0_20px_oklch(0.6_0.2_255/0.25)] transition-all">
                <span className="font-heading font-black text-primary text-2xl">{featured.title[0]}</span>
              </div>

              <h3 className="font-heading font-bold text-xl text-foreground mb-0.5">{featured.title}</h3>
              <p className="text-xs text-muted-foreground mb-4 font-medium">{featured.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-md">{featured.description}</p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-6">
                {featured.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {featured.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
          </motion.div>

          {/* Second project */}
          <ProjectCard project={rest[0]} index={1} />

          {/* Bottom row */}
          {rest.slice(1).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 2} />
          ))}
        </div>

        {/* Total count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-full text-sm text-muted-foreground">
            <Layers size={14} className="text-primary" />
            Showing 5 of <span className="text-foreground font-semibold mx-1">12+</span> total projects
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: typeof PROJECTS_DATA[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.09, duration: 0.55 }}
      className="group relative bg-card border border-border rounded-3xl overflow-hidden flex flex-col hover:border-primary/35 hover:shadow-[0_0_35px_oklch(0.6_0.2_255/0.08)] transition-all duration-300 cursor-default"
    >
      {/* Top accent */}
      <div className="h-px w-0 bg-linear-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500" />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <span className={`text-xs border px-2.5 py-0.5 rounded-full ${CATEGORY_COLORS[project.category] ?? 'bg-primary/10 text-primary border-primary/20'}`}>
            {project.category}
          </span>
          <ExternalLink size={13} className="text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:shadow-[0_0_14px_oklch(0.6_0.2_255/0.2)] transition-all">
          <span className="font-heading font-black text-primary text-lg">{project.title[0]}</span>
        </div>

        <h5 className="font-heading font-bold text-base text-foreground mb-0.5">{project.title}</h5>
        <p className="text-xs text-muted-foreground/70 mb-3 font-medium">{project.subtitle}</p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs bg-muted text-muted-foreground border border-border px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-50 transition-opacity rounded-full" />
    </motion.div>
  )
}
