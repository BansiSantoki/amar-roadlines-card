import React from 'react'
import { motion } from 'framer-motion'

import { TankerIcon } from './icons'

/** Navy tanker medallion sitting over the inner corners of the four cards. */
export function CenterBadge() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ width: w(0.27), height: w(0.27) }}
    >
      <motion.div
        className="ar-float h-full w-full"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}
      >
        <div className="pointer-events-auto relative h-full w-full transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.06]">
          {/* Orange rim with navy shadow */}
          <div
            className="absolute inset-0 rounded-full bg-orange shadow-[0_12px_28px_rgba(3,14,38,0.6)]"
          />
          {/* Rotating highlight arc on the rim */}
          <svg viewBox="0 0 100 100" className="ar-spin absolute inset-0 h-full w-full" aria-hidden>
            <circle
              cx="50"
              cy="50"
              r="47.5"
              fill="none"
              stroke="#ffb067"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="60 240"
            />
          </svg>
          {/* Navy face */}
          <div
            className="absolute rounded-full bg-navy shadow-[inset_0_4px_12px_rgba(255,255,255,0.12),inset_0_-6px_14px_rgba(0,0,0,0.35)]"
            style={{ inset: w(0.017) }}
          >
            <div className="flex h-full w-full items-center justify-center text-white">
              <TankerIcon className="w-[64%]" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function w(n: number) {
  return `calc(var(--w) * ${n})`
}
