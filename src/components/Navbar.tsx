'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Find a Realtor', href: '/' },
  { label: 'Calgary', href: '/calgary-realtors' },
  { label: 'Edmonton', href: '/edmonton-realtors' },
  { label: 'Alberta Cities', href: '/alberta-cities' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
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
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-5">
          <span className="font-inter text-sm text-white/70">(403) 555-0188</span>
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
