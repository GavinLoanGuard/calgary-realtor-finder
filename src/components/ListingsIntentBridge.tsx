import Link from 'next/link'

export default function ListingsIntentBridge() {
  return (
    <section className="bg-background py-16 px-8 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto">
        <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY MLS® LISTINGS</p>
        <h2 className="font-playfair text-4xl text-primary font-bold mt-2 max-w-3xl">
          Browse homes for sale in Calgary, Alberta.
        </h2>
        <p className="font-inter text-charcoal/70 text-lg mt-4 max-w-3xl leading-relaxed">
          Whether you&apos;re searching for houses for sale in Calgary SW, a condo in the Beltline,
          or a family home in{' '}
          <Link href="/calgary/auburn-bay" className="text-accent hover:underline">
            Auburn Bay
          </Link>{' '}
          or{' '}
          <Link href="/calgary/mckenzie-towne" className="text-accent hover:underline">
            McKenzie Towne
          </Link>{' '}
          — the right REALTOR® makes the difference between finding a listing and securing it.
          Browse current Calgary MLS® listings below, then get matched with an agent who knows
          that neighbourhood inside out.
        </p>
        <div className="mt-8">
          <Link
            href="#lead-form"
            className="inline-block bg-accent hover:bg-accent-light text-white font-inter font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            Get Matched with a Calgary REALTOR® →
          </Link>
        </div>
      </div>
    </section>
  )
}
