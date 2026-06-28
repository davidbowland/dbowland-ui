import Image from 'next-export-optimize-images/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import genographicInfographic from '@assets/images/genographic-infographic.png'

const genographicPdf = '/assets/pdf/genographic-results.pdf'

type AncestryEntry = {
  bar: string
  label: string
  note?: string
  pct: number
  scaleFraction: number
}

const ancestryData: AncestryEntry[] = [
  { bar: 'var(--accent)', label: 'Eastern Europe', pct: 41, scaleFraction: 1 },
  { bar: 'var(--accent-warm)', label: 'Western & Central Europe', pct: 22, scaleFraction: 22 / 41 },
  { bar: 'var(--ink)', label: 'Scandinavian', pct: 20, scaleFraction: 20 / 41 },
  { bar: 'var(--ink-soft)', label: 'Great Britain & Ireland', pct: 14, scaleFraction: 14 / 41 },
  { bar: 'var(--ink-whisper)', label: 'Asia Minor', pct: 2, scaleFraction: 2 / 41 },
  {
    bar: 'var(--ink-whisper)',
    label: 'Neanderthal',
    note: 'ancient ancestry',
    pct: 1.1,
    scaleFraction: 1.1 / 41,
  },
]

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible] as const
}

const GenographicInfographic = (): React.JSX.Element => {
  const [heroRef, heroVisible] = useReveal()
  const [dataRef, dataVisible] = useReveal()
  const [imageRef, imageVisible] = useReveal()

  return (
    <>
      <style>{`
        .geno-reveal {
          opacity: 0;
          transform: translateY(2rem);
          transition: opacity 900ms cubic-bezier(0.32, 0.72, 0, 1),
                      transform 900ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .geno-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .geno-bar {
          transition: transform 1400ms cubic-bezier(0.32, 0.72, 0, 1);
          transform-origin: left center;
          transform: scaleX(0);
        }
        .geno-bar.visible {
          transform: scaleX(1);
        }
      `}</style>

      {/* HERITAGE HERO */}
      <section className="px-6 py-24 md:py-36 max-w-4xl mx-auto">
        <div className={`geno-reveal${heroVisible ? ' visible' : ''}`} ref={heroRef}>
          <span className="inline-flex items-center rounded-full border border-[var(--rule)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--ink-whisper)] mb-10">
            DNA Heritage Report · 2016
          </span>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] text-[var(--ink)] leading-[1.05] mb-10">
            A Journey Through
            <br />
            <em>Deep Time</em>
          </h1>
          <p className="text-[var(--ink-soft)] text-lg leading-relaxed max-w-2xl">
            In 2016, I sent my DNA to the now-defunct{' '}
            <strong className="text-[var(--ink)] font-semibold">National Geographic Genographic project</strong> to help
            drive research and to learn about my deep ancestry. People who know me will not be surprised to learn that
            my ancestors were &ldquo;hunters of megafauna such as the woolly mammoth.&rdquo;
          </p>
        </div>
      </section>

      {/* ANCESTRY COMPOSITION */}
      <section className="border-y border-[var(--rule)] bg-[var(--surface)]">
        <div className="px-6 py-20 md:py-28 max-w-4xl mx-auto">
          <div className={`geno-reveal${dataVisible ? ' visible' : ''}`} ref={dataRef}>
            <span className="inline-flex items-center rounded-full border border-[var(--rule)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--ink-whisper)] mb-12">
              Ancestry Composition
            </span>
            <div className="space-y-8">
              {ancestryData.map(({ bar, label, note, pct, scaleFraction }, i) => (
                <div key={label}>
                  <div className="flex items-baseline justify-between mb-2.5">
                    <span className="text-sm font-medium tracking-wide text-[var(--ink)]">
                      {label}
                      {note && (
                        <span className="ml-2.5 text-[10px] uppercase tracking-[0.18em] font-normal text-[var(--ink-whisper)]">
                          {note}
                        </span>
                      )}
                    </span>
                    <span className="font-display text-2xl" style={{ color: bar }}>
                      {pct}%
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="relative h-[2px] w-full overflow-hidden rounded-full bg-[var(--rule)]"
                  >
                    <div
                      className={`geno-bar absolute inset-y-0 left-0 rounded-full${dataVisible ? ' visible' : ''}`}
                      style={{
                        background: bar,
                        transitionDelay: `${i * 90}ms`,
                        width: `${scaleFraction * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFOGRAPHIC IMAGE */}
      <section className="px-6 py-24 md:py-36 max-w-4xl mx-auto">
        <div className={`geno-reveal${imageVisible ? ' visible' : ''}`} ref={imageRef}>
          <span className="inline-flex items-center rounded-full border border-[var(--rule)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--ink-whisper)] mb-10">
            Full Report
          </span>

          {/* Double-bezel frame */}
          <div className="rounded-[2rem] bg-[var(--surface)] ring-1 ring-[var(--rule)] p-2 shadow-[0_12px_60px_-12px_rgba(17,17,17,0.07)]">
            <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden bg-[var(--bg)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
              <Link className="block group relative" href={genographicPdf}>
                <Image
                  alt="41% Eastern Europe; 22% Western and Central Europe; 20% Scandinavin; 14% Great Britain and Ireland; 2% Asia Minor; 1.1% Neanderthal"
                  className="w-full h-auto transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.015]"
                  src={genographicInfographic}
                />
                <div className="absolute inset-0 bg-[var(--ink)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
              </Link>
            </div>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <p className="text-sm italic text-[var(--ink-whisper)]">
              Click or tap the image for the full 18-page PDF report.
            </p>
            <Link
              className="group inline-flex items-center gap-2.5 self-start rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-white dark:text-[var(--bg)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--accent)] hover:text-white active:scale-[0.97]"
              href={genographicPdf}
            >
              <span>View Report</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <svg aria-hidden="true" fill="none" height="10" viewBox="0 0 10 10" width="10">
                  <path
                    d="M2 8L8 2M8 2H3M8 2V7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default GenographicInfographic
