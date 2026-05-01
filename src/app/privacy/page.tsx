import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Calgary Realtor Finder',
  description: 'Privacy policy for Calgary Realtor Finder. How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-20">
        <h1 className="font-playfair text-4xl font-bold text-primary">Privacy Policy</h1>
        <p className="font-inter text-charcoal/50 text-sm mt-2">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 font-inter text-charcoal/70 text-base leading-relaxed">
          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">1. Information We Collect</h2>
            <p>
              When you submit a realtor matching request through our website, we collect the information
              you provide — including your name, email address, phone number, property type, neighbourhood
              of interest, timeline, and budget range. We also collect standard web analytics data
              (pages visited, time on site, referral source) through Google Tag Manager.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">2. How We Use Your Information</h2>
            <p>
              We use your contact information solely to introduce you to a licensed REALTOR® who matches
              your stated needs. Your information is shared with one agent only — it is not sold, rented,
              or distributed to third parties, advertisers, or multiple agents. We may contact you by
              email or phone to confirm your match or follow up on your inquiry.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">3. Third-Party Services</h2>
            <p>
              Our lead form is processed by Web3Forms, a third-party form submission service. Submitted
              data is transmitted securely and governed by Web3Forms&apos; own privacy policy. We use Google
              Tag Manager and Google Analytics 4 to measure site traffic; these services may set cookies
              in accordance with Google&apos;s privacy terms.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">4. Data Retention</h2>
            <p>
              We retain submitted lead information for up to 12 months for the purpose of following up
              on your matching request. If you would like your information removed from our records,
              please contact us at hello@calgaryrealtorfinder.ca and we will delete it within 14 days.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">5. Cookies</h2>
            <p>
              Calgary Realtor Finder uses cookies for analytics purposes via Google Tag Manager. No
              advertising cookies or cross-site tracking cookies are used. You may disable cookies in
              your browser settings; this will not affect your ability to use our matching service.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">6. Your Rights (PIPEDA)</h2>
            <p>
              Under Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA),
              you have the right to access, correct, or request deletion of your personal information
              held by Calgary Realtor Finder. To exercise these rights, contact us at
              hello@calgaryrealtorfinder.ca.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">7. Contact</h2>
            <p>
              Questions about this policy may be directed to:<br />
              Calgary Realtor Finder<br />
              hello@calgaryrealtorfinder.ca
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
