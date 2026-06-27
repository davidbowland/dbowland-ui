import { motion } from 'framer-motion'
import React from 'react'

import { type MarriageStatsData, type MilestoneData, type ProcessedMilestone } from './milestone-utils'
import { RECIPE_INGREDIENTS, RECIPE_INSTRUCTIONS } from './recipe-content'

// ─── Typography & Color Constants ────────────────────────────────────────────

const SERIF = "'Cormorant Garamond', 'Georgia', serif"
const SCRIPT = "'Pinyon Script', cursive"
const SANS = "'Outfit', sans-serif"

const NAVY = '#2c3461'
const BERRY = '#9a3b51'
const TEAL = '#28798b'
const FOREST = '#3d6a48'
const CREAM = '#F0ECD8'
const BLUSH = '#e8c8d4'
const MUTED = 'rgba(240,236,228,0.45)'

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.32, 0.72, 0, 1] as const },
  },
}

const coinVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] as const },
  },
}

const coinStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

// ─── Sub-components ──────────────────────────────────────────────────────────

/**
 * Multi-petal rose cluster for reuse across arch decorations.
 * Centered at the element's origin — apply via SVG <g transform>.
 */
const RoseCluster = ({
  petalLen = 7,
  petalRx = 3.5,
  petals = 8,
  opacity = 0.9,
  color = BERRY,
}: {
  petalLen?: number
  petalRx?: number
  petals?: number
  opacity?: number
  color?: string
}): React.JSX.Element => (
  <>
    {Array.from({ length: petals }, (_, i) => (
      <ellipse
        cx="0"
        cy={-petalLen}
        fill={color}
        fillOpacity={opacity}
        key={i}
        rx={petalRx}
        ry={petalLen}
        transform={`rotate(${(i * 360) / petals})`}
      />
    ))}
    <circle cx="0" cy="0" fill={color} r={petalRx * 0.9} />
    <circle cx="0" cy="0" fill={color === BERRY ? '#c05878' : color} fillOpacity="0.65" r={petalRx * 0.42} />
  </>
)

/**
 * Wedding Arch SVG — two sweeping pillars converging at a pointed keystone,
 * with a multi-rose cluster at the crown and trailing vines + rose buds along
 * both sides. Purely decorative; sits above the stats block.
 */
const WeddingArch = (): React.JSX.Element => (
  <motion.div
    aria-hidden="true"
    initial={{ opacity: 0 }}
    style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'none', marginBottom: '-0.5rem' }}
    transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
    viewport={{ once: true, margin: '-60px' }}
    whileInView={{ opacity: 1 }}
  >
    <svg
      style={{ width: '100%', maxWidth: '300px', overflow: 'visible' }}
      viewBox="0 0 340 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Left arch pillar ── */}
      <path
        d="M 58,220 C 58,175 62,140 72,108 C 82,78 105,52 170,18"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      {/* Secondary inner stroke for depth */}
      <path
        d="M 68,220 C 68,178 71,145 80,114 C 89,86 110,61 170,28"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.22"
        strokeWidth="1"
      />

      {/* ── Right arch pillar ── */}
      <path
        d="M 282,220 C 282,175 278,140 268,108 C 258,78 235,52 170,18"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      {/* Secondary inner stroke */}
      <path
        d="M 272,220 C 272,178 269,145 260,114 C 251,86 230,61 170,28"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.22"
        strokeWidth="1"
      />

      {/* ── Keystone rose cluster ── */}
      <g transform="translate(170, 14)">
        {/* Main central rose */}
        <RoseCluster petalLen={8} petalRx={4.5} petals={9} />
        {/* Left flanking bud */}
        <g transform="translate(-20, 13)">
          <RoseCluster opacity={0.7} petalLen={4} petalRx={2.5} petals={6} />
        </g>
        {/* Right flanking bud */}
        <g transform="translate(20, 13)">
          <RoseCluster opacity={0.7} petalLen={4} petalRx={2.5} petals={6} />
        </g>
        {/* Far flanking leaves */}
        <ellipse cx="-30" cy="9" fill={BERRY} fillOpacity="0.28" rx="4" ry="9" transform="rotate(-43 -30 9)" />
        <ellipse cx="30" cy="9" fill={BERRY} fillOpacity="0.28" rx="4" ry="9" transform="rotate(43 30 9)" />
        {/* Tiny accent dots */}
        <circle cx="-38" cy="6" fill={BERRY} fillOpacity="0.18" r="2" />
        <circle cx="38" cy="6" fill={BERRY} fillOpacity="0.18" r="2" />
      </g>

      {/* ── Left vine tendrils ── */}
      <path
        d="M 60,185 C 46,180 39,165 42,150"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <path
        d="M 63,152 C 50,146 44,132 47,118"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.42"
        strokeWidth="0.9"
      />
      <path
        d="M 68,120 C 55,114 50,100 53,86"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.32"
        strokeWidth="0.8"
      />
      {/* Spiral accent tendrils */}
      <path
        d="M 61,168 C 52,162 50,155 55,151"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.3"
        strokeWidth="0.7"
      />
      <path
        d="M 65,136 C 56,130 54,123 59,119"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.25"
        strokeWidth="0.7"
      />
      {/* Left leaves */}
      <ellipse cx="40" cy="158" fill={BERRY} fillOpacity="0.28" rx="5" ry="11" transform="rotate(-42 40 158)" />
      <ellipse cx="44" cy="126" fill={BERRY} fillOpacity="0.22" rx="4.5" ry="9" transform="rotate(-32 44 126)" />
      <ellipse cx="50" cy="95" fill={BERRY} fillOpacity="0.18" rx="4" ry="8" transform="rotate(-24 50 95)" />
      {/* Tiny accent leaf off vine */}
      <ellipse cx="36" cy="172" fill={BERRY} fillOpacity="0.18" rx="3" ry="6.5" transform="rotate(22 36 172)" />
      {/* Left mid-pillar rose bud */}
      <g transform="translate(57, 202)">
        <RoseCluster opacity={0.62} petalLen={4.5} petalRx={2.5} petals={6} />
      </g>
      {/* Left upper accent bud */}
      <g transform="translate(80, 152)">
        <RoseCluster opacity={0.4} petalLen={3} petalRx={1.8} petals={6} />
      </g>

      {/* ── Right vine tendrils ── */}
      <path
        d="M 280,185 C 294,180 301,165 298,150"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <path
        d="M 277,152 C 290,146 296,132 293,118"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.42"
        strokeWidth="0.9"
      />
      <path
        d="M 272,120 C 285,114 290,100 287,86"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.32"
        strokeWidth="0.8"
      />
      {/* Spiral accent tendrils */}
      <path
        d="M 279,168 C 288,162 290,155 285,151"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.3"
        strokeWidth="0.7"
      />
      <path
        d="M 275,136 C 284,130 286,123 281,119"
        fill="none"
        stroke={BERRY}
        strokeLinecap="round"
        strokeOpacity="0.25"
        strokeWidth="0.7"
      />
      {/* Right leaves */}
      <ellipse cx="300" cy="158" fill={BERRY} fillOpacity="0.28" rx="5" ry="11" transform="rotate(42 300 158)" />
      <ellipse cx="296" cy="126" fill={BERRY} fillOpacity="0.22" rx="4.5" ry="9" transform="rotate(32 296 126)" />
      <ellipse cx="290" cy="95" fill={BERRY} fillOpacity="0.18" rx="4" ry="8" transform="rotate(24 290 95)" />
      {/* Tiny accent leaf */}
      <ellipse cx="304" cy="172" fill={BERRY} fillOpacity="0.18" rx="3" ry="6.5" transform="rotate(-22 304 172)" />
      {/* Right mid-pillar rose bud */}
      <g transform="translate(283, 202)">
        <RoseCluster opacity={0.62} petalLen={4.5} petalRx={2.5} petals={6} />
      </g>
      {/* Right upper accent bud */}
      <g transform="translate(260, 152)">
        <RoseCluster opacity={0.4} petalLen={3} petalRx={1.8} petals={6} />
      </g>

      {/* ── Base decorative finials ── */}
      <circle cx="58" cy="218" fill={BERRY} fillOpacity="0.38" r="3" />
      <circle cx="282" cy="218" fill={BERRY} fillOpacity="0.38" r="3" />
      <circle cx="58" cy="218" fill="none" r="5.5" stroke={BERRY} strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="282" cy="218" fill="none" r="5.5" stroke={BERRY} strokeOpacity="0.2" strokeWidth="1" />
    </svg>
  </motion.div>
)

/**
 * Circular SVG laurel-wreath badge displaying the years count.
 * Teal leaves encircle a cream numeral. Shown only when years >= 1.
 */
const YearsBadge = ({ years }: { years: number }): React.JSX.Element => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}
    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
    viewport={{ once: true, margin: '-60px' }}
    whileInView={{ opacity: 1, scale: 1 }}
  >
    <svg height="110" viewBox="0 0 110 110" width="110" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="55" cy="55" fill="none" r="50" stroke={TEAL} strokeOpacity="0.42" strokeWidth="1.5" />
      {/* Inner ring */}
      <circle cx="55" cy="55" fill="none" r="43" stroke={TEAL} strokeOpacity="0.26" strokeWidth="1" />
      {/* 18 laurel leaves around perimeter */}
      {Array.from({ length: 18 }, (_, i) => {
        const angle = (i * 360) / 18 - 90
        const rad = (angle * Math.PI) / 180
        const x = 55 + 47 * Math.cos(rad)
        const y = 55 + 47 * Math.sin(rad)
        return (
          <ellipse
            cx={x}
            cy={y}
            fill={TEAL}
            fillOpacity={i % 2 === 0 ? 0.55 : 0.42}
            key={i}
            rx="3"
            ry="6.5"
            transform={`rotate(${angle + 90} ${x} ${y})`}
          />
        )
      })}
      {/* Year number */}
      <text
        dominantBaseline="middle"
        fill={CREAM}
        fontFamily={SERIF}
        fontSize="30"
        fontWeight="400"
        textAnchor="middle"
        x="55"
        y="50"
      >
        {years}
      </text>
    </svg>
    <p
      style={{
        fontFamily: SANS,
        fontSize: '10px',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: MUTED,
        margin: 0,
      }}
    >
      Years of Bliss
    </p>
  </motion.div>
)

/**
 * Hours / Minutes / Seconds as a single horizontal strip — NOT a card grid.
 * Three columns separated by thin vertical rules.
 */
const StatsTicker = ({
  hours,
  minutes,
  seconds,
}: {
  hours: number
  minutes: number
  seconds: number
}): React.JSX.Element => {
  const items = [
    { value: hours.toLocaleString(), label: 'Hours Together' },
    { value: minutes.toLocaleString(), label: 'Minutes of Love' },
    { value: seconds.toLocaleString(), label: 'Seconds of Joy' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'stretch',
      }}
      transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          {i > 0 && (
            <div
              aria-hidden="true"
              style={{
                width: '1px',
                background: 'rgba(240,236,228,0.15)',
                margin: '0.25rem 1rem',
                flexShrink: 0,
              }}
            />
          )}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <p
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: CREAM,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              {item.value}
            </p>
            <p
              style={{
                fontFamily: SANS,
                fontSize: '9px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(240,236,228,0.4)',
                margin: '0.3rem 0 0',
              }}
            >
              {item.label}
            </p>
          </div>
        </React.Fragment>
      ))}
    </motion.div>
  )
}

/**
 * Thin decorative SVG divider with central diamond motif.
 */
const ThinDivider = (): React.JSX.Element => (
  <div aria-hidden="true" style={{ textAlign: 'center', margin: '2rem auto' }}>
    <svg height="20" viewBox="0 0 240 20" width="240" xmlns="http://www.w3.org/2000/svg">
      <line stroke={BERRY} strokeOpacity="0.28" strokeWidth="1" x1="0" x2="96" y1="10" y2="10" />
      <polygon fill={BERRY} fillOpacity="0.35" points="112,4 120,10 112,16 104,10" />
      <line stroke={BERRY} strokeOpacity="0.28" strokeWidth="1" x1="144" x2="240" y1="10" y2="10" />
      <circle cx="96" cy="10" fill={BERRY} fillOpacity="0.28" r="2" />
      <circle cx="144" cy="10" fill={BERRY} fillOpacity="0.28" r="2" />
    </svg>
  </div>
)

/**
 * Large next-milestone coin — Berry ring with slow pulse animation.
 * The inner text shows the milestone name and countdown.
 */
const NextMilestoneCoin = ({ milestone }: { milestone: ProcessedMilestone }): React.JSX.Element => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      style={{
        fontFamily: SANS,
        fontSize: '9px',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: BLUSH,
        opacity: 0.7,
        margin: 0,
      }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      whileInView={{ opacity: 0.7, y: 0 }}
    >
      Next Milestone
    </motion.p>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          border: `2px solid ${BERRY}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(154,59,81,0.07)',
          position: 'relative',
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Inner decorative ring */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '8px',
            borderRadius: '50%',
            border: '1px solid rgba(154,59,81,0.3)',
            pointerEvents: 'none',
          }}
        />
        <p
          style={{
            fontFamily: SERIF,
            fontSize: '1.3rem',
            color: CREAM,
            textAlign: 'center',
            margin: 0,
            padding: '0 1.25rem',
            lineHeight: 1.3,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {milestone.name}
        </p>
        <p
          style={{
            fontFamily: SANS,
            fontSize: '0.8rem',
            color: BLUSH,
            margin: '0.45rem 0 0',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {milestone.remainingText} to go!
        </p>
      </motion.div>
    </motion.div>
  </div>
)

/**
 * Achieved milestone — filled 72×72 forest-green circle.
 * Width === height guaranteed to ensure perfect circle (no pills).
 */
const AchievedCoin = ({ milestone }: { milestone: ProcessedMilestone }): React.JSX.Element => (
  <motion.div
    style={{
      width: '72px',
      height: '72px',
      borderRadius: '50%',
      background: FOREST,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
    variants={coinVariant}
  >
    <p
      style={{
        fontFamily: SANS,
        fontSize: '9px',
        color: CREAM,
        textAlign: 'center',
        lineHeight: 1.25,
        margin: 0,
        padding: '0 7px',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      }}
    >
      {milestone.name}
    </p>
  </motion.div>
)

/**
 * Upcoming milestone — ghost-outline 72×72 circle.
 * Width === height guaranteed to ensure perfect circle (no pills).
 */
const UpcomingCoin = ({ milestone }: { milestone: ProcessedMilestone }): React.JSX.Element => (
  <motion.div
    style={{
      width: '72px',
      height: '72px',
      borderRadius: '50%',
      background: 'transparent',
      border: '1.5px solid rgba(154,59,81,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
    variants={coinVariant}
  >
    <p
      style={{
        fontFamily: SANS,
        fontSize: '9px',
        color: 'rgba(232,200,212,0.65)',
        textAlign: 'center',
        lineHeight: 1.25,
        margin: 0,
        padding: '0 7px',
      }}
    >
      {milestone.name}
    </p>
  </motion.div>
)

/**
 * Small 4-petal flower bullet for recipe ingredient rows.
 */
const FlowerBullet = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    height="10"
    style={{ flexShrink: 0, marginTop: '5px' }}
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 90, 180, 270].map((deg) => (
      <ellipse cx="5" cy="2.5" fill={BERRY} key={deg} rx="1.5" ry="2.5" transform={`rotate(${deg} 5 5)`} />
    ))}
    <circle cx="5" cy="5" fill={BERRY} r="1.5" />
  </svg>
)

/**
 * Embossed wax seal — Berry disc with specular highlight, shadow crescent,
 * radial emboss lines, and "D&T" initials in italic Cormorant Garamond.
 */
const WaxSeal = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    height="56"
    style={{
      filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.6)) drop-shadow(0 1px 3px rgba(0,0,0,0.4))',
      display: 'block',
    }}
    viewBox="0 0 56 56"
    width="56"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base wax disc */}
    <circle cx="28" cy="28" fill={BERRY} r="27" />
    {/* Embossed inner rings */}
    <circle cx="28" cy="28" fill="none" r="23.5" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
    <circle cx="28" cy="28" fill="none" r="21" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
    {/* 8 radial emboss spokes */}
    {Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 360) / 8
      const rad = (angle * Math.PI) / 180
      return (
        <line
          key={i}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.6"
          x1={28 + 13 * Math.cos(rad)}
          x2={28 + 22 * Math.cos(rad)}
          y1={28 + 13 * Math.sin(rad)}
          y2={28 + 22 * Math.sin(rad)}
        />
      )
    })}
    {/* Specular highlight — characteristic wax sheen */}
    <ellipse cx="21" cy="17" fill="rgba(255,255,255,0.18)" rx="8" ry="5" transform="rotate(-35 21 17)" />
    {/* Shadow crescent — 3D depth illusion */}
    <ellipse cx="32" cy="40" fill="rgba(0,0,0,0.14)" rx="9" ry="4" transform="rotate(20 32 40)" />
    {/* Initials */}
    <text
      dominantBaseline="middle"
      fill={CREAM}
      fontFamily={SERIF}
      fontSize="13"
      fontStyle="italic"
      fontWeight="400"
      textAnchor="middle"
      x="28"
      y="29"
    >
      D&amp;T
    </text>
  </svg>
)

/**
 * Parchment recipe card — aged paper with noise texture, folded corner,
 * and wax seal floating above the top edge.
 */
const RecipeCard = (): React.JSX.Element => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    style={{ maxWidth: '560px', margin: '0 auto', position: 'relative', paddingTop: '28px' }}
    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
    viewport={{ once: true, margin: '-60px' }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {/* Wax seal — above the card, overlapping the top edge; outside overflow:hidden */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    >
      <WaxSeal />
    </div>

    {/* Parchment card body */}
    <div
      style={{
        position: 'relative',
        background: '#f5edd8',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
        backgroundSize: '200px 200px',
        border: '1px solid rgba(154,59,81,0.22)',
        borderRadius: '10px',
        boxShadow: '4px 8px 40px rgba(0,0,0,0.4)',
        overflow: 'hidden',
      }}
    >
      {/* Dog-eared top-right corner — clipped by overflow:hidden */}
      <svg
        aria-hidden="true"
        height="44"
        style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none' }}
        viewBox="0 0 44 44"
        width="44"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 44,0 L 0,0 L 44,44 Z" fill="rgba(154,59,81,0.12)" />
        <path d="M 0,0 L 44,44" fill="none" stroke="rgba(154,59,81,0.25)" strokeWidth="0.6" />
      </svg>

      {/* Card body text */}
      <div style={{ padding: '1.25rem 1.75rem 2rem' }}>
        <h3
          style={{
            fontFamily: SCRIPT,
            fontSize: '2rem',
            color: BERRY,
            textAlign: 'center',
            fontWeight: 400,
            margin: '0 0 1rem',
            lineHeight: 1.2,
          }}
        >
          Our Perfect Recipe for Love
        </h3>

        {/* Thin rule below title */}
        <div style={{ height: '1px', background: 'rgba(154,59,81,0.3)', marginBottom: '0.75rem' }} />

        {/* Ingredients */}
        <p
          style={{
            fontFamily: SANS,
            fontSize: '9px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(154,59,81,0.7)',
            margin: '1rem 0 0.5rem',
          }}
        >
          Ingredients
        </p>

        {RECIPE_INGREDIENTS.map((ingredient, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              lineHeight: 1.9,
              marginBottom: '0.05rem',
            }}
          >
            <FlowerBullet />
            <p style={{ fontFamily: SERIF, fontSize: '0.95rem', color: NAVY, fontStyle: 'italic', margin: 0 }}>
              {ingredient}
            </p>
          </div>
        ))}

        {/* Method */}
        <p
          style={{
            fontFamily: SANS,
            fontSize: '9px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(154,59,81,0.7)',
            margin: '1.25rem 0 0.5rem',
          }}
        >
          Method
        </p>

        {RECIPE_INSTRUCTIONS.map((instruction, i) => (
          <p
            key={i}
            style={{
              fontFamily: SERIF,
              fontSize: '0.9rem',
              color: NAVY,
              lineHeight: 1.75,
              margin: '0 0 0.5rem',
            }}
          >
            {instruction}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
)

// ─── Main Section Export ──────────────────────────────────────────────────────

export const ChampagneSection = ({
  stats,
  milestoneData,
}: {
  stats: MarriageStatsData
  milestoneData: MilestoneData
}): React.JSX.Element => (
  <section className="py-20 px-5 md:px-10" style={{ backgroundColor: NAVY, width: '100%' }}>
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      {/* ── Stats Block ─────────────────────────────────────────── */}
      <motion.div
        initial={fadeUp.hidden}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        transition={fadeUp.visible.transition}
        viewport={{ once: true, margin: '-60px' }}
        whileInView={fadeUp.visible}
      >
        {/* Wedding arch — decorative crown above the stats */}
        <WeddingArch />

        {/* Days Married + optional Years badge */}
        <div style={{ position: 'relative', textAlign: 'center', marginTop: '1rem' }}>
          {/* Years badge — floats to the right, absolutely positioned */}
          {stats.years >= 1 && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '-0.5rem',
              }}
            >
              <YearsBadge years={stats.years} />
            </div>
          )}

          {/* Large days number */}
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(4rem, 11vw, 8rem)',
              color: CREAM,
              margin: 0,
              lineHeight: 1,
              letterSpacing: '-0.01em',
            }}
          >
            {stats.days.toLocaleString()}
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: MUTED,
              margin: '0.5rem 0 2rem',
            }}
          >
            Days Married
          </p>
        </div>

        {/* Hours / Minutes / Seconds strip */}
        <StatsTicker hours={stats.hours} minutes={stats.minutes} seconds={stats.seconds} />
      </motion.div>

      {/* ── Milestone Section ────────────────────────────────────── */}
      <div style={{ marginBottom: '3.5rem' }}>
        {/* Section title with flanking diamonds */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
          transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg aria-hidden="true" height="8" viewBox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg">
              <polygon fill={BERRY} fillOpacity="0.45" points="4,0 8,4 4,8 0,4" />
            </svg>
            <p
              style={{
                fontFamily: SANS,
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(240,236,228,0.4)',
                margin: 0,
              }}
            >
              Milestones
            </p>
            <svg aria-hidden="true" height="8" viewBox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg">
              <polygon fill={BERRY} fillOpacity="0.45" points="4,0 8,4 4,8 0,4" />
            </svg>
          </div>
        </motion.div>

        {/* Next milestone coin */}
        {milestoneData.next && (
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <NextMilestoneCoin milestone={milestoneData.next} />
          </div>
        )}

        {/* Achieved milestones */}
        {milestoneData.achieved.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              style={{
                fontFamily: SANS,
                fontSize: '9px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: BLUSH,
                opacity: 0.6,
                textAlign: 'center',
                margin: '0 0 1rem',
              }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              whileInView={{ opacity: 0.6, y: 0 }}
            >
              Milestones Reached
            </motion.p>
            <motion.div
              initial="hidden"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}
              variants={coinStagger}
              viewport={{ once: true, margin: '-60px' }}
              whileInView="visible"
            >
              {milestoneData.achieved.map((m) => (
                <AchievedCoin key={m.name} milestone={m} />
              ))}
            </motion.div>
          </div>
        )}

        {/* Upcoming milestones */}
        {milestoneData.upcoming.length > 0 && (
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              style={{
                fontFamily: SANS,
                fontSize: '9px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: BLUSH,
                opacity: 0.6,
                textAlign: 'center',
                margin: '0 0 1rem',
              }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              whileInView={{ opacity: 0.6, y: 0 }}
            >
              Coming Up
            </motion.p>
            <motion.div
              initial="hidden"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}
              variants={coinStagger}
              viewport={{ once: true, margin: '-60px' }}
              whileInView="visible"
            >
              {milestoneData.upcoming.map((m) => (
                <UpcomingCoin key={m.name} milestone={m} />
              ))}
            </motion.div>
          </div>
        )}
      </div>

      <ThinDivider />

      {/* ── Recipe Card ──────────────────────────────────────────── */}
      <RecipeCard />
    </div>
  </section>
)
