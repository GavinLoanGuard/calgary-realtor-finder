import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { organizationSchema, breadcrumbSchema, faqSchema } from '@/data/schema'
import { nathan } from '@/data/nathan'

export const metadata: Metadata = {
  title: "About Calgary Realtor Finder | Alberta's Independent Realtor Directory",
  description:
    'Calgary Realtor Finder connects Alberta home buyers and sellers with RECA-licensed REALTORS® at no cost. Learn about our independent matching service.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/about',
  },
  openGraph: {
    title: "About Calgary Realtor Finder | Alberta's Independent Realtor Directory",
    description:
      'Calgary Realtor Finder connects Alberta home buyers and sellers with RECA-licensed REALTORS® at no cost. Learn about our independent matching service.',
    url: 'https://calgaryrealtorfinder.ca/about',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About' },
  ]

  const schema = JSON.stringify([
    organizationSchema,
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'About', url: 'https://calgaryrealtorfinder.ca/about' },
    ]),
    faqSchema([
      {
        question: 'How does Calgary Realtor Finder make money?',
        answer:
          'When a buyer or seller we introduce closes a transaction with a matched agent, we receive a referral fee from the agent — not from you. You pay nothing. There is no fee, no subscription, and no obligation.',
      },
      {
        question: 'Is Calgary Realtor Finder a real estate brokerage?',
        answer:
          'No. Calgary Realtor Finder is an independent directory and referral service. We are not licensed to trade in real estate. Our featured partner realtor, Nathan Koenigsberg, is a licensed REALTOR® with RE/MAX First, regulated by RECA.',
      },
      {
        question: 'How do you vet the realtors you feature?',
        answer:
          'We verify RECA license status, brokerage standing, and recent transaction history for every agent we feature. We also review client feedback and neighbourhood-specific activity before making any introduction.',
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          About Calgary Realtor Finder
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Calgary Realtor Finder is an independent directory and matching service connecting
          Alberta home buyers and sellers with licensed, vetted REALTORS®. We are not a brokerage.
          We do not sell leads. We introduce you to one carefully matched agent — free of charge,
          with no obligation to proceed.
        </p>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-primary">What We Do</h2>
            <p className="text-charcoal/70 leading-relaxed mt-4">
              Calgary Realtor Finder is an independent directory and matching service. We are not a
              brokerage. We do not list properties. We connect buyers and sellers with one carefully
              selected, RECA-licensed REALTOR® who specializes in their specific neighbourhood and
              price range — then step back.
            </p>
            <p className="text-charcoal/70 leading-relaxed mt-4">
              There is no fee to use this service. There is no obligation to proceed after being
              matched. We receive a referral fee from the agent only when a transaction successfully
              closes — which means we are motivated to make good matches, not just many matches.
            </p>
          </div>

          <div className="border-t border-charcoal/10 pt-8">
            <h2 className="font-playfair text-2xl font-bold text-primary">Our Featured Partner</h2>
            <div className="flex gap-6 mt-6 items-start">
              <div className="w-24 h-24 rounded-sm overflow-hidden bg-charcoal/10 flex-shrink-0 relative">
                {nathan.photo && (
                  <Image
                    src={nathan.photo}
                    alt={nathan.photoAlt}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                  />
                )}
              </div>
              <div>
                <p className="font-playfair text-xl font-bold text-primary">{nathan.name}</p>
                <p className="text-accent text-sm font-medium mt-1">{nathan.brokerage}</p>
                <p className="text-charcoal/60 text-sm mt-1">RECA License #{nathan.licenseNumber}</p>
                <p className="text-charcoal/60 text-sm mt-3 leading-relaxed max-w-lg">{nathan.bio}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-charcoal/10 pt-8">
            <h2 className="font-playfair text-2xl font-bold text-primary">
              How the Referral Model Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {[
                {
                  step: '01',
                  title: 'You submit a match request',
                  body: 'Fill out our form with your neighbourhood, timeline, and budget. Takes under a minute.',
                },
                {
                  step: '02',
                  title: 'We introduce you to Nathan',
                  body: 'Nathan reaches out within a few hours by email or phone — whichever you prefer.',
                },
                {
                  step: '03',
                  title: 'Nathan closes your deal',
                  body: 'You work directly with Nathan. We receive a referral fee from Nathan when your transaction closes. You pay nothing.',
                },
              ].map((item) => (
                <div key={item.step} className="border border-charcoal/10 rounded-sm p-6">
                  <p className="font-playfair text-4xl font-bold text-accent/30">{item.step}</p>
                  <p className="font-playfair text-lg font-semibold text-primary mt-3">
                    {item.title}
                  </p>
                  <p className="text-charcoal/60 text-sm mt-2 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-charcoal/10 pt-8 bg-primary rounded-sm p-8">
            <h2 className="font-playfair text-2xl font-bold text-white">
              Ready to find your REALTOR®?
            </h2>
            <p className="text-white/70 mt-3 leading-relaxed">
              Fill out our matching form and we&apos;ll introduce you to Nathan within a few hours.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3 rounded-sm transition"
            >
              Get Matched Now →
            </Link>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
