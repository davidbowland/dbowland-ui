import { Button, type ButtonRootProps, Link as HeroLink, type LinkRootProps, Separator } from '@heroui/react'
import React from 'react'

export const NavBar = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>): React.JSX.Element => (
  <nav
    {...props}
    className={`bg-slate-900 text-white px-6 py-3 flex items-center justify-between border-b border-[#cf8a05]/25 ${className ?? ''}`}
  >
    {children}
  </nav>
)

export const MobileHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`sm:hidden flex items-center gap-2 ${className ?? ''}`}>
    {children}
  </div>
)

export const HamburgerButton = ({
  children,
  className,
  onPress,
  ...props
}: Omit<ButtonRootProps, 'onClick'> & { onPress: () => void }): React.JSX.Element => (
  <Button
    {...props}
    className={`p-2 rounded hover:bg-slate-800 transition-colors min-w-0 ${className ?? ''}`}
    isIconOnly
    onPress={onPress}
    variant="ghost"
  >
    {children}
  </Button>
)

export const BrandLink = ({ children, className, ...props }: LinkRootProps): React.JSX.Element => (
  <HeroLink {...props} className={`font-semibold tracking-wide text-[#cf8a05] ${className ?? ''}`}>
    {children}
  </HeroLink>
)

export const DesktopBrandLink = ({ children, className, ...props }: LinkRootProps): React.JSX.Element => (
  <HeroLink
    {...props}
    className={`font-semibold tracking-wide text-[#cf8a05] hover:text-[#e0a020] transition-colors ${className ?? ''}`}
  >
    {children}
  </HeroLink>
)

export const DesktopBrand = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`hidden sm:flex ${className ?? ''}`}>
    {children}
  </div>
)

export const DesktopNav = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`hidden sm:flex gap-1 ${className ?? ''}`}>
    {children}
  </div>
)

export const DesktopNavLink = ({ children, className, ...props }: LinkRootProps): React.JSX.Element => (
  <HeroLink
    {...props}
    className={`py-1.5 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors ${className ?? ''}`}
  >
    {children}
  </HeroLink>
)

export const MobileMenuOverlay = ({
  children,
  isOpen,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { isOpen: boolean }): React.JSX.Element => (
  <div {...props} className={`sm:hidden fixed inset-0 z-50 ${isOpen ? '' : 'hidden'} ${className ?? ''}`}>
    {children}
  </div>
)

export const MobileMenuBackdrop = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`absolute inset-0 bg-black/60 ${className ?? ''}`} />
)

export const MobileMenuPanel = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div
    {...props}
    className={`absolute left-0 top-0 h-full w-64 bg-slate-900 shadow-xl border-r border-[#cf8a05]/20 ${className ?? ''}`}
  >
    {children}
  </div>
)

export const MobileMenuHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`px-5 py-4 border-b border-[#cf8a05]/20 ${className ?? ''}`}>
    {children}
  </div>
)

export const MobileMenuBrand = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element => (
  <span {...props} className={`font-semibold tracking-wide text-[#cf8a05] ${className ?? ''}`}>
    {children}
  </span>
)

export const MobileMenuList = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>): React.JSX.Element => (
  <ul {...props} className={`flex flex-col gap-1 mt-2 p-2 ${className ?? ''}`}>
    {children}
  </ul>
)

export const MobileMenuLink = ({ children, className, ...props }: LinkRootProps): React.JSX.Element => (
  <HeroLink
    {...props}
    className={`flex items-center gap-3 py-2 px-4 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors ${className ?? ''}`}
  >
    {children}
  </HeroLink>
)

export const MobileMenuButton = ({
  children,
  className,
  onPress,
  ...props
}: Omit<ButtonRootProps, 'onClick'> & { onPress: () => void }): React.JSX.Element => (
  <Button
    {...props}
    className={`flex items-center gap-3 py-2 px-4 w-full justify-start text-slate-300 hover:text-white ${className ?? ''}`}
    onPress={onPress}
    variant="ghost"
  >
    {children}
  </Button>
)

export const MobileMenuDivider = (): React.JSX.Element => <Separator className="my-2 border-slate-700" />
