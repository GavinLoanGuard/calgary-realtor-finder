import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import LeadForm from '@/components/LeadForm'
import { breadcrumbSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Contact Calgary Realtor Finder | Get Matched With a Calgary REALTOR®',
  description:
    "Get matched with a licensed Calgary REALTOR® today. Fill out our form and we'll introduce you to the right agent for your neighbourhood and price range. Free, no obligation.",
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/contact',
  },
  openGraph: {
    title: 'Contact Calgary Realtor Finder | Get Matched With a Calgary REALTOR®',
    description:
      "Get matched with a licensed Calgary REALTOR® today. Fill out our form and we'll introduce you to the right agent for your neighbourhood and price range. Free, no obligation.",
    url: 'https://calgaryrealtorfinder.ca/contact',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact' },
  ]

  const schema = JSON.stringify([
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Contact', url: 'https://calgaryrealtorfinder.ca/contact' },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout sidebar={false}>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Get Matched With a Calgary REALTOR®
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Fill out the form and we'll introduce you to a RECA-licensed Calgary REALTOR® who
          specializes in your neighbourhood and price range. Most matches happen within a few hours.
          There is no fee and no obligation to proceed.
        </p>
        <div className="mt-8 max-w-lg mx-auto">
          <LeadForm variant="hero" />
        </div>
      </PageLayout>
    </>
  )
}
