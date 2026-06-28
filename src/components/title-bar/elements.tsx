import Link from 'next/link'
import React from 'react'

export const NavBar = ({
  children,
  className,
  scrolled,
  ...props
}: React.HTMLAttributes<HTMLElement> & { scrolled?: boolean }): React.JSX.Element => (
  <header
    {...props}
    className={`sticky top-0 z-40 w-full bg-[var(--bg)] border-b border-[var(--rule)] transition-shadow duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.06)]' : ''} ${className ?? ''}`}
  >
    <div className="mx-auto max-w-5xl px-4 sm:px-8 h-14 flex items-center justify-between">{children}</div>
  </header>
)

export const DesktopBrand = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`hidden sm:flex items-center ${className ?? ''}`}>
    {children}
  </div>
)

export const DesktopBrandLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ children, className, ...props }, ref) => (
    <a
      {...props}
      className={`font-display italic text-[18px] text-[var(--ink)] no-underline hover:text-[var(--accent)] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${className ?? ''}`}
      ref={ref}
    >
      {children}
    </a>
  ),
)
DesktopBrandLink.displayName = 'DesktopBrandLink'

export const DesktopNav = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>): React.JSX.Element => (
  <nav {...props} className={`hidden sm:flex items-center gap-7 ${className ?? ''}`}>
    {children}
  </nav>
)

export const DesktopNavLink = ({
  children,
  className,
  href = '',
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>): React.JSX.Element => {
  const cls = `font-mono text-[13px] tracking-[0.06em] text-[var(--ink-whisper)] no-underline hover:text-[var(--accent)] border-b border-transparent hover:border-[var(--accent)] pb-px transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${className ?? ''}`
  if (href.startsWith('/')) {
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    )
  }
  return (
    <a {...props} className={cls} href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  )
}

export const MobileHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex sm:hidden items-center justify-between w-full ${className ?? ''}`}>
    {children}
  </div>
)

export const BrandLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ children, className, ...props }, ref) => (
    <a
      {...props}
      className={`font-display italic text-[18px] text-[var(--ink)] no-underline ${className ?? ''}`}
      ref={ref}
    >
      {children}
    </a>
  ),
)
BrandLink.displayName = 'BrandLink'

export const HamburgerButton = ({
  children,
  className,
  onPress,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & { onPress: () => void }): React.JSX.Element => (
  <button
    {...props}
    className={`w-10 h-10 flex items-center justify-center text-[var(--ink)] hover:text-[var(--accent)] transition-colors duration-300 bg-transparent border-0 cursor-pointer ${className ?? ''}`}
    onClick={onPress}
    type="button"
  >
    {children}
  </button>
)

// Hidden class (not display:none via inline style) keeps overlay in DOM so jsdom toBeVisible() works
export const MobileMenuOverlay = ({
  children,
  isOpen,
}: {
  children: React.ReactNode
  isOpen: boolean
}): React.JSX.Element => <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}>{children}</div>

export const MobileMenuBackdrop = ({ onClick }: { onClick: () => void }): React.JSX.Element => (
  <div className="absolute inset-0 bg-black/20" onClick={onClick} />
)

export const MobileMenuHeader = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <div className="px-6 py-5 border-b border-[var(--rule)]">{children}</div>
)

export const MobileMenuBrand = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <span className="font-display italic text-[18px] text-[var(--ink)]">{children}</span>
)

export const MobileMenuList = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <ul className="list-none m-0 p-6 flex flex-col gap-1">{children}</ul>
)

export const MobileMenuLink = ({
  children,
  className,
  href = '',
  onClick,
}: React.AnchorHTMLAttributes<HTMLAnchorElement>): React.JSX.Element => {
  const cls = `flex items-center gap-3 py-3 text-[15px] text-[var(--ink-soft)] no-underline hover:text-[var(--accent)] transition-colors duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${className ?? ''}`
  if (href.startsWith('/')) {
    return (
      <Link className={cls} href={href} onClick={onClick}>
        {children}
      </Link>
    )
  }
  return (
    <a className={cls} href={href} onClick={onClick} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  )
}

export const MobileMenuButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode
  onPress: () => void
}): React.JSX.Element => (
  <button
    className="flex items-center gap-3 py-3 text-[15px] text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors duration-[400ms] bg-transparent border-0 cursor-pointer w-full text-left"
    onClick={onPress}
    type="button"
  >
    {children}
  </button>
)

export const MobileMenuDivider = (): React.JSX.Element => (
  <li aria-hidden="true">
    <div className="h-px bg-[var(--rule)] my-2" />
  </li>
)
