'use client'

import { motion } from 'framer-motion'
import React from 'react'

import { type MarriageStatsData, type MilestoneData } from './milestone-utils'
import { RECIPE_INGREDIENTS, RECIPE_INSTRUCTIONS } from './recipe-content'

// ─── Typography ───────────────────────────────────────────────────────────────
const SERIF = "'Cormorant Garamond', 'Georgia', serif"
const SCRIPT = "'Pinyon Script', cursive"
const SANS = "'Outfit', sans-serif"

// ─── Colour palette (deep plum / engraved invitation) ────────────────────────
const BG = '#1e0a2e'
const CARD_BG = '#120520'
const BERRY = '#9a3b51'
const TEAL = '#28798b'
const FOREST = '#3d6a48'
const PURPLE = '#7a4a7c'
const BLUSH = '#e8c8d4'
const MUTED = 'rgba(232,200,212,0.5)'
const FRAME = 'rgba(232,200,212,0.3)'
const FRAME_ACC = 'rgba(232,200,212,0.5)'

// ─── Easing ───────────────────────────────────────────────────────────────────
const EASE = [0.32, 0.72, 0, 1] as const

// ─── Ornate SVG panel frame ───────────────────────────────────────────────────
// preserveAspectRatio="none" fills any panel size; vector-effect="non-scaling-stroke"
// keeps stroke weight consistent. Corner flourishes are simple curves + leaf
// ellipses so mild aspect-ratio distortion is invisible in practice.
const OrnateFrame = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    preserveAspectRatio="none"
    style={{
      height: '100%',
      inset: 0,
      overflow: 'visible',
      pointerEvents: 'none',
      position: 'absolute',
      width: '100%',
    }}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main rectangle border */}
    <rect
      fill="none"
      height="96"
      stroke={FRAME}
      strokeWidth="0.5"
      vectorEffect="non-scaling-stroke"
      width="96"
      x="2"
      y="2"
    />

    {/* ── Top-left corner flourish ── */}
    <g opacity="0.78">
      <path
        d="M2,10 C2,5.5 5.5,2 10,2"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M2,2 C4,6 6.5,7.5 10,6.5"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.7"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M2,2 C6,4 7.5,6.5 6.5,10"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.7"
        vectorEffect="non-scaling-stroke"
      />
      <ellipse cx="8.5" cy="5.2" fill={FRAME_ACC} fillOpacity="0.55" rx="0.9" ry="2.1" transform="rotate(42 8.5 5.2)" />
      <ellipse
        cx="5.2"
        cy="8.5"
        fill={FRAME_ACC}
        fillOpacity="0.55"
        rx="0.9"
        ry="2.1"
        transform="rotate(-48 5.2 8.5)"
      />
      <circle cx="2" cy="2" fill={FRAME_ACC} r="0.9" />
    </g>

    {/* ── Top-right corner flourish ── */}
    <g opacity="0.78">
      <path
        d="M98,10 C98,5.5 94.5,2 90,2"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M98,2 C96,6 93.5,7.5 90,6.5"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.7"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M98,2 C94,4 92.5,6.5 93.5,10"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.7"
        vectorEffect="non-scaling-stroke"
      />
      <ellipse
        cx="91.5"
        cy="5.2"
        fill={FRAME_ACC}
        fillOpacity="0.55"
        rx="0.9"
        ry="2.1"
        transform="rotate(-42 91.5 5.2)"
      />
      <ellipse
        cx="94.8"
        cy="8.5"
        fill={FRAME_ACC}
        fillOpacity="0.55"
        rx="0.9"
        ry="2.1"
        transform="rotate(48 94.8 8.5)"
      />
      <circle cx="98" cy="2" fill={FRAME_ACC} r="0.9" />
    </g>

    {/* ── Bottom-left corner flourish ── */}
    <g opacity="0.78">
      <path
        d="M2,90 C2,94.5 5.5,98 10,98"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M2,98 C4,94 6.5,92.5 10,93.5"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.7"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M2,98 C6,96 7.5,93.5 6.5,90"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.7"
        vectorEffect="non-scaling-stroke"
      />
      <ellipse
        cx="8.5"
        cy="94.8"
        fill={FRAME_ACC}
        fillOpacity="0.55"
        rx="0.9"
        ry="2.1"
        transform="rotate(-42 8.5 94.8)"
      />
      <ellipse
        cx="5.2"
        cy="91.5"
        fill={FRAME_ACC}
        fillOpacity="0.55"
        rx="0.9"
        ry="2.1"
        transform="rotate(48 5.2 91.5)"
      />
      <circle cx="2" cy="98" fill={FRAME_ACC} r="0.9" />
    </g>

    {/* ── Bottom-right corner flourish ── */}
    <g opacity="0.78">
      <path
        d="M98,90 C98,94.5 94.5,98 90,98"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M98,98 C96,94 93.5,92.5 90,93.5"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.7"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M98,98 C94,96 92.5,93.5 93.5,90"
        fill="none"
        stroke={FRAME_ACC}
        strokeLinecap="round"
        strokeWidth="0.7"
        vectorEffect="non-scaling-stroke"
      />
      <ellipse
        cx="91.5"
        cy="94.8"
        fill={FRAME_ACC}
        fillOpacity="0.55"
        rx="0.9"
        ry="2.1"
        transform="rotate(42 91.5 94.8)"
      />
      <ellipse
        cx="94.8"
        cy="91.5"
        fill={FRAME_ACC}
        fillOpacity="0.55"
        rx="0.9"
        ry="2.1"
        transform="rotate(-48 94.8 91.5)"
      />
      <circle cx="98" cy="98" fill={FRAME_ACC} r="0.9" />
    </g>

    {/* ── Mid-edge lozenge ornaments ── */}
    <path d="M50,0 L52,2 L50,4 L48,2 Z" fill={FRAME_ACC} />
    <path d="M50,96 L52,98 L50,100 L48,98 Z" fill={FRAME_ACC} />
    <path d="M0,50 L2,48 L4,50 L2,52 Z" fill={FRAME_ACC} />
    <path d="M96,50 L98,48 L100,50 L98,52 Z" fill={FRAME_ACC} />
  </svg>
)

// ─── Stat icons ───────────────────────────────────────────────────────────────
// Days Married — interlocked wedding rings (two overlapping circles)
const WeddingRingsIcon = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    fill="none"
    height="22"
    stroke={BERRY}
    strokeLinecap="round"
    strokeWidth="2"
    viewBox="0 0 62 38"
    width="36"
  >
    <circle cx="20" cy="19" r="13" />
    <circle cx="42" cy="19" r="13" />
  </svg>
)

// Years of Bliss — dove silhouette (curved body + swept wing)
const DoveIcon = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    fill="none"
    height="28"
    stroke={TEAL}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.4"
    viewBox="0 0 50 38"
    width="36"
  >
    <path
      d="M8,22 C10,14 18,11 25,12 C32,13 40,11 44,7 C44,7 38,3 33,8 C28,3 16,5 11,12 C6,17 6,24 12,26 C18,28 26,27 28,25"
      fill={TEAL}
      fillOpacity="0.12"
    />
    <path d="M15,14 C22,8 32,6 40,9 C35,14 26,15 22,17 Z" fill={TEAL} fillOpacity="0.3" />
    <path d="M28,25 C30,28 32,32 30,35 C27,31 23,31 20,35 C18,32 23,28 28,25" />
    <circle cx="44" cy="7" fill={TEAL} fillOpacity="0.45" r="3.5" stroke="none" />
    <circle cx="45.2" cy="5.6" fill={TEAL} r="1" stroke="none" />
  </svg>
)

// Hours Together — crossed champagne flutes with bubbles
const ChampagneIcon = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    fill="none"
    height="34"
    stroke={BERRY}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.4"
    viewBox="0 0 44 44"
    width="34"
  >
    <path d="M13,4 L9,18 L17,18 L13,4 Z" fill={BERRY} fillOpacity="0.12" />
    <line x1="13" x2="13" y1="18" y2="38" />
    <line x1="8" x2="18" y1="38" y2="38" />
    <path d="M31,4 L27,18 L35,18 L31,4 Z" fill={BERRY} fillOpacity="0.12" />
    <line x1="31" x2="31" y1="18" y2="38" />
    <line x1="26" x2="36" y1="38" y2="38" />
    <path d="M17,14 C22,11 26,11 31,14" />
    <circle cx="13" cy="10" fill={BERRY} fillOpacity="0.5" r="1.2" stroke="none" />
    <circle cx="15" cy="7" fill={BERRY} fillOpacity="0.35" r="0.8" stroke="none" />
    <circle cx="31" cy="10" fill={BERRY} fillOpacity="0.5" r="1.2" stroke="none" />
    <circle cx="29" cy="7" fill={BERRY} fillOpacity="0.35" r="0.8" stroke="none" />
  </svg>
)

// Minutes of Love — clock face with 5-petal rose at the centre
const ClockRoseIcon = (): React.JSX.Element => {
  const markers = Array.from({ length: 12 }, (_, i) => {
    const major = i % 3 === 0
    const a = ((i * 30 - 90) * Math.PI) / 180
    const r1 = major ? 12 : 13.5
    return (
      <line
        key={i}
        stroke={PURPLE}
        strokeOpacity={major ? 0.75 : 0.3}
        strokeWidth={major ? 1.3 : 0.7}
        x1={20 + r1 * Math.cos(a)}
        x2={20 + 16 * Math.cos(a)}
        y1={20 + r1 * Math.sin(a)}
        y2={20 + 16 * Math.sin(a)}
      />
    )
  })
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="34"
      stroke={PURPLE}
      strokeLinecap="round"
      strokeWidth="1.4"
      viewBox="0 0 40 40"
      width="34"
    >
      <circle cx="20" cy="20" r="16" strokeOpacity="0.55" />
      {markers}
      <line stroke={PURPLE} strokeWidth="2" x1="20" x2="11.5" y1="20" y2="10.5" />
      <line stroke={PURPLE} strokeWidth="1.2" x1="20" x2="27.5" y1="20" y2="11.5" />
      {([0, 72, 144, 216, 288] as const).map((deg, i) => (
        <ellipse
          cx="20"
          cy="16.5"
          fill={PURPLE}
          fillOpacity="0.55"
          key={i}
          rx="1.6"
          ry="3.2"
          stroke="none"
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" fill={PURPLE} r="2.5" stroke="none" />
    </svg>
  )
}

// Seconds of Joy — elegant hourglass silhouette
const HourglassIcon = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    fill="none"
    height="34"
    stroke={BLUSH}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.4"
    viewBox="0 0 40 40"
    width="34"
  >
    <line stroke={BLUSH} strokeOpacity="0.65" strokeWidth="1.8" x1="8" x2="32" y1="4" y2="4" />
    <line stroke={BLUSH} strokeOpacity="0.65" strokeWidth="1.8" x1="8" x2="32" y1="36" y2="36" />
    <path d="M10,5.5 L30,5.5 L20,20 Z" fill={BLUSH} fillOpacity="0.18" stroke={BLUSH} strokeOpacity="0.5" />
    <path d="M20,20 L13,34.5 L27,34.5 Z" fill={BLUSH} fillOpacity="0.4" stroke="none" />
    <path d="M10,5.5 L20,20 L30,5.5" stroke={BLUSH} strokeOpacity="0.5" />
    <path d="M13,34.5 L20,20 L27,34.5" stroke={BLUSH} strokeOpacity="0.5" />
    <circle cx="20" cy="20" fill={BLUSH} r="1.8" stroke="none" />
    <line stroke={BLUSH} strokeOpacity="0.4" strokeWidth="0.8" x1="20" x2="20" y1="21" y2="27" />
  </svg>
)

// ─── Milestones section title vine flourish ───────────────────────────────────
const TitleFlourish = ({ flip = false }: { flip?: boolean }): React.JSX.Element => (
  <svg
    aria-hidden="true"
    fill="none"
    height="22"
    style={{ flexShrink: 0, transform: flip ? 'scaleX(-1)' : undefined }}
    viewBox="0 0 72 22"
    width="72"
  >
    <path
      d="M0,11 C14,11 17,4 24,4 C31,4 33,9 36,11 C39,13 43,18 50,18 C57,18 63,11 70,11"
      stroke={BERRY}
      strokeLinecap="round"
      strokeOpacity="0.6"
      strokeWidth="0.9"
    />
    <path d="M13,9 C16,6 19,4 23,3" stroke={BERRY} strokeLinecap="round" strokeOpacity="0.38" strokeWidth="0.65" />
    <path d="M55,14 C59,11 64,9 68,11 C65,14 61,16 58,15 Z" fill={BERRY} fillOpacity="0.28" stroke="none" />
    <circle cx="0" cy="11" fill={BERRY} fillOpacity="0.5" r="1.8" />
  </svg>
)

// ─── Milestone icons ──────────────────────────────────────────────────────────
// Achieved — heraldic seal (circle + cross dividers + filled centre disc)
const HeraldSeal = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    fill="none"
    height="16"
    stroke={FOREST}
    strokeWidth="1.1"
    style={{ flexShrink: 0, marginTop: '2px' }}
    viewBox="0 0 16 16"
    width="16"
  >
    <circle cx="8" cy="8" r="6.5" strokeOpacity="0.7" />
    <line stroke={FOREST} strokeOpacity="0.35" strokeWidth="0.65" x1="8" x2="8" y1="1.5" y2="14.5" />
    <line stroke={FOREST} strokeOpacity="0.35" strokeWidth="0.65" x1="1.5" x2="14.5" y1="8" y2="8" />
    <circle cx="8" cy="8" fill={FOREST} fillOpacity="0.22" r="3.5" stroke="none" />
    <circle cx="8" cy="8" fill={FOREST} r="1.5" stroke="none" />
  </svg>
)

// Upcoming — open outline frame (outline-only stamp for future milestones)
const HorizonIcon = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    fill="none"
    height="13"
    stroke={BERRY}
    strokeOpacity="0.5"
    strokeWidth="0.9"
    style={{ flexShrink: 0, marginTop: '2px' }}
    viewBox="0 0 14 14"
    width="13"
  >
    <rect height="11" rx="1" width="11" x="1.5" y="1.5" />
    <circle cx="7" cy="7" fill="none" r="2.5" stroke={BERRY} strokeOpacity="0.3" strokeWidth="0.65" />
  </svg>
)

// ─── Recipe card botanical SVG border ────────────────────────────────────────
// Absolutely positioned overlay. Drawn with preserveAspectRatio="none" so it
// covers the card regardless of content height. Corner botanical motifs stay
// legible even with mild aspect-ratio distortion on smaller viewports.
const BotanicalBorder = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    preserveAspectRatio="none"
    style={{ height: '100%', inset: 0, pointerEvents: 'none', position: 'absolute', width: '100%' }}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Inner inset rectangle — ~5% from each edge */}
    <rect
      fill="none"
      height="90"
      stroke="rgba(232,200,212,0.25)"
      strokeWidth="0.5"
      vectorEffect="non-scaling-stroke"
      width="90"
      x="5"
      y="5"
    />

    {/* ── Top-left botanical corner ── */}
    <g opacity="0.52">
      <path
        d="M5,5 C9,11 14,13 18,11"
        fill="none"
        stroke="rgba(232,200,212,0.5)"
        strokeLinecap="round"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M5,5 C11,9 13,14 11,18"
        fill="none"
        stroke="rgba(232,200,212,0.5)"
        strokeLinecap="round"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <ellipse cx="13" cy="9" fill="rgba(232,200,212,0.28)" rx="1.5" ry="3.8" transform="rotate(-38 13 9)" />
      <ellipse cx="9" cy="13" fill="rgba(232,200,212,0.28)" rx="1.5" ry="3.8" transform="rotate(52 9 13)" />
      <ellipse cx="17" cy="11" fill="rgba(232,200,212,0.18)" rx="1" ry="2.5" transform="rotate(-18 17 11)" />
      <circle cx="17.5" cy="11.2" fill="rgba(232,200,212,0.45)" r="1.2" stroke="none" />
      <circle cx="11.2" cy="17.5" fill="rgba(232,200,212,0.45)" r="1.2" stroke="none" />
    </g>

    {/* ── Top-right botanical corner ── */}
    <g opacity="0.52">
      <path
        d="M95,5 C91,11 86,13 82,11"
        fill="none"
        stroke="rgba(232,200,212,0.5)"
        strokeLinecap="round"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M95,5 C89,9 87,14 89,18"
        fill="none"
        stroke="rgba(232,200,212,0.5)"
        strokeLinecap="round"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <ellipse cx="87" cy="9" fill="rgba(232,200,212,0.28)" rx="1.5" ry="3.8" transform="rotate(38 87 9)" />
      <ellipse cx="91" cy="13" fill="rgba(232,200,212,0.28)" rx="1.5" ry="3.8" transform="rotate(-52 91 13)" />
      <circle cx="82.5" cy="11.2" fill="rgba(232,200,212,0.45)" r="1.2" stroke="none" />
      <circle cx="88.8" cy="17.5" fill="rgba(232,200,212,0.45)" r="1.2" stroke="none" />
    </g>

    {/* ── Bottom-left botanical corner ── */}
    <g opacity="0.52">
      <path
        d="M5,95 C9,89 14,87 18,89"
        fill="none"
        stroke="rgba(232,200,212,0.5)"
        strokeLinecap="round"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M5,95 C11,91 13,86 11,82"
        fill="none"
        stroke="rgba(232,200,212,0.5)"
        strokeLinecap="round"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <ellipse cx="13" cy="91" fill="rgba(232,200,212,0.28)" rx="1.5" ry="3.8" transform="rotate(38 13 91)" />
      <ellipse cx="9" cy="87" fill="rgba(232,200,212,0.28)" rx="1.5" ry="3.8" transform="rotate(-52 9 87)" />
      <circle cx="17.5" cy="88.8" fill="rgba(232,200,212,0.45)" r="1.2" stroke="none" />
      <circle cx="11.2" cy="82.5" fill="rgba(232,200,212,0.45)" r="1.2" stroke="none" />
    </g>

    {/* ── Bottom-right botanical corner ── */}
    <g opacity="0.52">
      <path
        d="M95,95 C91,89 86,87 82,89"
        fill="none"
        stroke="rgba(232,200,212,0.5)"
        strokeLinecap="round"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M95,95 C89,91 87,86 89,82"
        fill="none"
        stroke="rgba(232,200,212,0.5)"
        strokeLinecap="round"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <ellipse cx="87" cy="91" fill="rgba(232,200,212,0.28)" rx="1.5" ry="3.8" transform="rotate(-38 87 91)" />
      <ellipse cx="91" cy="87" fill="rgba(232,200,212,0.28)" rx="1.5" ry="3.8" transform="rotate(52 91 87)" />
      <circle cx="82.5" cy="88.8" fill="rgba(232,200,212,0.45)" r="1.2" stroke="none" />
      <circle cx="88.8" cy="82.5" fill="rgba(232,200,212,0.45)" r="1.2" stroke="none" />
    </g>

    {/* ── Mid-edge lozenge ornaments ── */}
    <path d="M50,3 L51.8,5 L50,7 L48.2,5 Z" fill="rgba(232,200,212,0.4)" />
    <path d="M50,93 L51.8,95 L50,97 L48.2,95 Z" fill="rgba(232,200,212,0.4)" />
    <path d="M3,50 L5,48.2 L7,50 L5,51.8 Z" fill="rgba(232,200,212,0.4)" />
    <path d="M93,50 L95,48.2 L97,50 L95,51.8 Z" fill="rgba(232,200,212,0.4)" />

    {/* Small 5-petal rosette at top-centre mid-point */}
    {([0, 72, 144, 216, 288] as const).map((deg, i) => (
      <ellipse
        cx="50"
        cy="3.2"
        fill="rgba(232,200,212,0.22)"
        key={i}
        rx="0.6"
        ry="1.4"
        transform={`rotate(${deg} 50 5)`}
      />
    ))}
  </svg>
)

// ─── Diamond ingredient bullet ────────────────────────────────────────────────
const DiamondBullet = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    fill={BERRY}
    height="7"
    style={{ flexShrink: 0, marginTop: '8px' }}
    viewBox="0 0 8 8"
    width="7"
  >
    <path d="M4,0 L8,4 L4,8 L0,4 Z" />
  </svg>
)

// ─── Stat panel ───────────────────────────────────────────────────────────────
// ⚠ DOM structure is load-bearing for the RTL test:
//   screen.getByText('Days Married').previousElementSibling must === the value div
//
// Inside the inner z-index wrapper, children must be in this order:
//   1. icon wrapper div
//   2. number div        ← previousElementSibling of label
//   3. label div         ← matched by getByText('Days Married')
const StatPanel = ({
  icon,
  label,
  value,
  color,
  fontSize = '2.8rem',
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: string
  fontSize?: string
}): React.JSX.Element => (
  <div style={{ padding: '1.5rem', position: 'relative', textAlign: 'center' }}>
    <OrnateFrame />
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* 1 — icon */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.6rem' }}>{icon}</div>
      {/* 2 — number: direct previousElementSibling of the label div */}
      <div style={{ color, fontFamily: SERIF, fontSize, fontWeight: 400, lineHeight: 1 }}>{value}</div>
      {/* 3 — label */}
      <div
        style={{
          color: MUTED,
          fontFamily: SANS,
          fontSize: '9px',
          letterSpacing: '0.3em',
          marginTop: '0.4rem',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>
    </div>
  </div>
)

// ─── Main component ───────────────────────────────────────────────────────────
export const InvitationSection = ({
  stats,
  milestoneData,
}: {
  stats: MarriageStatsData
  milestoneData: MilestoneData
}): React.JSX.Element => {
  const hasYears = stats.years >= 1

  const secondaryPanels: Array<{
    label: string
    value: string
    color: string
    icon: React.ReactNode
  }> = [
    ...(hasYears
      ? [
        {
          label: 'Years of Bliss',
          value: stats.years.toLocaleString(),
          color: TEAL,
          icon: <DoveIcon />,
        },
      ]
      : []),
    {
      label: 'Hours Together',
      value: stats.hours.toLocaleString(),
      color: BERRY,
      icon: <ChampagneIcon />,
    },
    {
      label: 'Minutes of Love',
      value: stats.minutes.toLocaleString(),
      color: PURPLE,
      icon: <ClockRoseIcon />,
    },
    {
      label: 'Seconds of Joy',
      value: stats.seconds.toLocaleString(),
      color: BLUSH,
      icon: <HourglassIcon />,
    },
  ]

  return (
    <section
      aria-label="The Engraved Invitation"
      className="md:px-10"
      style={{ backgroundColor: BG, fontFamily: SANS, padding: '5rem 1.25rem' }}
    >
      <div style={{ margin: '0 auto', maxWidth: '880px' }}>
        {/* ── Hero: Days Married ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          style={{ marginBottom: '1.5rem' }}
          transition={{ duration: 0.75, ease: EASE }}
          viewport={{ margin: '-60px', once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <StatPanel
            color={BLUSH}
            fontSize="clamp(3.5rem, 9vw, 6rem)"
            icon={<WeddingRingsIcon />}
            label="Days Married"
            value={stats.days.toLocaleString()}
          />
        </motion.div>

        {/* ── Secondary stat panels ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
          {secondaryPanels.map((panel, i) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              key={panel.label}
              transition={{ delay: i * 0.12, duration: 0.75, ease: EASE }}
              viewport={{ margin: '-60px', once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <StatPanel {...panel} />
            </motion.div>
          ))}
        </div>

        {/* ── Milestones — Illuminated Manuscript ───────────────────── */}
        <div style={{ marginBottom: '4rem' }}>
          {/* Title with vine flourishes, scale-in on reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '2.5rem',
            }}
            transition={{ duration: 0.75, ease: EASE }}
            viewport={{ margin: '-60px', once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <TitleFlourish />
            <h2
              style={{
                color: BLUSH,
                fontFamily: SCRIPT,
                fontSize: '2.2rem',
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              Milestones
            </h2>
            <TitleFlourish flip />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
            {/* ── Left column: Achieved ("Sealed in Time") ── */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                style={{
                  color: BLUSH,
                  fontFamily: SANS,
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}
                transition={{ duration: 0.55, ease: EASE }}
                viewport={{ margin: '-60px', once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Milestones Reached
              </motion.p>

              <div
                style={{
                  borderLeft: '1px solid rgba(154,59,81,0.4)',
                  maxHeight: '280px',
                  overflowY: 'auto',
                  paddingLeft: '1.25rem',
                }}
              >
                {milestoneData.achieved.length === 0 && (
                  <p
                    style={{
                      color: MUTED,
                      fontFamily: SERIF,
                      fontSize: '0.9rem',
                      fontStyle: 'italic',
                    }}
                  >
                    Your journey begins…
                  </p>
                )}
                {milestoneData.achieved.map((m, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    key={m.name}
                    style={{ alignItems: 'center', display: 'flex', gap: '0.5rem', lineHeight: 2 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
                    viewport={{ margin: '-60px', once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <HeraldSeal />
                    <span style={{ color: BLUSH, fontFamily: SERIF, fontSize: '0.9rem' }}>{m.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Right column: Upcoming ("On the Horizon") ── */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                style={{
                  color: TEAL,
                  fontFamily: SANS,
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}
                transition={{ duration: 0.55, ease: EASE }}
                viewport={{ margin: '-60px', once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                On the Horizon
              </motion.p>

              {milestoneData.next && (
                <>
                  {/* "Next Milestone" sub-label — exact string required by tests */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    style={{
                      color: MUTED,
                      fontFamily: SANS,
                      fontSize: '9px',
                      letterSpacing: '0.25em',
                      marginBottom: '0.25rem',
                      textTransform: 'uppercase',
                    }}
                    transition={{ duration: 0.5, ease: EASE }}
                    viewport={{ margin: '-60px', once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    Next Milestone
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    style={{
                      color: BLUSH,
                      fontFamily: SERIF,
                      fontSize: '1.3rem',
                      marginBottom: '0.25rem',
                    }}
                    transition={{ delay: 0.06, duration: 0.5, ease: EASE }}
                    viewport={{ margin: '-60px', once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    {milestoneData.next.name}
                  </motion.p>
                  {/* Countdown — "{remainingText} to go!" format required by tests */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    style={{
                      color: BLUSH,
                      fontFamily: SANS,
                      fontSize: '0.8rem',
                      marginBottom: '1rem',
                      opacity: 0.7,
                    }}
                    transition={{ delay: 0.12, duration: 0.5, ease: EASE }}
                    viewport={{ margin: '-60px', once: true }}
                    whileInView={{ opacity: 0.7, y: 0 }}
                  >
                    {milestoneData.next.remainingText} to go!
                  </motion.p>
                  <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0, scaleX: 0 }}
                    style={{
                      borderTop: '1px solid rgba(154,59,81,0.3)',
                      marginBottom: '1rem',
                      transformOrigin: 'left center',
                    }}
                    transition={{ delay: 0.18, duration: 0.45, ease: EASE }}
                    viewport={{ margin: '-60px', once: true }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                  />
                </>
              )}

              {/* "Coming Up" label — exact string required by tests */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                style={{
                  color: MUTED,
                  fontFamily: SANS,
                  fontSize: '9px',
                  letterSpacing: '0.25em',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}
                transition={{ duration: 0.5, ease: EASE }}
                viewport={{ margin: '-60px', once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Coming Up
              </motion.p>

              {milestoneData.upcoming.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 8 }}
                  key={m.name}
                  style={{ alignItems: 'center', display: 'flex', gap: '0.5rem', lineHeight: 2 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
                  viewport={{ margin: '-60px', once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <HorizonIcon />
                  <span
                    style={{
                      color: 'rgba(232,200,212,0.65)',
                      fontFamily: SANS,
                      fontSize: '0.85rem',
                    }}
                  >
                    {m.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Recipe Card — Formal Engraved Invitation ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          style={{ margin: '0 auto', maxWidth: '580px' }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ margin: '-60px', once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div
            style={{
              backgroundColor: CARD_BG,
              borderRadius: '4px',
              boxShadow: '0 8px 64px rgba(0,0,0,0.6)',
              padding: '2rem 2.5rem 2.5rem',
              position: 'relative',
            }}
          >
            {/* Botanical SVG border overlay — hero decoration */}
            <BotanicalBorder />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Title — exact string required by tests */}
              <h3
                style={{
                  color: BLUSH,
                  fontFamily: SCRIPT,
                  fontSize: '2.2rem',
                  fontWeight: 400,
                  paddingTop: '0.5rem',
                  textAlign: 'center',
                }}
              >
                Our Perfect Recipe for Love
              </h3>

              <hr
                style={{
                  borderColor: 'rgba(232,200,212,0.2)',
                  borderWidth: '1px 0 0',
                  margin: '1rem 0 0',
                }}
              />

              <p
                style={{
                  color: MUTED,
                  fontFamily: SANS,
                  fontSize: '8px',
                  letterSpacing: '0.4em',
                  margin: '1.25rem 0 0.75rem',
                  textTransform: 'uppercase',
                }}
              >
                Ingredients
              </p>

              {RECIPE_INGREDIENTS.map((ingredient) => (
                <div
                  key={ingredient}
                  style={{ alignItems: 'flex-start', display: 'flex', gap: '0.6rem', lineHeight: 2 }}
                >
                  <DiamondBullet />
                  <span
                    style={{
                      color: 'rgba(232,200,212,0.85)',
                      fontFamily: SERIF,
                      fontSize: '0.9rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {ingredient}
                  </span>
                </div>
              ))}

              <p
                style={{
                  color: MUTED,
                  fontFamily: SANS,
                  fontSize: '8px',
                  letterSpacing: '0.4em',
                  marginBottom: '0.75rem',
                  marginTop: '1.25rem',
                  textTransform: 'uppercase',
                }}
              >
                Method
              </p>

              {RECIPE_INSTRUCTIONS.map((instruction, i) => (
                <p
                  key={i}
                  style={{
                    color: 'rgba(232,200,212,0.75)',
                    fontFamily: SERIF,
                    fontSize: '0.88rem',
                    lineHeight: 1.85,
                    marginBottom: '0.6rem',
                  }}
                >
                  {instruction}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
