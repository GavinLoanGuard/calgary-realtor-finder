'use client'

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
      {/* Diagonal line SVG pattern at 5% opacity */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ opacity: 0.05 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag-lines" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag-lines)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-32 pb-20 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <p className="font-inter font-medium text-accent text-xs tracking-widest uppercase">
              CALGARY · BOW VALLEY · FOOTHILLS
            </p>
            <h1 className="font-playfair font-bold text-3xl lg:text-5xl text-white leading-tight mt-4">
              Find the right Calgary{' '}
              <em className="text-accent">REALTOR®</em>{' '}
              for you.
            </h1>
            <p className="font-inter text-lg text-white/70 mt-6 max-w-md leading-relaxed">
              Connect with trusted, licensed Calgary real estate agents who actually know your
              neighbourhood — from Inglewood walk-ups to Aspen Woods estates.
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
