'use client'
import { motion } from 'framer-motion'
import { Typography } from '@/components/ui/typography'
import { PROJECTS_DATA } from '@/lib/data'
import { ExternalLink, Layers } from 'lucide-react'

const CATEGORY_COLORS: Record<string, string> = {
  'ERP System':  'bg-green-500/10 text-green-400 border-green-500/20',
  Healthcare:    'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'E-Commerce':  'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Back Office': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

export default function Projects() {
  const [featured, ...rest] = PROJECTS_DATA

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Corner glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-xs font-semibold tracking-[0.25em] uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl mt-2">
            Featured{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <Typography variant="p" className="text-muted-foreground mt-4 max-w-lg mx-auto">
            12+ production applications shipped across healthcare, ERP, e-commerce, and enterprise.
          </Typography>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Featured — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group md:col-span-2 relative bg-card border border-border rounded-3xl p-8 hover:border-primary/40 hover:shadow-[0_0_50px_oklch(0.65_0.2_145/0.1)] transition-all duration-400 overflow-hidden cursor-default"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/6 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <span className={`text-xs border px-3 py-1 rounded-full font-medium ${CATEGORY_COLORS[featured.category] ?? 'bg-primary/10 text-primary border-primary/20'}`}>
                  {featured.category}
                </span>
                <ExternalLink size={15} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-primary/12 border border-primary/25 flex items-center justify-center mb-5 group-hover:bg-primary/18 group-hover:shadow-[0_0_20px_oklch(0.65_0.2_145/0.25)] transition-all">
                <span className="font-heading font-black text-primary text-2xl">{featured.title[0]}</span>
              </div>

              <Typography variant="h3" className="text-foreground mb-3 text-xl font-bold">
                {featured.title}
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                {featured.description}
              </Typography>

              <div className="flex flex-wrap gap-2">
                {featured.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
          </motion.div>

          {/* Second project — tall card */}
          <ProjectCard project={rest[0]} index={1} tall />

          {/* Bottom row: 3 cards */}
          {rest.slice(1).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 2} />
          ))}
        </div>

        {/* Total count badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-full text-sm text-muted-foreground">
            <Layers size={14} className="text-primary" />
            Showing 5 of <span className="text-foreground font-semibold">12+</span> total projects
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  tall = false,
}: {
  project: typeof PROJECTS_DATA[0]
  index: number
  tall?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.09, duration: 0.55 }}
      className={`group relative bg-card border border-border rounded-3xl p-6 flex flex-col hover:border-primary/35 hover:shadow-[0_0_35px_oklch(0.65_0.2_145/0.08)] transition-all duration-300 cursor-default ${tall ? 'md:row-span-1' : ''}`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs border px-2.5 py-0.5 rounded-full ${CATEGORY_COLORS[project.category] ?? 'bg-primary/10 text-primary border-primary/20'}`}>
          {project.category}
        </span>
        <ExternalLink size={13} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:shadow-[0_0_14px_oklch(0.65_0.2_145/0.2)] transition-all">
        <span className="font-heading font-black text-primary text-lg">{project.title[0]}</span>
      </div>

      <Typography variant="h5" className="text-foreground mb-2">{project.title}</Typography>
      <Typography variant="small" className="text-muted-foreground leading-relaxed mb-5 flex-1">
        {project.description}
      </Typography>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-xs bg-muted text-muted-foreground border border-border px-2.5 py-0.5 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="absolute bottom-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-50 transition-opacity rounded-full" />
    </motion.div>
  )
}
