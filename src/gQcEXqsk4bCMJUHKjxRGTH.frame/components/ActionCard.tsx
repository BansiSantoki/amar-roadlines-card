import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type ActionCardProps = {
  index: number
  row: 'top' | 'bottom'
  side: 'left' | 'right'
  href: string
  external?: boolean
  label: string
  icon: React.ReactNode
  title: React.ReactNode
  titleScale?: number
  children?: React.ReactNode
}

/** One of the four tappable visiting-card panels. The whole card is the link. */
export function ActionCard({
  index,
  row,
  side,
  href,
  external,
  label,
  icon,
  title,
  titleScale = 0.058,
  children,
}: ActionCardProps) {
  const reduce = useReducedMotion()

  return (
    <motion.a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group relative flex min-w-0 flex-col items-center justify-center overflow-hidden bg-cream/90 text-center text-navy shadow-[0_10px_28px_rgba(4,18,48,0.38),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_0_24px_rgba(255,255,255,0.7)] ring-1 ring-white/70 backdrop-blur-md transition-[translate,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] outline-none hover:-translate-y-[3px] hover:bg-white/95 hover:shadow-[0_16px_36px_rgba(4,18,48,0.48),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_0_24px_rgba(255,255,255,0.7)] focus-visible:ring-4 focus-visible:ring-orange/70 active:translate-y-0"
      style={{
        height: w(0.46),
        borderRadius: w(0.075),
        paddingInline: w(0.025),
        paddingTop: row === 'top' ? w(0.035) : w(0.075),
        paddingBottom: row === 'top' ? w(0.07) : w(0.035),
      }}
      initial={reduce ? false : { opacity: 0, x: side === 'left' ? -14 : 14, y: 18, scale: 0.97 }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduce ? 0 : 0.45,
        ease: [0.23, 1, 0.32, 1],
        delay: reduce ? 0 : 0.32 + index * 0.06,
      }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
    >
      <span
        aria-hidden
        className="block shrink-0 text-orange transition-transform duration-200 ease-out group-hover:-translate-y-0.5"
        style={{ width: w(0.11), height: w(0.11), marginBottom: w(0.018) }}
      >
        {icon}
      </span>
      <span
        className="block font-extrabold leading-[1.1] tracking-[-0.01em] text-navy"
        style={{ fontSize: w(titleScale) }}
      >
        {title}
      </span>
      {children}
    </motion.a>
  )
}

function w(n: number) {
  return `calc(var(--w) * ${n})`
}
