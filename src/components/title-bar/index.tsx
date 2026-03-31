import { Contact, Construction, FileText, GitMerge, Menu, ShieldCheck, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

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
  MobileMenuPanel,
  NavBar,
} from './elements'
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
    <NavBar>
      {/* Mobile: hamburger */}
      <MobileHeader>
        <HamburgerButton aria-label="amenu" onClick={() => setIsMenuOpen(true)}>
          <Menu />
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
        {Object.entries(navigation).map(([page, details]) => (
          <DesktopNavLink href={details.url} key={page}>
            {page}
          </DesktopNavLink>
        ))}
      </DesktopNav>

      {/* Mobile: slide-out menu (always in DOM, shown/hidden via class) */}
      <MobileMenuOverlay isOpen={isMenuOpen}>
        <MobileMenuBackdrop onClick={() => setIsMenuOpen(false)} />
        <MobileMenuPanel>
          <MobileMenuHeader>
            <MobileMenuBrand>dbowland.com</MobileMenuBrand>
          </MobileMenuHeader>
          <MobileMenuList>
            {Object.entries(navigation).map(([page, details]: [string, NavigationDetails]) => (
              <li key={page}>
                <MobileMenuLink href={details.url} onClick={() => setIsMenuOpen(false)}>
                  {details.icon}
                  {page}
                </MobileMenuLink>
              </li>
            ))}
            <MobileMenuDivider />
            <li>
              <MobileMenuLink href="/privacy-policy" onClick={() => setIsMenuOpen(false)}>
                <ShieldCheck size={18} />
                Privacy policy
              </MobileMenuLink>
            </li>
            <li>
              <MobileMenuButton onClick={() => setIsMenuOpen(false)}>
                <X size={18} />
                Close
              </MobileMenuButton>
            </li>
          </MobileMenuList>
        </MobileMenuPanel>
      </MobileMenuOverlay>
    </NavBar>
  )
}

export default TitleBar
