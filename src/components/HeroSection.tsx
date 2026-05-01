'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import LeadForm from './LeadForm'

const trustBadges = [
  'RECA-licensed only',
  'No-cost matching',
  'Local Calgary expertise',
]

export default function HeroSection() {
  return (
    <section className="bg-primary relative overflow-hidden">
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
              CALGARY · BOW VALLEY · FOOTHILLS
            </p>
            <h1 className="font-playfair font-bold text-3xl lg:text-5xl text-white leading-tight mt-4">
              Find Your Calgary{' '}
              <em className="text-accent">REALTOR®</em>{' '}
              — Matched to Your Needs
            </h1>
            <p className="font-inter text-lg text-white/70 mt-6 max-w-md leading-relaxed">
              Skip the scroll on Realtor.ca. Tell us what you&apos;re looking for and we&apos;ll connect you with
              the right Calgary real estate agent — free, no obligation.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-accent shrink-0" />
                  <span className="font-inter text-white/80 text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form card */}
          <div>
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
