import React from 'react'

type IconProps = { className?: string }

/** Perspective highway: two edges converging with a dashed centre line. */
export function RoadIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" className={className}>
      <path d="M19 6 7 43" />
      <path d="M29 6 41 43" />
      <path d="M24 8v5M24 19v6M24 31v9" strokeWidth={3} />
    </svg>
  )
}

/** Laptop with a globe on screen. */
export function LaptopGlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="8" y="9" width="32" height="22" rx="2" />
      <path d="M3 37h42l-2.5 3.5h-37z" />
      <circle cx="24" cy="20" r="7" strokeWidth={1.8} />
      <path d="M17 20h14M24 13c-2.6 2-2.6 12 0 14M24 13c2.6 2 2.6 12 0 14" strokeWidth={1.6} />
    </svg>
  )
}

/** White liquid tanker truck, side view. */
export function TankerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 7h4M15 7v3M23 7v3" />
      <rect x="3" y="10" width="38" height="15" rx="7.5" />
      <path d="M3 26h39" />
      <path d="M44 13h8.5l6.5 8v9H44z" />
      <path d="M47 16h5l3.5 5H47z" strokeWidth={2} />
      <path d="M2 30h42" />
      <circle cx="11" cy="32" r="3.6" fill="#0b2a5e" />
      <circle cx="21" cy="32" r="3.6" fill="#0b2a5e" />
      <circle cx="51" cy="32" r="3.6" fill="#0b2a5e" />
    </svg>
  )
}

/** The orange arc under the tagline. */
export function Swoosh({ className }: IconProps) {
  return (
    <svg viewBox="0 0 200 12" className={className} aria-hidden>
      <path d="M2 10C60 1 140 1 198 10C140 4.5 60 4.5 2 10Z" fill="currentColor" />
    </svg>
  )
}
