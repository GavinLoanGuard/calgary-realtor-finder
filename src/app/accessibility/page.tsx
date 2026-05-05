import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Accessibility | Calgary Realtor Finder',
  description: 'Accessibility statement for Calgary Realtor Finder. Our commitment to accessible real estate information.',
}

export default function AccessibilityPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-20">
        <h1 className="font-playfair text-4xl font-bold text-primary">Accessibility</h1>
        <p className="font-inter text-charcoal/50 text-sm mt-2">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 font-inter text-charcoal/70 text-base leading-relaxed">
          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">Our Commitment</h2>
            <p>
              Calgary Realtor Finder is committed to making our website accessible to all users,
              including people with disabilities. We aim to meet or exceed the Web Content Accessibility
              Guidelines (WCAG) 2.1 Level AA standards across all pages on this site.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">Measures We Take</h2>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Semantic HTML with appropriate heading hierarchy on all pages</li>
              <li>All interactive elements are keyboard-navigable</li>
              <li>Colour contrast ratios meet WCAG AA standards for normal and large text</li>
              <li>Images that convey meaning include descriptive alt text</li>
              <li>Form fields include associated labels</li>
              <li>Navigation landmarks (nav, main, footer) are used throughout the site</li>
              <li>Breadcrumb navigation includes <code>aria-label=&quot;breadcrumb&quot;</code></li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">Known Limitations</h2>
            <p>
              Our mortgage and commission calculator tools are functional via keyboard navigation, but
              we are continuing to improve screen reader labelling for dynamic output values. We aim
              to address this in a future update.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">Feedback</h2>
            <p>
              If you experience any accessibility barriers on this website or have suggestions for
              improvement, please contact us at hello@calgaryrealtorfinder.ca. We take accessibility
              feedback seriously and will respond within 5 business days.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">Alternative Access</h2>
            <p>
              If you are unable to use any feature of our website due to a disability, you can reach
              our matching service by phone at (403) 465-3937, Monday through Saturday, 8am to 8pm MT.
              A team member will assist you in completing a realtor match request.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
