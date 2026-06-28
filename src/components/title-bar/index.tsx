import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import {
  BrandLink,
  DesktopBrand,
  DesktopBrandLink,
  DesktopNav,
  DesktopNavLink,
  HamburgerButton,
  MobileHeader,
  MobileMenuBackdrop,
  MobileMenuBrand,
  MobileMenuButton,
  MobileMenuDivider,
  MobileMenuHeader,
  MobileMenuLink,
  MobileMenuList,
  MobileMenuOverlay,
  NavBar,
} from './elements'
import { gitHubUrl, linkedInUrl } from '@config/urls'

const navigation: Record<string, string> = {
  Resume: '/',
  Projects: '/projects/',
  LinkedIn: linkedInUrl,
  GitHub: gitHubUrl,
}

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }): JSX.Element => (
  <div className="w-5 h-[14px] relative flex flex-col justify-between">
    <motion.span
      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
      className="block h-0.5 w-full bg-[var(--ink)] rounded-full origin-center"
      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
    />
    <motion.span
      animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
      className="block h-0.5 w-full bg-[var(--ink)] rounded-full origin-center"
      transition={{ duration: 0.2 }}
    />
    <motion.span
      animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
      className="block h-0.5 w-full bg-[var(--ink)] rounded-full origin-center"
      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
    />
  </div>
)

const panelVariants = {
  closed: { x: -24, opacity: 0 },
  open: { x: 0, opacity: 1 },
}

const linkVariants = {
  closed: { opacity: 0, y: 12 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.35, ease: [0.32, 0.72, 0, 1] as const },
  }),
}

const TitleBar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <NavBar scrolled={scrolled}>
      {/* Mobile: hamburger */}
      <MobileHeader>
        <HamburgerButton aria-label="Open menu" onPress={() => setIsMenuOpen(true)}>
          <HamburgerIcon isOpen={isMenuOpen} />
        </HamburgerButton>
        <Link href="/" legacyBehavior>
          <BrandLink href="/">dbowland.com</BrandLink>
        </Link>
      </MobileHeader>

      {/* Desktop: brand */}
      <DesktopBrand>
        <Link href="/" legacyBehavior>
          <DesktopBrandLink href="/">dbowland.com</DesktopBrandLink>
        </Link>
      </DesktopBrand>

      {/* Desktop: nav items */}
      <DesktopNav>
        {Object.entries(navigation).map(([page, url]) => (
          <DesktopNavLink href={url} key={page}>
            {page}
          </DesktopNavLink>
        ))}
      </DesktopNav>

      {/* Mobile: slide-out menu — always in DOM; hidden class controls visibility for test compat */}
      <MobileMenuOverlay isOpen={isMenuOpen}>
        <MobileMenuBackdrop onClick={() => setIsMenuOpen(false)} />
        <motion.div
          animate={isMenuOpen ? 'open' : 'closed'}
          className="absolute left-0 top-0 h-full w-72 bg-[var(--bg)] border-r border-[var(--rule)] flex flex-col"
          initial="closed"
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          variants={panelVariants}
        >
          <MobileMenuHeader>
            <MobileMenuBrand>dbowland.com</MobileMenuBrand>
          </MobileMenuHeader>
          <MobileMenuList>
            {Object.entries(navigation).map(([page, url], i) => (
              <motion.li
                animate={isMenuOpen ? 'open' : 'closed'}
                custom={i}
                initial="closed"
                key={page}
                variants={linkVariants}
              >
                <MobileMenuLink href={url} onClick={() => setIsMenuOpen(false)}>
                  {page}
                </MobileMenuLink>
              </motion.li>
            ))}
            <MobileMenuDivider />
            <motion.li
              animate={isMenuOpen ? 'open' : 'closed'}
              custom={Object.keys(navigation).length}
              initial="closed"
              variants={linkVariants}
            >
              <MobileMenuLink href="/privacy-policy" onClick={() => setIsMenuOpen(false)}>
                <ShieldCheck size={16} />
                Privacy policy
              </MobileMenuLink>
            </motion.li>
            <motion.li
              animate={isMenuOpen ? 'open' : 'closed'}
              custom={Object.keys(navigation).length + 1}
              initial="closed"
              variants={linkVariants}
            >
              <MobileMenuButton onPress={() => setIsMenuOpen(false)}>
                <span className="text-xs">✕</span>
                Close
              </MobileMenuButton>
            </motion.li>
          </MobileMenuList>
        </motion.div>
      </MobileMenuOverlay>
    </NavBar>
  )
}

export default TitleBar
