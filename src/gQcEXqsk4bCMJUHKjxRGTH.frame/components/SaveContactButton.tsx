import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, UserPlus } from 'lucide-react'

import { downloadVCard } from './vcard'

type Props = { phone: string; website: string }

/** Downloads a vCard so the visitor can add Amar Roadlines to their phone contacts. */
export function SaveContactButton({ phone, website }: Props) {
  const [saved, setSaved] = useState(false)

  function handleClick() {
    downloadVCard({ phone, website })
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2400)
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
    >
      {/* Pulse ring */}
      <span aria-hidden className="ar-pulse pointer-events-none absolute inset-0 rounded-full border-2 border-orange-bright" />

      <motion.button
        type="button"
        onClick={handleClick}
        aria-label="Save Amar Roadlines to your contacts"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
        className="ar-glow group relative flex w-full items-center justify-center rounded-full border-2 border-[#ffb067] bg-[linear-gradient(180deg,#ff8a1f_0%,#f6650f_55%,#e2530a_100%)] font-black uppercase tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(3,14,38,0.55)] outline-none focus-visible:ring-4 focus-visible:ring-white/70"
        style={{ height: w(0.15), fontSize: w(0.05), gap: w(0.03) }}
      >
        <span className="relative block transition-transform duration-200 ease-out group-hover:-translate-x-0.5 group-hover:-rotate-6" style={{ width: w(0.068), height: w(0.068) }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={saved ? 'check' : 'add'}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              {saved ? (
                <Check strokeWidth={3} className="h-full w-full" />
              ) : (
                <UserPlus strokeWidth={2.6} className="h-full w-full" />
              )}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="whitespace-nowrap">{saved ? 'Contact Ready' : 'Save Contact'}</span>
      </motion.button>
    </motion.div>
  )
}

function w(n: number) {
  return `calc(var(--w) * ${n})`
}
