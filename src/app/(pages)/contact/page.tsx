'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Typography } from '@/components/ui/typography'
import { PERSONAL_INFO } from '@/lib/data'
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { fadeInLeft, fadeInRight } from '@/lib/animation'

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: PERSONAL_INFO.location,
    href: undefined,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'kavi-k-41ab8224b',
    href: PERSONAL_INFO.linkedin,
  },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)?.value ?? ''

    try {
      const res = await fetch('https://formsubmit.co/ajax/kavi.react@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: getValue('name'),
          email: getValue('email'),
          subject: getValue('subject'),
          message: getValue('message'),
          _subject: `Portfolio Contact: ${getValue('subject') || 'New message'}`,
        }),
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-28 bg-muted/15">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary text-xs font-semibold tracking-[0.25em] uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl mt-2">
            Let&apos;s{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Left: contact info ── */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-3"
          >
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card border border-border rounded-2xl px-5 py-4 hover:border-primary/35 hover:shadow-[0_0_20px_oklch(0.65_0.2_145/0.06)] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Icon size={16} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors truncate font-medium">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability card */}
            <div className="mt-4 bg-primary/8 border border-primary/20 rounded-2xl px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <Typography variant="small" className="text-primary font-semibold">
                  Currently available
                </Typography>
              </div>
              <Typography variant="muted" className="text-muted-foreground">
                Open to full-time and freelance opportunities.
              </Typography>
            </div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.form
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_10px_oklch(0.65_0.2_145/0.1)] transition-all"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_10px_oklch(0.65_0.2_145/0.1)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project discussion"
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_10px_oklch(0.65_0.2_145/0.1)] transition-all"
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Message *</label>
              <textarea
                rows={5}
                name="message"
                required
                placeholder="Tell me about your project..."
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_10px_oklch(0.65_0.2_145/0.1)] transition-all resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-primary-foreground font-medium py-3.5 rounded-xl transition-all glow-primary-sm hover:glow-primary"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Sending…
                </>
              ) : status === 'sent' ? (
                <>
                  <CheckCircle size={15} />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>

            {/* Status feedback */}
            <AnimatePresence>
              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-3 bg-primary/10 border border-primary/25 text-primary px-4 py-3 rounded-xl text-sm"
                >
                  <CheckCircle size={16} className="shrink-0" />
                  Thanks! I&apos;ll get back to you within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-3 bg-destructive/10 border border-destructive/25 text-destructive px-4 py-3 rounded-xl text-sm"
                >
                  <AlertCircle size={16} className="shrink-0" />
                  Something went wrong. Email me directly at{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="underline underline-offset-2">
                    {PERSONAL_INFO.email}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
