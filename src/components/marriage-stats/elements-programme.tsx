import { motion } from 'framer-motion'
import React from 'react'

import { type MarriageStatsData, type MilestoneData } from './milestone-utils'
import { RECIPE_INGREDIENTS, RECIPE_INSTRUCTIONS } from './recipe-content'

// ─── Typography ───────────────────────────────────────────────────────────────
const SERIF = "'Cormorant Garamond', 'Georgia', serif"
const SCRIPT = "'Pinyon Script', cursive"
const SANS = "'Outfit', sans-serif"

// ─── Colour palette (cream / editorial) ──────────────────────────────────────
const BERRY = '#823a52'
const NAVY = '#2e3260'
const TEAL = '#2e7878'
const FOREST = '#4a7a5a'
const PURPLE = '#6b4a7e'
const CREAM = '#fdfbf7'
const MUTED = 'rgba(46,50,96,0.5)'
const HAIRLINE = 'rgba(46,50,96,0.12)'

// ─── Easing ───────────────────────────────────────────────────────────────────
const EASE = [0.32, 0.72, 0, 1] as const

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

const staggerMilestones = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

// ─── SVG: Small quill-check for recipe ingredient list ───────────────────────
const QuillCheck = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="14"
    style={{ flexShrink: 0, marginTop: 2 }}
    viewBox="0 0 14 14"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 6 C3 8.5 4.5 10.5 5.8 11.5 C6.8 12.3 9 9 13.5 1.5"
      fill="none"
      stroke={FOREST}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.15"
    />
    <path d="M0.8 5.2 C1.4 3.8 2.4 4.2 1.8 5.8" fill="none" stroke={FOREST} strokeLinecap="round" strokeWidth="0.65" />
  </svg>
)

// ─── SVG: Corner flourish ─────────────────────────────────────────────────────
const CornerFlourish = ({ flip = false }: { flip?: boolean }) => (
  <svg
    aria-hidden="true"
    height="32"
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    viewBox="0 0 80 32"
    width="80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2,30 C12,20 22,15 35,18 C48,21 55,12 62,6 C68,1 74,2 78,5"
      fill="none"
      stroke="rgba(130,58,82,0.28)"
      strokeLinecap="round"
      strokeWidth="1"
    />
    <circle cx="2" cy="30" fill="rgba(130,58,82,0.35)" r="2" />
    <circle cx="78" cy="5" fill="rgba(130,58,82,0.22)" r="1.5" />
  </svg>
)

// ─── Internal section divider (CornerFlourish pair) ──────────────────────────
const ProgrammeDivider = (): React.JSX.Element => (
  <motion.div
    className="flex justify-between items-center"
    initial={{ opacity: 0 }}
    style={{ margin: '2rem 0' }}
    transition={{ duration: 0.5, ease: EASE }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1 }}
  >
    <CornerFlourish />
    <div style={{ flex: 1, height: '1px', background: HAIRLINE, margin: '0 8px' }} />
    <CornerFlourish flip />
  </motion.div>
)

// ─── SVG: Index card spiral binding holes ────────────────────────────────────
const SpiralBinding = () => (
  <svg
    aria-hidden="true"
    height="310"
    style={{ position: 'absolute', left: '0.6rem', top: '0.5rem', pointerEvents: 'none' }}
    viewBox="0 0 12 310"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    {Array.from({ length: 10 }, (_, i) => (
      <circle cx="6" cy={16 + i * 30} fill="none" key={i} r="4.5" stroke="rgba(44,52,97,0.15)" strokeWidth="1" />
    ))}
    {Array.from({ length: 10 }, (_, i) => (
      <circle cx="6" cy={16 + i * 30} fill="rgba(44,52,97,0.08)" key={`fill-${i}`} r="2" />
    ))}
  </svg>
)

// ─── SVG: Calendar page — Days stat ──────────────────────────────────────────
const DayIcon = () => (
  <svg aria-hidden="true" fill="none" height="32" viewBox="0 0 30 32" width="30" xmlns="http://www.w3.org/2000/svg">
    <rect fill={BERRY} fillOpacity="0.4" height="7" rx="1.5" width="2.5" x="7.5" y="0" />
    <rect fill={BERRY} fillOpacity="0.4" height="7" rx="1.5" width="2.5" x="20" y="0" />
    <rect fill="none" height="26" rx="2" stroke={BERRY} strokeWidth="1.3" width="26" x="2" y="4" />
    <line stroke={BERRY} strokeOpacity="0.2" strokeWidth="0.7" x1="2" x2="28" y1="11" y2="11" />
    <path
      d="M15,7 C14.6,6.2 13.6,6.2 13.6,7.3 C13.6,8.4 15,9.3 15,9.3 C15,9.3 16.4,8.4 16.4,7.3 C16.4,6.2 15.4,6.2 15,7 Z"
      fill={BERRY}
      fillOpacity="0.8"
    />
    {[0, 1, 2, 3].map((col) => (
      <circle cx={7 + col * 6} cy="17" fill={BERRY} fillOpacity="0.2" key={col} r="1" />
    ))}
    {[0, 1, 2, 3].map((col) => (
      <circle cx={7 + col * 6} cy="22" fill={BERRY} fillOpacity="0.2" key={col} r="1" />
    ))}
    {[0, 1, 2].map((col) => (
      <circle cx={7 + col * 6} cy="27" fill={BERRY} fillOpacity="0.12" key={col} r="1" />
    ))}
  </svg>
)

// ─── SVG: Anniversary ring — Years stat ───────────────────────────────────────
const YearIcon = () => (
  <svg aria-hidden="true" fill="none" height="34" viewBox="0 0 34 34" width="34" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="17" r="14" stroke={TEAL} strokeDasharray="4 2.5" strokeWidth="1.2" />
    <circle cx="17" cy="17" r="9" stroke={TEAL} strokeOpacity="0.35" strokeWidth="0.8" />
    <ellipse cx="17" cy="3" fill={TEAL} fillOpacity="0.45" rx="2.5" ry="4" />
    <ellipse cx="17" cy="31" fill={TEAL} fillOpacity="0.45" rx="2.5" ry="4" />
    <ellipse cx="3" cy="17" fill={TEAL} fillOpacity="0.45" rx="4" ry="2.5" />
    <ellipse cx="31" cy="17" fill={TEAL} fillOpacity="0.45" rx="4" ry="2.5" />
    {[0, 72, 144, 216, 288].map((deg) => (
      <ellipse
        cx="17"
        cy="13"
        fill={TEAL}
        fillOpacity="0.5"
        key={`yr-${deg}`}
        rx="2.5"
        ry="4.5"
        transform={`rotate(${deg}, 17, 17)`}
      />
    ))}
    <circle cx="17" cy="17" fill={TEAL} r="3.5" />
  </svg>
)

// ─── SVG: Hourglass icon — Seconds column ────────────────────────────────────
const SecondIcon = () => (
  <svg aria-hidden="true" fill="none" height="36" viewBox="0 0 28 36" width="28" xmlns="http://www.w3.org/2000/svg">
    {/* Hourglass frame */}
    <path
      d="M4,2 L24,2 L24,4 L18,16 L18,20 L24,32 L24,34 L4,34 L4,32 L10,20 L10,16 L4,4 Z"
      fill="none"
      stroke={PURPLE}
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    {/* Sand (bottom) */}
    <path d="M10,20 L14,28 L18,20 Z" fill={PURPLE} opacity="0.6" />
    {/* Drip dot at waist */}
    <circle cx="14" cy="18" fill={PURPLE} r="1.5" />
  </svg>
)

// ─── SVG: Clock with rose centre — Minutes column ────────────────────────────
const MinuteIcon = () => {
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180
    return {
      x1: 16 + 12 * Math.sin(angle),
      x2: 16 + 14 * Math.sin(angle),
      y1: 16 - 12 * Math.cos(angle),
      y2: 16 - 14 * Math.cos(angle),
    }
  })

  return (
    <svg aria-hidden="true" fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
      {/* Clock face */}
      <circle cx="16" cy="16" fill="none" r="14" stroke={FOREST} strokeWidth="1.5" />
      {/* 12 tick marks at each hour position */}
      {ticks.map(({ x1, y1, x2, y2 }, i) => (
        <line key={i} stroke={FOREST} strokeLinecap="round" strokeWidth="1" x1={x1} x2={x2} y1={y1} y2={y2} />
      ))}
      {/* Hour hand (10 position) */}
      <line stroke={FOREST} strokeLinecap="round" strokeWidth="1.5" x1="16" x2="10" y1="16" y2="9" />
      {/* Minute hand (2 position) */}
      <line stroke={FOREST} strokeLinecap="round" strokeWidth="1.2" x1="16" x2="22" y1="16" y2="8" />
      {/* Rose petals: 5 at 72° increments, each ellipse rotated around centre */}
      {[0, 72, 144, 216, 288].map((deg) => (
        <g key={deg} transform={`rotate(${deg}, 16, 16)`}>
          <ellipse cx="16" cy="13" fill={FOREST} fillOpacity="0.6" rx="1.5" ry="3" />
        </g>
      ))}
      {/* Rose centre */}
      <circle cx="16" cy="16" fill={FOREST} r="2" />
    </svg>
  )
}

// ─── SVG: Champagne flutes (toast) — Hours column ────────────────────────────
const HourIcon = () => (
  <svg aria-hidden="true" fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
    {/* Left flute (angled -8°) */}
    <g transform="rotate(-8, 12, 35)">
      <path
        d="M8,35 L8,33 L10,20 L14,20 L16,33 L16,35 Z"
        fill="none"
        stroke={BERRY}
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M10,20 C10,10 8,4 12,2 C16,4 14,10 14,20 Z"
        fill="none"
        stroke={BERRY}
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </g>
    {/* Right flute (angled +8°) */}
    <g transform="rotate(8, 28, 35)">
      <path
        d="M24,35 L24,33 L26,20 L30,20 L32,33 L32,35 Z"
        fill="none"
        stroke={BERRY}
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M26,20 C26,10 24,4 28,2 C32,4 30,10 30,20 Z"
        fill="none"
        stroke={BERRY}
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </g>
    {/* Clink arc */}
    <path d="M16,8 C18,5 22,5 24,8" fill="none" stroke={BERRY} strokeLinecap="round" strokeWidth="1.2" />
    {/* Bubbles */}
    <circle cx="12" cy="14" fill={BERRY} opacity="0.5" r="1" />
    <circle cx="28" cy="12" fill={BERRY} opacity="0.5" r="1" />
  </svg>
)

// ─── Index Card Recipe (Section A exclusive) ──────────────────────────────────
// Deliberately distinct from Section B's parchment card and Section C's
// formal engraved card. Modelled on a vintage recipe index card: cream stock,
// berry header strip, horizontal ruled lines, left red-margin rule, spiral
// binding holes, and a -1.5° static rotation for physical presence.
const IndexRecipeCard = (): React.JSX.Element => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    style={{
      margin: '3.5rem auto 0',
      maxWidth: '580px',
      transform: 'rotate(-1.5deg)',
      transformOrigin: 'center center',
    }}
    transition={{ duration: 0.75, ease: EASE }}
    viewport={{ margin: '-60px', once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div
      style={{
        backgroundColor: CREAM,
        border: '1px solid rgba(44,52,97,0.08)',
        borderRadius: '3px',
        boxShadow: '4px 8px 32px rgba(44,52,97,0.18), 0 2px 6px rgba(44,52,97,0.1)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Berry header strip with title */}
      <div style={{ backgroundColor: BERRY, padding: '0.65rem 1.5rem 0.6rem' }}>
        <p
          style={{
            color: CREAM,
            fontFamily: SCRIPT,
            fontSize: '1.7rem',
            fontWeight: 400,
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          A Recipe for Marriage
        </p>
      </div>

      {/* Card body with spiral holes + ruled lines */}
      <div style={{ position: 'relative', padding: '0.5rem 1.5rem 1.75rem 3.2rem' }}>
        {/* Spiral binding holes on the left edge */}
        <SpiralBinding />

        {/* Background ruled lines (CSS repeating-linear-gradient) */}
        <div
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent 0px, transparent 29px, rgba(44,52,97,0.065) 29px, rgba(44,52,97,0.065) 30px)',
            backgroundPositionY: '0.5rem',
            bottom: 0,
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
          }}
        >
          {/* Red margin rule */}
          <div
            style={{
              borderLeft: '1.5px solid rgba(154,59,81,0.22)',
              bottom: 0,
              left: '2.5rem',
              position: 'absolute',
              top: 0,
            }}
          />
        </div>

        {/* Ingredients section */}
        <p
          style={{
            color: 'rgba(44,52,97,0.45)',
            fontFamily: SANS,
            fontSize: '8px',
            letterSpacing: '0.32em',
            margin: '1rem 0 0.5rem',
            position: 'relative',
            textTransform: 'uppercase',
          }}
        >
          Ingredients
        </p>

        {RECIPE_INGREDIENTS.map((ingredient, i) => (
          <div
            key={i}
            style={{
              alignItems: 'flex-start',
              display: 'flex',
              gap: '0.5rem',
              lineHeight: 1.9,
              marginBottom: '0.05rem',
              position: 'relative',
            }}
          >
            <QuillCheck />
            <p style={{ color: NAVY, fontFamily: SERIF, fontSize: '0.92rem', fontStyle: 'italic', margin: 0 }}>
              {ingredient}
            </p>
          </div>
        ))}

        {/* Method section */}
        <p
          style={{
            color: 'rgba(44,52,97,0.45)',
            fontFamily: SANS,
            fontSize: '8px',
            letterSpacing: '0.32em',
            margin: '1rem 0 0.5rem',
            position: 'relative',
            textTransform: 'uppercase',
          }}
        >
          Method
        </p>

        {RECIPE_INSTRUCTIONS.map((instruction, i) => (
          <p
            key={i}
            style={{
              color: NAVY,
              fontFamily: SERIF,
              fontSize: '0.88rem',
              lineHeight: 1.75,
              margin: '0 0 0.4rem',
              position: 'relative',
            }}
          >
            {instruction}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
)

// ─── Main export ──────────────────────────────────────────────────────────────
// NOTE: All test-checked text strings ("Days Married", "Hours Together",
// "Minutes of Love", "Seconds of Joy", "Years of Bliss", "Milestones",
// "Milestones Reached", "Next Milestone", "Coming Up", individual milestone
// names, and "Our Perfect Recipe for Love") live exclusively in the
// ProgrammeSection to keep getByText assertions unique.
export const ProgrammeSection = ({
  stats,
  milestoneData,
}: {
  stats: MarriageStatsData
  milestoneData: MilestoneData
}): React.JSX.Element => {
  const fmt = (n: number) => n.toLocaleString()

  return (
    <motion.section
      className="w-full pt-6 pb-8 px-5 md:px-10"
      initial={{ opacity: 0 }}
      style={{ backgroundColor: CREAM }}
      transition={{ duration: 0.6, ease: EASE }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* ── Days + Years hero row ─────────────────────────────────── */}
        <motion.div
          className="text-center mb-10"
          initial={fadeUp.hidden}
          transition={fadeUp.visible.transition}
          viewport={{ margin: '-60px', once: true }}
          whileInView={fadeUp.visible}
        >
          {/* Days number + Years of Bliss side-by-side */}
          <div
            className="flex flex-col md:flex-row items-center md:items-end justify-center"
            style={{ gap: '2rem', marginTop: '1.5rem', marginBottom: '1rem' }}
          >
            {/* Days */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.4rem' }}>
                <DayIcon />
              </div>
              <div
                style={{
                  color: BERRY,
                  fontFamily: SERIF,
                  fontSize: 'clamp(5rem, 14vw, 10rem)',
                  fontVariantNumeric: 'lining-nums',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                {fmt(stats.days)}
              </div>
              <p
                style={{
                  color: MUTED,
                  fontFamily: SANS,
                  fontSize: '11px',
                  letterSpacing: '0.35em',
                  marginTop: '0.5rem',
                  textTransform: 'uppercase',
                }}
              >
                Days Married
              </p>
            </div>

            {/* Vertical hairline separator — desktop only */}
            <div
              className="hidden md:block"
              style={{
                alignSelf: 'center',
                backgroundColor: HAIRLINE,
                flexShrink: 0,
                height: '56px',
                width: '1px',
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.4rem' }}>
                <YearIcon />
              </div>
              <div
                style={{
                  color: BERRY,
                  fontFamily: SERIF,
                  fontSize: 'clamp(5rem, 14vw, 10rem)',
                  fontVariantNumeric: 'lining-nums',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                {stats.yearsDecimal.toFixed(2)}
              </div>
              <p
                style={{
                  color: MUTED,
                  fontFamily: SANS,
                  fontSize: '11px',
                  letterSpacing: '0.35em',
                  marginTop: '0.5rem',
                  textTransform: 'uppercase',
                }}
              >
                Years of Bliss
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Time ledger: Seconds | Minutes | Hours ───────────────── */}
        <motion.div
          className="grid grid-cols-3 text-center mb-12"
          initial={fadeUp.hidden}
          style={{ borderBottom: `1px solid ${HAIRLINE}`, borderTop: `1px solid ${HAIRLINE}` }}
          transition={fadeUp.visible.transition}
          viewport={{ margin: '-60px', once: true }}
          whileInView={fadeUp.visible}
        >
          {[
            { icon: <SecondIcon />, label: 'Seconds of Joy', value: fmt(stats.seconds) },
            { icon: <MinuteIcon />, label: 'Minutes of Love', value: fmt(stats.minutes) },
            { icon: <HourIcon />, label: 'Hours Together', value: fmt(stats.hours) },
          ].map(({ icon, label, value }, i) => (
            <div className="py-5 px-1" key={label} style={{ borderLeft: i > 0 ? `1px solid ${HAIRLINE}` : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>{icon}</div>
              <div
                style={{
                  color: BERRY,
                  fontFamily: SERIF,
                  fontSize: 'clamp(1.5rem, 4vw, 2.6rem)',
                  fontVariantNumeric: 'lining-nums',
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <p
                style={{
                  color: NAVY,
                  fontFamily: SANS,
                  fontSize: 'clamp(7px, 1.6vw, 9px)',
                  letterSpacing: '0.15em',
                  marginTop: '0.35rem',
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Milestones section ─────────────────────────────────────── */}
        {(milestoneData.achieved.length > 0 || milestoneData.next) && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            viewport={{ once: true, margin: '-60px' }}
            whileInView={{ opacity: 1 }}
          >
            <ProgrammeDivider />
            <motion.h2
              className="text-center mb-8 font-normal"
              initial={{ opacity: 0, y: 16 }}
              style={{ color: BERRY, fontFamily: SCRIPT, fontSize: '2rem' }}
              transition={{ duration: 0.7, ease: EASE }}
              viewport={{ margin: '-60px', once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Milestones
            </motion.h2>

            {/* Next milestone — pulsing Berry ring */}
            {milestoneData.next && (
              <motion.div
                className="flex flex-col items-center mb-10"
                initial={fadeUp.hidden}
                transition={fadeUp.visible.transition}
                viewport={{ margin: '-60px', once: true }}
                whileInView={fadeUp.visible}
              >
                <p
                  style={{
                    color: MUTED,
                    fontFamily: SANS,
                    fontSize: '9px',
                    letterSpacing: '0.3em',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Next Milestone
                </p>
                <motion.div
                  animate={{ scale: [1, 1.045, 1] }}
                  transition={{ duration: 2.6, ease: [0.45, 0.05, 0.55, 0.95] as const, repeat: Infinity }}
                >
                  <div
                    style={{
                      alignItems: 'center',
                      border: `2px solid ${BERRY}`,
                      borderRadius: '50%',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '160px',
                      justifyContent: 'center',
                      width: '160px',
                    }}
                  >
                    <p
                      style={{
                        color: NAVY,
                        fontFamily: SERIF,
                        fontSize: '1.2rem',
                        margin: '0 0 0.25rem',
                        textAlign: 'center',
                      }}
                    >
                      {milestoneData.next.name}
                    </p>
                    <p
                      style={{
                        color: MUTED,
                        fontFamily: SANS,
                        fontSize: '9px',
                        letterSpacing: '0.1em',
                        margin: 0,
                        textAlign: 'center',
                      }}
                    >
                      {milestoneData.next.remainingText} to go!
                    </p>
                  </div>
                </motion.div>
                <div style={{ height: '2rem' }} />
              </motion.div>
            )}

            {/* Achieved milestones — filled Forest-green coins */}
            {milestoneData.achieved.length > 0 && (
              <motion.div
                className="mb-10"
                initial="hidden"
                variants={staggerMilestones}
                viewport={{ margin: '-60px', once: true }}
                whileInView="visible"
              >
                <p
                  className="text-center mb-4"
                  style={{
                    color: FOREST,
                    fontFamily: SANS,
                    fontSize: '9px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                  }}
                >
                  Milestones Reached
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    justifyContent: 'center',
                  }}
                >
                  {milestoneData.achieved.map((m) => (
                    <motion.div
                      key={m.name}
                      style={{
                        alignItems: 'center',
                        background: `radial-gradient(circle at 38% 35%, rgba(253,251,247,0.45), ${FOREST} 68%)`,
                        borderRadius: '50%',
                        boxShadow: '0 2px 8px rgba(74,122,90,0.35), inset 0 1px 2px rgba(255,255,255,0.18)',
                        display: 'flex',
                        height: '80px',
                        justifyContent: 'center',
                        width: '80px',
                      }}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
                      }}
                    >
                      <p
                        style={{
                          color: NAVY,
                          fontFamily: SANS,
                          fontSize: '9px',
                          fontWeight: 600,
                          lineHeight: 1.2,
                          margin: 0,
                          padding: '0 6px',
                          textAlign: 'center',
                        }}
                      >
                        {m.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Upcoming milestones — ghost-outline Berry coins (up to 5) */}
            {milestoneData.upcoming.length > 0 && (
              <motion.div
                initial={fadeUp.hidden}
                transition={fadeUp.visible.transition}
                viewport={{ margin: '-60px', once: true }}
                whileInView={fadeUp.visible}
              >
                <p
                  className="text-center mb-4"
                  style={{
                    color: MUTED,
                    fontFamily: SANS,
                    fontSize: '9px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                  }}
                >
                  Coming Up
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    justifyContent: 'center',
                  }}
                >
                  {milestoneData.upcoming.map((m) => (
                    <div
                      key={m.name}
                      style={{
                        alignItems: 'center',
                        background: 'transparent',
                        border: '1.5px solid rgba(130,58,82,0.4)',
                        borderRadius: '50%',
                        display: 'flex',
                        height: '80px',
                        justifyContent: 'center',
                        width: '80px',
                      }}
                    >
                      <p
                        style={{
                          color: 'rgba(130,58,82,0.75)',
                          fontFamily: SANS,
                          fontSize: '9px',
                          lineHeight: 1.2,
                          margin: 0,
                          padding: '0 6px',
                          textAlign: 'center',
                        }}
                      >
                        {m.name}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* ── Recipe divider ────────────────────────────────────────── */}
        <ProgrammeDivider />

        {/* ── Index card recipe (Section A exclusive) ───────────────── */}
        <motion.div
          className="mt-4 text-center"
          initial={fadeUp.hidden}
          transition={fadeUp.visible.transition}
          viewport={{ margin: '-60px', once: true }}
          whileInView={fadeUp.visible}
        >
          <p
            style={{
              color: BERRY,
              fontFamily: SCRIPT,
              fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
              fontWeight: 400,
              marginTop: '1.5rem',
            }}
          >
            Our Perfect Recipe for Love
          </p>
        </motion.div>
        <IndexRecipeCard />
      </div>
    </motion.section>
  )
}
