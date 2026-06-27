import React from 'react'

type IconProps = { size?: number; className?: string; style?: React.CSSProperties }

// 5-petal flower using rotated ellipses — mathematically precise, guaranteed to render
export const FlowerIcon = ({ size = 20, className = '', style }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="currentColor"
    height={size}
    style={style}
    viewBox="-14 -14 28 28"
    width={size}
  >
    {([0, 72, 144, 216, 288] as const).map((deg, i) => (
      <ellipse cx="0" cy="-6" fillOpacity="0.7" key={i} rx="2.8" ry="6" transform={`rotate(${deg})`} />
    ))}
    <circle cx="0" cy="0" r="3" />
  </svg>
)

// Wedding rings — two overlapping circles
export const WeddingRingsIcon = ({ size = 52, className = '', style }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size * 0.62}
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth="2.5"
    style={style}
    viewBox="0 0 60 37"
    width={size}
  >
    <circle cx="20" cy="18.5" r="14" />
    <circle cx="40" cy="18.5" r="14" />
  </svg>
)

// Stylized geometric rose — layered rotated ellipses form petal clusters
export const RoseIcon = ({ size = 72, className = '', style }: IconProps) => {
  const outerPetals = [0, 72, 144, 216, 288]
  const innerPetals = [36, 108, 180, 252, 324]
  const sepals = [0, 72, 144, 216, 288]

  return (
    <svg
      aria-hidden="true"
      className={className}
      height={size * 1.45}
      style={style}
      viewBox="-50 -52 100 145"
      width={size}
    >
      {/* Outer petal ring */}
      {outerPetals.map((deg, i) => (
        <ellipse
          cx="0"
          cy="-23"
          fill="currentColor"
          fillOpacity={i % 2 === 0 ? 0.14 : 0.1}
          key={`op-${i}`}
          rx="9"
          ry="20"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="0.5"
          transform={`rotate(${deg})`}
        />
      ))}
      {/* Inner petal ring */}
      {innerPetals.map((deg, i) => (
        <ellipse
          cx="0"
          cy="-13"
          fill="currentColor"
          fillOpacity={i % 2 === 0 ? 0.3 : 0.22}
          key={`ip-${i}`}
          rx="6"
          ry="13"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="0.4"
          transform={`rotate(${deg})`}
        />
      ))}
      {/* Center */}
      <circle cx="0" cy="0" fill="currentColor" fillOpacity="0.9" r="6" />
      <circle cx="0" cy="0" fill="currentColor" fillOpacity="0.6" r="3" />
      {/* Sepals */}
      {sepals.map((deg, i) => (
        <ellipse
          cx="0"
          cy="14"
          fill="currentColor"
          fillOpacity={0.5}
          key={`s-${i}`}
          rx="3"
          ry="10"
          transform={`rotate(${deg})`}
        />
      ))}
      {/* Stem */}
      <line stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" x1="0" x2="0" y1="22" y2="82" />
      {/* Left leaf */}
      <path
        d="M0,46 C-20,37 -27,22 -20,15 C-13,8 -4,24 0,40"
        fill="currentColor"
        fillOpacity="0.55"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.6"
      />
      <line stroke="currentColor" strokeLinecap="round" strokeWidth="0.6" x1="-19" x2="0" y1="16" y2="43" />
      {/* Right leaf */}
      <path
        d="M0,65 C20,56 27,41 20,34 C13,27 4,43 0,59"
        fill="currentColor"
        fillOpacity="0.55"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.6"
      />
      <line stroke="currentColor" strokeLinecap="round" strokeWidth="0.6" x1="19" x2="0" y1="35" y2="62" />
    </svg>
  )
}

// Diamond ring silhouette — for milestone/anniversary accents
export const DiamondRingIcon = ({ size = 32, className = '', style }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    style={style}
    viewBox="0 0 40 40"
    width={size}
  >
    {/* Band */}
    <path d="M20,38 C10,38 4,32 4,24 C4,16 10,10 20,10 C30,10 36,16 36,24 C36,32 30,38 20,38 Z" />
    {/* Diamond facets */}
    <path d="M13,10 L20,2 L27,10" />
    <path d="M13,10 L20,18 L27,10" />
    <line x1="20" x2="20" y1="2" y2="18" />
    <line x1="13" x2="27" y1="10" y2="10" />
  </svg>
)

// Laurel branch — for achieved milestones
export const LaurelIcon = ({ size = 20, className = '', style }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.2"
    style={style}
    viewBox="0 0 24 24"
    width={size}
  >
    <path d="M12,21 L12,6" />
    <path d="M12,18 C9,15 6,13 7,10 C8,7 11,9 12,13" />
    <path d="M12,14 C15,11 18,9 17,6 C16,3 13,5 12,9" />
    <path d="M12,20 C10,18 8,16 9,14 C10,12 12,14 12,17" />
    <path d="M12,16 C14,14 16,12 15,10 C14,8 12,10 12,13" />
  </svg>
)

// Floral divider — combines lines and a central flower
export const FloralDivider = ({ className = '' }: { className?: string }) => (
  <div aria-hidden="true" className={`flex items-center gap-3 ${className}`}>
    <div className="h-px flex-1" style={{ backgroundColor: 'currentColor', opacity: 0.2 }} />
    <FlowerIcon className="opacity-40" size={12} />
    <div className="h-px flex-1" style={{ backgroundColor: 'currentColor', opacity: 0.2 }} />
  </div>
)
