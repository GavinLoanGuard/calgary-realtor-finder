'use client'

import { useState, useEffect } from 'react'

export default function StickyBottomCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let heroIntersecting = true
    const excludedIntersecting = new Set<Element>()

    const update = () => {
      setVisible(!heroIntersecting && excludedIntersecting.size === 0)
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroIntersecting = entry.isIntersecting
        update()
      },
      { threshold: 0 }
    )

    const exclusionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            excludedIntersecting.add(entry.target)
          } else {
            excludedIntersecting.delete(entry.target)
          }
        })
        update()
      },
      { threshold: 0 }
    )

    const heroEl = document.getElementById('hero-section')
    if (heroEl) heroObserver.observe(heroEl)

    document.querySelectorAll('[data-hide-sticky="true"]').forEach((el) => {
      exclusionObserver.observe(el)
    })

    return () => {
      heroObserver.disconnect()
      exclusionObserver.disconnect()
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-playfair font-bold text-white text-base leading-tight">
            Ready to find your Calgary REALTOR®?
          </p>
          <p className="font-inter text-white/60 text-sm mt-0.5">
            Free matching. No obligation. Takes 60 seconds.
          </p>
        </div>
        <a
          href="/#lead-form"
          className="shrink-0 bg-accent hover:bg-accent-light text-white font-inter font-semibold px-6 py-3 rounded-sm transition-colors text-sm whitespace-nowrap"
        >
          Get Matched Now →
        </a>
      </div>
    </div>
  )
}
