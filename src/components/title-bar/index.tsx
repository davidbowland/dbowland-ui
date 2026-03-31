import { Contact, Construction, FileText, GitMerge, Menu, ShieldCheck, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

import { gitHubUrl, linkedInUrl } from '@config/urls'

interface NavigationDetails {
  icon: JSX.Element
  url: string
}

const navigation: { [key: string]: NavigationDetails } = {
  Resume: { icon: <FileText size={18} />, url: '/' },
  Projects: { icon: <Construction size={18} />, url: '/projects/' },
  LinkedIn: { icon: <Contact size={18} />, url: linkedInUrl },
  GitHub: { icon: <GitMerge size={18} />, url: gitHubUrl },
}

const TitleBar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between border-b border-[#cf8a05]/25">
      {/* Mobile: hamburger */}
      <div className="sm:hidden flex items-center gap-2">
        <button
          aria-label="amenu"
          className="p-2 rounded hover:bg-slate-800 transition-colors"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu />
        </button>
        <Link className="font-semibold tracking-wide text-[#cf8a05]" href="/">
          dbowland.com
        </Link>
      </div>

      {/* Desktop: brand */}
      <div className="hidden sm:flex">
        <Link className="font-semibold tracking-wide text-[#cf8a05] hover:text-[#e0a020] transition-colors" href="/">
          dbowland.com
        </Link>
      </div>

      {/* Desktop: nav items */}
      <div className="hidden sm:flex gap-1">
        {Object.entries(navigation).map(([page, details]) => (
          <a
            className="py-1.5 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
            href={details.url}
            key={page}
          >
            {page}
          </a>
        ))}
      </div>

      {/* Mobile: slide-out menu (always in DOM, shown/hidden via class) */}
      <div className={`sm:hidden fixed inset-0 z-50 ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black/60" onClick={() => setIsMenuOpen(false)} />
        <div className="absolute left-0 top-0 h-full w-64 bg-slate-900 shadow-xl border-r border-[#cf8a05]/20">
          <div className="px-5 py-4 border-b border-[#cf8a05]/20">
            <span className="font-semibold tracking-wide text-[#cf8a05]">dbowland.com</span>
          </div>
          <ul className="flex flex-col gap-1 mt-2 p-2">
            {Object.entries(navigation).map(([page, details]: [string, NavigationDetails]) => (
              <li key={page}>
                <a
                  className="flex items-center gap-3 py-2 px-4 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  href={details.url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {details.icon}
                  {page}
                </a>
              </li>
            ))}
            <hr className="my-2 border-slate-700" />
            <li>
              <a
                className="flex items-center gap-3 py-2 px-4 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                href="/privacy-policy"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShieldCheck size={18} />
                Privacy policy
              </a>
            </li>
            <li>
              <button
                className="flex items-center gap-3 py-2 px-4 rounded hover:bg-slate-800 w-full text-left text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={18} />
                Close
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TitleBar
