'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import LeadForm from './LeadForm'

export default function HeroSection() {
  return (
    <section id="hero-section" className="bg-primary relative overflow-hidden">
      {/* Calgary skyline hero background */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        quality={85}
        aria-hidden="true"
      />
      {/* Dark overlay so text remains readable */}
      <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto pt-32 pb-20 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <p className="font-inter font-medium text-accent text-xs tracking-widest uppercase">
              CALGARY REALTORS® YOU CAN TRUST
            </p>
            <h1 className="font-playfair font-bold text-3xl lg:text-5xl text-white leading-tight mt-4">
              Don&apos;t Get Stuck With the Wrong Calgary{' '}
              <em className="text-accent">REALTOR®</em>
            </h1>
            <p className="font-inter text-lg text-white/70 mt-6 max-w-md leading-relaxed">
              Most Calgary buyers and sellers pick an agent by accident. Our free matching service connects you with a vetted, licensed REALTOR® who knows your neighbourhood — no fees, no obligation.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              {(['RECA-licensed only', 'No-cost matching', 'Local Calgary expertise'] as const).map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-accent shrink-0" />
                  <span className="font-inter text-white/80 text-sm">{badge}</span>
                </div>
              ))}
            </div>

            {/* Nathan preview card — hidden on mobile */}
            <div className="hidden md:flex items-center gap-4 mt-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-4 max-w-sm shadow-lg">
              <div className="w-14 h-14 rounded-sm overflow-hidden shrink-0 bg-primary/40">
                <Image
                  src="/nathan-koenigsberg.webp"
                  alt="Nathan Koenigsberg — Calgary REALTOR®"
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-playfair font-bold text-white text-sm leading-tight">Nathan Koenigsberg</p>
                <p className="font-inter text-accent text-xs mt-0.5">RE/MAX First</p>
                <p className="font-inter text-white/60 text-xs mt-1">13+ yrs · City Centre, SW, SE, South, Okotoks</p>
                <p className="font-inter text-accent text-xs mt-1 font-medium">✓ Your featured Calgary REALTOR®</p>
              </div>
              <div className="shrink-0" style={{ position: 'relative', width: '56px', height: '56px' }}>
                <Image
                  src="/images/top100-badge.png"
                  alt="RE/MAX Western Canada Top 100"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="56px"
                />
              </div>
            </div>
          </div>

          {/* Right column — form card */}
          <div id="lead-form" data-hide-sticky="true">
            <div className="remax-branding flex justify-center mb-3">
              <div style={{ position: 'relative', width: '100px', height: '33px' }}>
                <Image
                  src="/images/2025-REMAXFIRST_CREAM-horizontal.png"
                  alt="RE/MAX First"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="100px"
                />
              </div>
            </div>
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
