import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Calgary Realtor Finder',
  description: 'Terms of service for Calgary Realtor Finder. Conditions governing use of our free realtor matching service.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-20">
        <h1 className="font-playfair text-4xl font-bold text-primary">Terms of Service</h1>
        <p className="font-inter text-charcoal/50 text-sm mt-2">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 font-inter text-charcoal/70 text-base leading-relaxed">
          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">1. Service Description</h2>
            <p>
              Calgary Realtor Finder operates a free referral and matching service that connects home
              buyers and sellers with licensed REALTORS® in Calgary and surrounding communities. We do
              not directly provide real estate services and are not a brokerage. All REALTORS® introduced
              through our service are independently licensed through the Real Estate Council of Alberta.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">2. No Fee to Users</h2>
            <p>
              Our matching service is free to buyers and sellers. Calgary Realtor Finder receives a
              referral fee from the REALTOR® only upon the successful closing of a real estate transaction.
              You are under no obligation to work with any agent we introduce, and no fee is charged to
              you at any stage.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">3. No Guarantee of Results</h2>
            <p>
              While we make reasonable efforts to match you with a suitable REALTOR®, we do not guarantee
              that any specific agent will be available, that a transaction will close, or that any
              particular outcome will be achieved. Real estate transactions are subject to market
              conditions, financing, and other factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">4. Calculator Tools — Disclaimer</h2>
            <p>
              The mortgage affordability calculator and commission calculator provided on this website
              are for informational and illustrative purposes only. Results are estimates based on
              simplified assumptions and do not constitute financial, mortgage, or legal advice. Actual
              mortgage qualification depends on lender assessment, credit score, existing debts, and
              current rates. Consult a licensed mortgage broker and financial advisor before making any
              real estate purchase decision.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">5. Regulatory Compliance</h2>
            <p>
              All advertising and marketing on this website is intended to comply with the Real Estate
              Council of Alberta&apos;s advertising standards. If you believe any content on this site
              violates industry guidelines, please contact us at hello@calgaryrealtorfinder.ca.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">6. Intellectual Property</h2>
            <p>
              All content on this website — including text, neighbourhood descriptions, and calculator
              tools — is the property of Calgary Realtor Finder and may not be reproduced without
              permission. The REALTOR® trademark is owned by the Canadian Real Estate Association (CREA)
              and is used with permission.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Province of Alberta and the federal laws of
              Canada applicable therein. Any disputes arising under these terms shall be subject to the
              exclusive jurisdiction of the courts of Alberta.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-primary font-semibold mb-3">8. Contact</h2>
            <p>
              Questions about these terms may be directed to:<br />
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
