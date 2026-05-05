'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Find a Realtor', href: '/' },
  { label: 'Calgary', href: '/calgary-realtors' },
  { label: 'Listings', href: '/listings' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

const toolLinks = [
  { label: 'Mortgage Calculator', href: '/tools/mortgage-affordability' },
  { label: 'Commission Calculator', href: '/tools/realtor-commission' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/favicon.png" alt="Calgary Realtor Finder" width={48} height={48} className="rounded-sm" />
            <div className="flex flex-col leading-tight">
              <span className="font-playfair font-semibold text-white text-lg leading-none">
                Calgary Realtor Finder
              </span>
              <span className="font-inter text-accent text-xs tracking-widest mt-0.5">
                Alberta · Established 2026
              </span>
            </div>
          </Link>
          <div className="hidden sm:flex items-center border-l border-white/20 pl-3">
            <div className="remax-branding" style={{ position: 'relative', width: '140px', height: '46px' }}>
              <Image
                src="/images/2025-REMAXFIRST_CREAM-horizontal.png"
                alt="RE/MAX First"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
                sizes="140px"
              />
            </div>
          </div>
        </div>

        {/* Desktop centre links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter font-medium text-sm text-white/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Tools dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 font-inter font-medium text-sm text-white/80 hover:text-accent transition-colors"
              onClick={() => setToolsOpen((o) => !o)}
              onBlur={() => setTimeout(() => setToolsOpen(false), 150)}
            >
              Tools <ChevronDown size={14} className={`transition-transform ${toolsOpen ? 'rotate-180' : ''}`} />
            </button>
            {toolsOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-charcoal/10 rounded-sm shadow-lg py-1 z-10">
                {toolLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 font-inter text-sm text-charcoal/80 hover:text-accent hover:bg-charcoal/5 transition-colors"
                    onClick={() => setToolsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-5">
          <span className="font-inter text-sm text-white/70">(403) 536-9024</span>
          <Link
            href="/contact"
            className="bg-accent text-white font-inter font-semibold text-sm px-5 py-2 rounded-sm hover:bg-accent-light transition-colors"
          >
            Get Matched →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-white/10 px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter font-medium text-sm text-white/80 hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-4">
            <p className="font-inter text-white/40 text-xs uppercase tracking-widest mb-3">Tools</p>
            {toolLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-inter font-medium text-sm text-white/80 hover:text-accent transition-colors mb-3"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-2 w-full bg-accent text-white font-inter font-semibold text-sm px-5 py-3 rounded-sm hover:bg-accent-light transition-colors text-center"
            onClick={() => setOpen(false)}
          >
            Get Matched →
          </Link>
        </div>
      )}
    </nav>
  )
}
