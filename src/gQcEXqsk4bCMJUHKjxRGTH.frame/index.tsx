import React from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MapPin, PhoneCall } from 'lucide-react'

import { ActionCard } from './components/ActionCard'
import { CenterBadge } from './components/CenterBadge'
import { SaveContactButton } from './components/SaveContactButton'
import { LaptopGlobeIcon, RoadIcon, Swoosh } from './components/icons'

type Props = Partial<typeof args>

export default function BusinessCard(props: Props) {
  const { phone, website, address } = { ...args, ...props }
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const headerY = useTransform(scrollY, [0, 320], [0, reduce ? 0 : 56])

  const tel = `tel:${phone.replace(/[^\d+]/g, '')}`
  const siteUrl = `https://${website.replace(/^https?:\/\//, '')}`
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address.replace('–', '') + ', India'
  )}`

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-navy-deep font-sans text-navy antialiased">
      {/* Desktop surround: the same scene, softened, so the portrait card sits centred */}
      <div aria-hidden className="pointer-events-none fixed inset-0 hidden overflow-hidden sm:block">
        <img src={BG_URL} alt="" className="h-full w-full scale-110 object-cover opacity-35 blur-2xl" />
        <div className="absolute inset-0 bg-navy-deep/60" />
      </div>

      {/* Fixed tanker & refinery background — stays put while the card content scrolls */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 h-[100dvh] overflow-hidden bg-navy-deep sm:shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
        style={{ width: 'var(--w)', left: 'calc(50% - var(--w) / 2)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: EASE }}
      >
        <motion.img
          src={BG_URL}
          alt=""
          fetchpriority="high"
          decoding="async"
          className="h-full w-full object-contain object-top"
        />
      </motion.div>

      <main className="relative mx-auto" style={{ width: 'var(--w)' }}>
        {/* Header: logo + tagline */}
        {/* No transform/opacity on this wrapper: the logo's white ground is removed with
            mix-blend-multiply, which needs to blend straight onto the sky behind it. */}
        <header className="flex flex-col items-center" style={{ height: w(0.43), paddingTop: w(0.03) }}>
          <motion.img
            src={LOGO_URL}
            alt="Amar Roadlines"
            className="block mix-blend-multiply select-none"
            style={{ width: w(0.8), marginBottom: w(-0.06), marginTop: w(-0.012), y: headerY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: EASE, delay: 0.08 }}
            draggable={false}
          />
          <motion.p
            className="text-center font-semibold italic leading-[1.2] tracking-[-0.01em] text-navy"
            style={{ fontSize: w(0.057), marginTop: w(0.012), y: headerY }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE, delay: 0.18 }}
          >
            Your Partner in
            <span className="block font-extrabold text-orange" style={{ fontSize: w(0.061) }}>
              Liquid Chemical Transportation
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3, ease: EASE, delay: 0.28 }}
            style={{ width: w(0.42), marginTop: w(0.012), y: headerY }}
          >
            <Swoosh className="block h-auto w-full text-orange" />
          </motion.div>
        </header>

        {/* Hero: the tanker on the road, seen through the fixed background */}
        <section aria-label="Amar Roadlines liquid chemical tanker" style={{ height: w(0.43) }} />

        {/* Four action cards with the overlapping tanker badge */}
        <section
          className="relative grid grid-cols-2"
          style={{ paddingInline: w(0.043), gap: w(0.022) }}
        >
          <ActionCard
            index={0}
            row="top"
            side="left"
            href={tel}
            label={`Book your tanker — call ${phone}`}
            icon={<PhoneCall strokeWidth={2.2} className="h-full w-full" />}
            title={
              <>
                Book
                <br />
                Your Tanker
              </>
            }
          >
            <span
              className="ar-glow mt-[0.6em] inline-flex items-center justify-center whitespace-nowrap rounded-full bg-orange font-extrabold leading-none text-white transition-[background-color,transform] duration-150 ease-out group-hover:bg-[#e85a06] group-active:scale-[0.97]"
              style={{ fontSize: w(0.041), padding: `${w(0.024)} ${w(0.04)}` }}
            >
              {phone}
            </span>
          </ActionCard>

          <ActionCard
            index={1}
            row="top"
            side="right"
            href={siteUrl}
            external
            label="Explore our transport solutions"
            icon={<RoadIcon className="h-full w-full" />}
            title={
              <>
                Explore Our
                <br />
                Transport
                <br />
                Solutions
              </>
            }
            titleScale={0.053}
          >
            <span
              className="mt-[0.55em] block font-semibold leading-[1.25] text-navy/85"
              style={{ fontSize: w(0.037) }}
            >
              Liquid Chemical
              <br />
              Transportation
              <br />
              Across India
            </span>
          </ActionCard>

          <ActionCard
            index={2}
            row="bottom"
            side="left"
            href={mapsUrl}
            external
            label={`Find our office — ${address}`}
            icon={<MapPin strokeWidth={2.2} className="h-full w-full" />}
            title={
              <>
                Find Our
                <br />
                Office
              </>
            }
          >
            <span aria-hidden className="mx-auto mt-[0.55em] block h-[2px] rounded-full bg-orange" style={{ width: w(0.2) }} />
            <span
              className="mt-[0.5em] block whitespace-nowrap font-semibold leading-[1.28] text-navy/90"
              style={{ fontSize: w(0.032) }}
            >
              {formatAddress(address)}
            </span>
          </ActionCard>

          <ActionCard
            index={3}
            row="bottom"
            side="right"
            href={siteUrl}
            external
            label={`Visit our website — ${website}`}
            icon={<LaptopGlobeIcon className="h-full w-full" />}
            title={
              <>
                Visit Our
                <br />
                Website
              </>
            }
          >
            <span
              className="ar-glow mt-[0.75em] inline-flex items-center justify-center whitespace-nowrap rounded-full bg-orange font-bold leading-none text-white transition-[background-color,transform] duration-150 ease-out group-hover:bg-[#e85a06] group-active:scale-[0.97]"
              style={{ fontSize: w(0.034), padding: `${w(0.025)} ${w(0.026)}` }}
            >
              {website}
            </span>
          </ActionCard>

          <CenterBadge />
        </section>

        {/* Save contact */}
        <section style={{ paddingInline: w(0.075), paddingTop: w(0.07), paddingBottom: w(0.34) }}>
          <SaveContactButton phone={phone} website={siteUrl} />
        </section>
      </main>
    </div>
  )
}

export const args = {
  phone: '+91 98980 28748',
  website: 'www.amarroadlines.com',
  address: 'Odhav, Ahmedabad – 382415, Gujarat',
}

export const argTypes = {
  phone: { control: 'text' },
  website: { control: 'text' },
  address: { control: 'text' },
}

const BG_URL = 'https://cdn.magicpatterns.com/uploads/mcMWLVNtVgbtfeVxd4wCLx/image.png'
const LOGO_URL = 'https://cdn.magicpatterns.com/uploads/8kv6xe1wxbWZWqrWb9NRF8/image.png'
const EASE = [0.23, 1, 0.32, 1] as const

/** A length relative to the card width. */
function w(n: number) {
  return `calc(var(--w) * ${n})`
}

/** "Odhav, Ahmedabad – 382415, Gujarat" → three lines, as on the printed card. */
function formatAddress(address: string) {
  const parts = address.split(',').map((p) => p.trim())
  return parts.map((p, i) => (
    <React.Fragment key={i}>
      {p}
      {i < parts.length - 1 ? ',' : ''}
      {i < parts.length - 1 && <br />}
    </React.Fragment>
  ))
}
