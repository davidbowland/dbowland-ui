import { Link } from '@heroui/react'
import { motion } from 'framer-motion'
import React from 'react'

const v = (name: string) => `var(--romance-${name})`

const SERIF = "'Cormorant Garamond', 'Georgia', serif"
const SANS = "'Outfit', sans-serif"
const SCRIPT = "'Pinyon Script', cursive"

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.32, 0.72, 0, 1] as const } },
}

const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

// ─── Double-bezel primitive ────────────────────────────────────────────────────
export const BezCard = ({
  children,
  outerColor = v('card-shell'),
  innerColor = v('card-surface'),
  border = `1px solid ${v('hairline')}`,
  innerStyle = {},
  outerClassName = '',
  innerClassName = '',
}: {
  children: React.ReactNode
  outerColor?: string
  innerColor?: string
  border?: string
  innerStyle?: React.CSSProperties
  outerClassName?: string
  innerClassName?: string
}) => (
  <div className={`rounded-[2rem] p-[7px] ${outerClassName}`} style={{ backgroundColor: outerColor, border }}>
    <div
      className={`rounded-[calc(2rem-7px)] h-full ${innerClassName}`}
      style={{ backgroundColor: innerColor, boxShadow: `inset 0 1px 1px ${v('inset')}`, ...innerStyle }}
    >
      {children}
    </div>
  </div>
)

// ─── Floral garland banner ─────────────────────────────────────────────────────
const FloralsGarlandBanner = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    style={{ display: 'block', maxHeight: '200px' }}
    viewBox="0 0 1400 150"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient cx="50%" cy="50%" id="gPurple" r="50%">
        <stop offset="0%" stopColor="#6b4a7e" />
        <stop offset="100%" stopColor="#1e0a2e" />
      </radialGradient>
      <radialGradient cx="50%" cy="50%" id="gRose" r="50%">
        <stop offset="0%" stopColor="#e8c8d4" />
        <stop offset="100%" stopColor="#823a52" />
      </radialGradient>
      <radialGradient cx="50%" cy="50%" id="gTeal" r="50%">
        <stop offset="0%" stopColor="#2e7878" />
        <stop offset="100%" stopColor="#2e4a38" />
      </radialGradient>
      <radialGradient cx="50%" cy="50%" id="gLeaf" r="50%">
        <stop offset="0%" stopColor="#4a7a5a" />
        <stop offset="100%" stopColor="#4a7a5a" />
      </radialGradient>
      <linearGradient id="fadeOut" x1="0" x2="0" y1="0" y2="1">
        <stop offset="80%" stopColor="#fdfbf7" stopOpacity="0" />
        <stop offset="100%" stopColor="#fdfbf7" stopOpacity="1" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect fill="#fdfbf7" height="150" width="1400" x="0" y="0" />

    {/* ─── CLUSTER 1 — x=120, y=35 — PURPLE ─── */}
    {/* Left-fan leaves */}
    <path d="M120,35 C80,43 40,49 15,45 C30,37 75,31 120,35 Z" fill="url(#gLeaf)" opacity="0.82" />
    <path d="M120,35 C85,50 55,63 30,60 C40,50 75,43 120,35 Z" fill="url(#gLeaf)" opacity="0.72" />
    <path d="M120,35 C90,57 65,75 45,73 C55,63 82,53 120,35 Z" fill="url(#gLeaf)" opacity="0.60" />
    {/* Right-fan leaves */}
    <path d="M120,35 C160,43 200,49 225,45 C210,37 165,31 120,35 Z" fill="url(#gLeaf)" opacity="0.82" />
    <path d="M120,35 C155,50 185,63 210,60 C200,50 165,43 120,35 Z" fill="url(#gLeaf)" opacity="0.72" />
    <path d="M120,35 C150,57 175,75 195,73 C185,63 158,53 120,35 Z" fill="url(#gLeaf)" opacity="0.60" />
    {/* Wispy sprigs */}
    <path d="M120,35 C115,60 108,88 112,118" fill="none" opacity="0.45" stroke="#4a7a5a" strokeWidth="1.2" />
    <path d="M120,35 C126,62 131,92 125,122" fill="none" opacity="0.38" stroke="#4a7a5a" strokeWidth="1" />
    {/* Peony — Purple */}
    <g transform="translate(120,35)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse cx="0" cy="-32" fill="url(#gPurple)" key={`p1o-${deg}`} rx="14" ry="32" transform={`rotate(${deg})`} />
      ))}
      {[0, 25, 50, 75, 100, 125, 150].map((deg) => (
        <ellipse cx="0" cy="-18" fill="url(#gPurple)" key={`p1m-${deg}`} rx="9" ry="18" transform={`rotate(${deg})`} />
      ))}
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse cx="0" cy="-8" fill="url(#gPurple)" key={`p1i-${deg}`} rx="5" ry="9" transform={`rotate(${deg})`} />
      ))}
      <circle cx="0" cy="0" fill="#1a1028" r="6" />
    </g>

    {/* ─── CLUSTER 2 — x=380, y=40 — DUSTY ROSE ─── */}
    {/* Left-fan leaves */}
    <path d="M380,40 C340,48 300,54 275,50 C290,42 335,36 380,40 Z" fill="url(#gLeaf)" opacity="0.82" />
    <path d="M380,40 C345,55 315,68 290,65 C300,55 335,48 380,40 Z" fill="url(#gLeaf)" opacity="0.72" />
    <path d="M380,40 C350,62 325,80 305,78 C315,68 342,58 380,40 Z" fill="url(#gLeaf)" opacity="0.60" />
    {/* Right-fan leaves */}
    <path d="M380,40 C420,48 460,54 485,50 C470,42 425,36 380,40 Z" fill="url(#gLeaf)" opacity="0.82" />
    <path d="M380,40 C415,55 445,68 470,65 C460,55 425,48 380,40 Z" fill="url(#gLeaf)" opacity="0.72" />
    <path d="M380,40 C410,62 435,80 455,78 C445,68 418,58 380,40 Z" fill="url(#gLeaf)" opacity="0.60" />
    {/* Wispy sprigs */}
    <path d="M380,40 C375,65 368,93 372,123" fill="none" opacity="0.45" stroke="#4a7a5a" strokeWidth="1.2" />
    <path d="M380,40 C386,67 391,97 385,127" fill="none" opacity="0.38" stroke="#4a7a5a" strokeWidth="1" />
    {/* Peony — Dusty Rose */}
    <g transform="translate(380,40)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse cx="0" cy="-32" fill="url(#gRose)" key={`p2o-${deg}`} rx="14" ry="32" transform={`rotate(${deg})`} />
      ))}
      {[0, 25, 50, 75, 100, 125, 150].map((deg) => (
        <ellipse cx="0" cy="-18" fill="url(#gRose)" key={`p2m-${deg}`} rx="9" ry="18" transform={`rotate(${deg})`} />
      ))}
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse cx="0" cy="-8" fill="url(#gRose)" key={`p2i-${deg}`} rx="5" ry="9" transform={`rotate(${deg})`} />
      ))}
      <circle cx="0" cy="0" fill="#1a1028" r="6" />
    </g>

    {/* ─── CLUSTER 3 — x=700, y=30 — TEAL ─── */}
    {/* Left-fan leaves */}
    <path d="M700,30 C660,38 620,44 595,40 C610,32 655,26 700,30 Z" fill="url(#gLeaf)" opacity="0.82" />
    <path d="M700,30 C665,45 635,58 610,55 C620,45 655,38 700,30 Z" fill="url(#gLeaf)" opacity="0.72" />
    <path d="M700,30 C670,52 645,70 625,68 C635,58 662,48 700,30 Z" fill="url(#gLeaf)" opacity="0.60" />
    {/* Right-fan leaves */}
    <path d="M700,30 C740,38 780,44 805,40 C790,32 745,26 700,30 Z" fill="url(#gLeaf)" opacity="0.82" />
    <path d="M700,30 C735,45 765,58 790,55 C780,45 745,38 700,30 Z" fill="url(#gLeaf)" opacity="0.72" />
    <path d="M700,30 C730,52 755,70 775,68 C765,58 738,48 700,30 Z" fill="url(#gLeaf)" opacity="0.60" />
    {/* Wispy sprigs */}
    <path d="M700,30 C695,55 688,83 692,113" fill="none" opacity="0.45" stroke="#4a7a5a" strokeWidth="1.2" />
    <path d="M700,30 C706,57 711,87 705,117" fill="none" opacity="0.38" stroke="#4a7a5a" strokeWidth="1" />
    {/* Peony — Teal */}
    <g transform="translate(700,30)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse cx="0" cy="-32" fill="url(#gTeal)" key={`p3o-${deg}`} rx="14" ry="32" transform={`rotate(${deg})`} />
      ))}
      {[0, 25, 50, 75, 100, 125, 150].map((deg) => (
        <ellipse cx="0" cy="-18" fill="url(#gTeal)" key={`p3m-${deg}`} rx="9" ry="18" transform={`rotate(${deg})`} />
      ))}
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse cx="0" cy="-8" fill="url(#gTeal)" key={`p3i-${deg}`} rx="5" ry="9" transform={`rotate(${deg})`} />
      ))}
      <circle cx="0" cy="0" fill="#1a1028" r="6" />
    </g>

    {/* ─── CLUSTER 4 — x=1050, y=40 — DUSTY ROSE ─── */}
    {/* Left-fan leaves */}
    <path d="M1050,40 C1010,48 970,54 945,50 C960,42 1005,36 1050,40 Z" fill="url(#gLeaf)" opacity="0.82" />
    <path d="M1050,40 C1015,55 985,68 960,65 C970,55 1005,48 1050,40 Z" fill="url(#gLeaf)" opacity="0.72" />
    <path d="M1050,40 C1020,62 995,80 975,78 C985,68 1012,58 1050,40 Z" fill="url(#gLeaf)" opacity="0.60" />
    {/* Right-fan leaves */}
    <path d="M1050,40 C1090,48 1130,54 1155,50 C1140,42 1095,36 1050,40 Z" fill="url(#gLeaf)" opacity="0.82" />
    <path d="M1050,40 C1085,55 1115,68 1140,65 C1130,55 1095,48 1050,40 Z" fill="url(#gLeaf)" opacity="0.72" />
    <path d="M1050,40 C1080,62 1105,80 1125,78 C1115,68 1088,58 1050,40 Z" fill="url(#gLeaf)" opacity="0.60" />
    {/* Wispy sprigs */}
    <path d="M1050,40 C1045,65 1038,93 1042,123" fill="none" opacity="0.45" stroke="#4a7a5a" strokeWidth="1.2" />
    <path d="M1050,40 C1056,67 1061,97 1055,127" fill="none" opacity="0.38" stroke="#4a7a5a" strokeWidth="1" />
    {/* Peony — Dusty Rose */}
    <g transform="translate(1050,40)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse cx="0" cy="-32" fill="url(#gRose)" key={`p4o-${deg}`} rx="14" ry="32" transform={`rotate(${deg})`} />
      ))}
      {[0, 25, 50, 75, 100, 125, 150].map((deg) => (
        <ellipse cx="0" cy="-18" fill="url(#gRose)" key={`p4m-${deg}`} rx="9" ry="18" transform={`rotate(${deg})`} />
      ))}
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse cx="0" cy="-8" fill="url(#gRose)" key={`p4i-${deg}`} rx="5" ry="9" transform={`rotate(${deg})`} />
      ))}
      <circle cx="0" cy="0" fill="#1a1028" r="6" />
    </g>

    {/* ─── CLUSTER 5 — x=1280, y=35 — PURPLE ─── */}
    {/* Left-fan leaves */}
    <path d="M1280,35 C1240,43 1200,49 1175,45 C1190,37 1235,31 1280,35 Z" fill="url(#gLeaf)" opacity="0.82" />
    <path d="M1280,35 C1245,50 1215,63 1190,60 C1200,50 1235,43 1280,35 Z" fill="url(#gLeaf)" opacity="0.72" />
    <path d="M1280,35 C1250,57 1225,75 1205,73 C1215,63 1242,53 1280,35 Z" fill="url(#gLeaf)" opacity="0.60" />
    {/* Right-fan leaves */}
    <path d="M1280,35 C1320,43 1360,49 1385,45 C1370,37 1325,31 1280,35 Z" fill="url(#gLeaf)" opacity="0.82" />
    <path d="M1280,35 C1315,50 1345,63 1370,60 C1360,50 1325,43 1280,35 Z" fill="url(#gLeaf)" opacity="0.72" />
    <path d="M1280,35 C1310,57 1335,75 1355,73 C1345,63 1318,53 1280,35 Z" fill="url(#gLeaf)" opacity="0.60" />
    {/* Wispy sprigs */}
    <path d="M1280,35 C1275,60 1268,88 1272,118" fill="none" opacity="0.45" stroke="#4a7a5a" strokeWidth="1.2" />
    <path d="M1280,35 C1286,62 1291,92 1285,122" fill="none" opacity="0.38" stroke="#4a7a5a" strokeWidth="1" />
    {/* Peony — Purple */}
    <g transform="translate(1280,35)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse cx="0" cy="-32" fill="url(#gPurple)" key={`p5o-${deg}`} rx="14" ry="32" transform={`rotate(${deg})`} />
      ))}
      {[0, 25, 50, 75, 100, 125, 150].map((deg) => (
        <ellipse cx="0" cy="-18" fill="url(#gPurple)" key={`p5m-${deg}`} rx="9" ry="18" transform={`rotate(${deg})`} />
      ))}
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse cx="0" cy="-8" fill="url(#gRose)" key={`p5i-${deg}`} rx="5" ry="9" transform={`rotate(${deg})`} />
      ))}
      <circle cx="0" cy="0" fill="#1a1028" r="6" />
    </g>

    {/* ─── ANEMONE ACCENTS ─── */}
    <g transform="translate(250,28)">
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse cx="0" cy="-10" fill="#f5f0e8" key={`a1-${deg}`} rx="4" ry="10" transform={`rotate(${deg})`} />
      ))}
      <circle cx="0" cy="0" fill="#1a1028" r="4" />
    </g>
    <g transform="translate(530,22)">
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse cx="0" cy="-10" fill="#f5f0e8" key={`a2-${deg}`} rx="4" ry="10" transform={`rotate(${deg})`} />
      ))}
      <circle cx="0" cy="0" fill="#1a1028" r="4" />
    </g>
    <g transform="translate(870,26)">
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse cx="0" cy="-10" fill="#f5f0e8" key={`a3-${deg}`} rx="4" ry="10" transform={`rotate(${deg})`} />
      ))}
      <circle cx="0" cy="0" fill="#1a1028" r="4" />
    </g>
    <g transform="translate(1170,20)">
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse cx="0" cy="-10" fill="#f5f0e8" key={`a4-${deg}`} rx="4" ry="10" transform={`rotate(${deg})`} />
      ))}
      <circle cx="0" cy="0" fill="#1a1028" r="4" />
    </g>

    {/* ─── BOTTOM FADE ─── */}
    <rect fill="url(#fadeOut)" height="150" width="1400" x="0" y="0" />
  </svg>
)

// ─── Botanical header flourish (below banner, above name) ─────────────────────
const HeaderFlourish = (): React.JSX.Element => (
  <svg
    aria-hidden="true"
    height="40"
    style={{ display: 'block', margin: '0.25rem auto 1rem', maxWidth: '500px' }}
    viewBox="0 0 500 40"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left stem */}
    <path
      d="M10,20 C70,20 110,17 170,20 C200,21.5 220,19 248,20"
      fill="none"
      stroke="rgba(130,58,82,0.18)"
      strokeLinecap="round"
      strokeWidth="0.9"
    />
    {/* Right stem (mirror) */}
    <path
      d="M490,20 C430,20 390,17 330,20 C300,21.5 280,19 252,20"
      fill="none"
      stroke="rgba(130,58,82,0.18)"
      strokeLinecap="round"
      strokeWidth="0.9"
    />
    {/* Left leaves */}
    <ellipse cx="60" cy="18" fill="#4a7a5a" fillOpacity="0.38" rx="10" ry="3.5" transform="rotate(-10, 60, 18)" />
    <ellipse cx="60" cy="22" fill="#4a7a5a" fillOpacity="0.28" rx="8" ry="3" transform="rotate(12, 60, 22)" />
    <ellipse cx="120" cy="16" fill="#4a7a5a" fillOpacity="0.35" rx="11" ry="3.5" transform="rotate(-5, 120, 16)" />
    <ellipse cx="120" cy="23" fill="#4a7a5a" fillOpacity="0.25" rx="9" ry="3" transform="rotate(7, 120, 23)" />
    <ellipse cx="180" cy="18" fill="#4a7a5a" fillOpacity="0.32" rx="9" ry="3" transform="rotate(-3, 180, 18)" />
    {/* Right leaves (mirror) */}
    <ellipse cx="440" cy="18" fill="#4a7a5a" fillOpacity="0.38" rx="10" ry="3.5" transform="rotate(10, 440, 18)" />
    <ellipse cx="440" cy="22" fill="#4a7a5a" fillOpacity="0.28" rx="8" ry="3" transform="rotate(-12, 440, 22)" />
    <ellipse cx="380" cy="16" fill="#4a7a5a" fillOpacity="0.35" rx="11" ry="3.5" transform="rotate(5, 380, 16)" />
    <ellipse cx="380" cy="23" fill="#4a7a5a" fillOpacity="0.25" rx="9" ry="3" transform="rotate(-7, 380, 23)" />
    <ellipse cx="320" cy="18" fill="#4a7a5a" fillOpacity="0.32" rx="9" ry="3" transform="rotate(3, 320, 18)" />
    {/* Berry accents */}
    <circle cx="35" cy="17" fill="rgba(130,58,82,0.38)" r="2" />
    <circle cx="88" cy="14" fill="rgba(106,63,108,0.36)" r="1.8" />
    <circle cx="145" cy="14" fill="rgba(130,58,82,0.3)" r="1.8" />
    <circle cx="210" cy="19" fill="rgba(106,63,108,0.28)" r="1.6" />
    <circle cx="465" cy="17" fill="rgba(130,58,82,0.38)" r="2" />
    <circle cx="412" cy="14" fill="rgba(106,63,108,0.36)" r="1.8" />
    <circle cx="355" cy="14" fill="rgba(130,58,82,0.3)" r="1.8" />
    <circle cx="290" cy="19" fill="rgba(106,63,108,0.28)" r="1.6" />
    {/* Center rose medallion */}
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <ellipse
        cx="250"
        cy="12"
        fill="#823a52"
        fillOpacity="0.38"
        key={`hf-o-${deg}`}
        rx="4.5"
        ry="8"
        transform={`rotate(${deg}, 250, 20)`}
      />
    ))}
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <ellipse
        cx="250"
        cy="15"
        fill="#6b4a7e"
        fillOpacity="0.42"
        key={`hf-i-${deg}`}
        rx="2.5"
        ry="5"
        transform={`rotate(${deg}, 250, 20)`}
      />
    ))}
    <circle cx="250" cy="20" fill="#1a1028" fillOpacity="0.85" r="4" />
  </svg>
)

// ─── Page layout ──────────────────────────────────────────────────────────────
export const MarriagePageLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div
    {...props}
    className={`relative overflow-hidden ${className ?? ''}`}
    style={{ backgroundColor: v('page-bg'), fontFamily: SANS }}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        backgroundSize: '300px 300px',
        zIndex: 0,
      }}
    />
    <div className="relative" style={{ zIndex: 1 }}>
      {children}
    </div>
  </div>
)

// ─── Header ───────────────────────────────────────────────────────────────────
export const MarriageHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <motion.div
    {...(props as object)}
    animate="visible"
    className={`text-center px-5 pt-0 pb-6 md:px-10 md:pb-8 mb-0 ${className ?? ''}`}
    initial="hidden"
    variants={stagger}
  >
    <motion.div className="mb-2 -mx-5 md:-mx-10 w-[calc(100%+2.5rem)] md:w-[calc(100%+5rem)]" variants={fadeUp}>
      <FloralsGarlandBanner />
    </motion.div>
    <motion.div variants={fadeUp}>
      <HeaderFlourish />
    </motion.div>
    {children}
  </motion.div>
)

export const MarriageTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <motion.h1
    {...(props as object)}
    className={`mb-1 ${className ?? ''}`}
    style={{
      fontFamily: SCRIPT,
      fontWeight: 400,
      fontSize: 'clamp(2.6rem, 7vw, 4.2rem)',
      color: v('rose'),
      lineHeight: 1.2,
    }}
    variants={fadeUp}
  >
    {children}
  </motion.h1>
)

export const MarriageSubtitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <motion.p
    {...(props as object)}
    className={`mt-3 mb-1 uppercase tracking-[0.28em] text-[11px] font-medium ${className ?? ''}`}
    style={{ color: v('muted-text') }}
    variants={fadeUp}
  >
    {children}
  </motion.p>
)

export const MarriageDate = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <motion.p
    {...(props as object)}
    className={`text-lg font-normal ${className ?? ''}`}
    style={{ fontFamily: SERIF, color: v('rose'), fontStyle: 'italic' }}
    variants={fadeUp}
  >
    {children}
  </motion.p>
)

// ─── Separator ────────────────────────────────────────────────────────────────
const FlourishPath = () => (
  <svg aria-hidden="true" height="32" viewBox="0 0 80 32" width="80">
    <path
      d="M2,30 C12,20 22,15 35,18 C48,21 55,12 62,6 C68,1 74,2 78,5"
      fill="none"
      stroke="rgba(130,58,82,0.3)"
      strokeLinecap="round"
      strokeWidth="1"
    />
    <circle cx="2" cy="30" fill="rgba(130,58,82,0.38)" r="2" />
    <circle cx="78" cy="5" fill="rgba(130,58,82,0.22)" r="1.5" />
  </svg>
)

export const MarriageSeparator = ({ className, ...props }: React.HTMLAttributes<HTMLElement>): React.JSX.Element => (
  <motion.div
    {...(props as object)}
    className={`my-2 px-5 md:px-10 ${className ?? ''}`}
    initial={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1 }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <FlourishPath />
      <div style={{ flex: 1, height: '1px', background: 'rgba(130,58,82,0.12)', margin: '0 8px' }} />
      <div style={{ transform: 'scaleX(-1)' }}>
        <FlourishPath />
      </div>
    </div>
  </motion.div>
)

// ─── Inline section divider (used between header and stats) ───────────────────
export const SectionDivider = ({ className, ...props }: React.HTMLAttributes<HTMLElement>): React.JSX.Element => (
  <motion.div
    {...(props as object)}
    className={`py-2 px-5 md:px-10 ${className ?? ''}`}
    initial={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1 }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <FlourishPath />
      <div style={{ flex: 1, height: '1px', background: 'rgba(130,58,82,0.12)', margin: '0 8px' }} />
      <div style={{ transform: 'scaleX(-1)' }}>
        <FlourishPath />
      </div>
    </div>
  </motion.div>
)

// ─── Story section ────────────────────────────────────────────────────────────
export const StorySection = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`mb-8 px-5 md:px-10 ${className ?? ''}`}>
    {children}
  </div>
)

export const StorySectionTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <motion.div
    className={`text-center mb-8 ${className ?? ''}`}
    initial={{ opacity: 0, y: 16 }}
    transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <h2
      {...(props as object)}
      style={{
        fontFamily: SCRIPT,
        fontWeight: 400,
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        color: '#2e3260',
        letterSpacing: '0.02em',
        lineHeight: 1.2,
      }}
    >
      {children}
    </h2>
    <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
      <div style={{ width: '60px', height: '1px', background: 'rgba(130,58,82,0.25)' }} />
      <svg aria-hidden="true" height="8" viewBox="0 0 8 8" width="8">
        <rect fill="#823a52" fillOpacity="0.45" height="5" transform="rotate(45 4 4)" width="5" x="1.5" y="1.5" />
      </svg>
      <div style={{ width: '60px', height: '1px', background: 'rgba(130,58,82,0.25)' }} />
    </div>
  </motion.div>
)

export const VideoGrid = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <motion.div
    {...(props as object)}
    className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${className ?? ''}`}
    initial="hidden"
    variants={stagger}
    viewport={{ once: true, margin: '-60px' }}
    whileInView="visible"
  >
    {children}
  </motion.div>
)

export const VideoCardWrapper = ({ title, videoId }: { title: string; videoId: string }): React.JSX.Element => {
  const driveUrl = `https://drive.google.com/file/d/${videoId}/view?usp=sharing`
  return (
    <motion.div style={{ position: 'relative' }} variants={fadeUp}>
      {/* Thin top decorative rule in berry */}
      <div
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #823a52, transparent)',
          marginBottom: '1.25rem',
        }}
      />

      {/* Title */}
      <p style={{ fontFamily: SERIF, fontSize: '1.25rem', color: '#2e3260', fontWeight: 400, marginBottom: '1rem' }}>
        {title}
      </p>

      {/* Embedded video — desktop only */}
      <div
        className="hidden md:block"
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          marginBottom: '0.75rem',
          borderRadius: '4px',
        }}
      >
        <iframe
          src={`https://drive.google.com/file/d/${videoId}/preview`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          title={title}
        />
      </div>

      {/* Google Drive link — always visible */}
      <Link
        href={driveUrl}
        rel="noopener noreferrer"
        style={
          {
            fontFamily: SANS,
            fontSize: '0.8rem',
            color: '#823a52',
            letterSpacing: '0.08em',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(130,58,82,0.3)',
          } as React.CSSProperties
        }
        target="_blank"
      >
        Open in Google Drive →
      </Link>
    </motion.div>
  )
}
