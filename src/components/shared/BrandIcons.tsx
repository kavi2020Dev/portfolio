import type { CSSProperties } from 'react'

type IconProps = { className?: string; style?: CSSProperties }

/* ── Atom (React / React Native / Electron) ── */
function Atom({ className, style, color }: IconProps & { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden>
      <circle cx="12" cy="12" r="2" fill={color} />
      <g fill="none" stroke={color} strokeWidth="1">
        <ellipse cx="12" cy="12" rx="10" ry="4.3" />
        <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(120 12 12)" />
      </g>
    </svg>
  )
}

export const ReactIcon = (p: IconProps) => <Atom {...p} color="#61DAFB" />
export const ElectronIcon = (p: IconProps) => <Atom {...p} color="#9FEAF9" />

/* ── Next.js — black disc + N ── */
export function NextIcon({ className, style }: IconProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-foreground text-background font-heading font-black ${className ?? ''}`}
      style={style}
    >
      <span className="text-[0.6em] leading-none">N</span>
    </span>
  )
}

/* ── TypeScript — blue square + TS ── */
export function TsIcon({ className, style }: IconProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[22%] font-heading font-black text-white ${className ?? ''}`}
      style={{ background: '#3178C6', ...style }}
    >
      <span className="text-[0.44em] leading-none tracking-tight">TS</span>
    </span>
  )
}

/* ── Node.js — green hexagon ── */
export function NodeIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden>
      <polygon points="12,1.7 21.2,7 21.2,17 12,22.3 2.8,17 2.8,7" fill="#5FA04E" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">JS</text>
    </svg>
  )
}

/* ── PostgreSQL — database cylinder ── */
export function PostgresIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden fill="none" stroke="#336791" strokeWidth="1.6">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </svg>
  )
}

/* ── GitHub ── */
export function GithubIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

/* ── LinkedIn — brand square + in ── */
export function LinkedinIcon({ className, style }: IconProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[22%] font-bold text-white ${className ?? ''}`}
      style={{ background: '#0A66C2', ...style }}
    >
      <span className="text-[0.5em] leading-none lowercase tracking-tight">in</span>
    </span>
  )
}
