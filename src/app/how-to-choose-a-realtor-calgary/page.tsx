import { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'How to Choose a Realtor in Calgary | Calgary Realtor Finder Guide',
  description:
    'A practical guide to choosing the right Calgary realtor. What to look for, questions to ask, how to verify RECA licensing, and red flags to avoid.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/how-to-choose-a-realtor-calgary',
  },
  openGraph: {
    title: 'How to Choose a Realtor in Calgary | Calgary Realtor Finder Guide',
    description:
      'A practical guide to choosing the right Calgary realtor. What to look for, questions to ask, how to verify RECA licensing, and red flags to avoid.',
    url: 'https://calgaryrealtorfinder.ca/how-to-choose-a-realtor-calgary',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function HowToChooseRealtorPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'How to Choose a Realtor in Calgary' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Calgary', 51.0447, -114.0719),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Resources', url: 'https://calgaryrealtorfinder.ca/resources' },
      {
        name: 'How to Choose a Realtor in Calgary',
        url: 'https://calgaryrealtorfinder.ca/how-to-choose-a-realtor-calgary',
      },
    ]),
    faqSchema([
      {
        question: 'What should I look for in a Calgary realtor?',
        answer:
          'Three things matter most: current RECA licensing (verifiable on the RECA public registry), neighbourhood-specific transaction history in your target area, and communication style. A great agent for McKenzie Towne may not be the right fit for Tuscany — local expertise at the neighbourhood level matters more than total volume.',
      },
      {
        question: 'What questions should I ask a realtor before hiring them?',
        answer:
          "Ask how many transactions they've closed in your specific neighbourhood in the last 12 months. Ask what their average days on market is for listings. Ask how they communicate — phone, text, email — and how quickly they respond. Ask for references from clients in your price range. Ask whether they work alone or with a team, and who you'll actually be dealing with.",
      },
      {
        question: "How do I verify a Calgary realtor's license?",
        answer:
          "Visit the RECA public registry at reca.ca and search by the agent's name. You'll see their current license status, brokerage affiliation, license type, and any disciplinary history. Every agent we feature has been verified through this registry before being introduced.",
      },
      {
        question: 'What are red flags when choosing a Calgary realtor?',
        answer:
          'Be cautious of agents who claim to serve all of Calgary without neighbourhood specialization, agents who pressure you to make quick decisions, agents who suggest listing prices significantly higher than comparable sales support, agents who are slow to respond during the initial introduction phase, and agents who cannot provide references from recent transactions in your area.',
      },
    ]),
  ])

  const questions = [
    'How many transactions have you closed in [my target neighbourhood] in the last 12 months?',
    'What is your average sale-to-list price ratio for listings in the last year?',
    'What is your average days on market for listings?',
    'Who will I actually be working with — you personally, or members of your team?',
    'How do you communicate — email, text, phone — and what is your typical response time?',
    'Can you provide three references from recent clients in my price range?',
    'What is your commission rate and what does it include?',
    'Have you had any complaints filed with RECA?',
  ]

  const redFlags = [
    {
      flag: 'Pressure to sign immediately',
      detail: "A good agent won't pressure you to sign a representation agreement on the first meeting.",
    },
    {
      flag: 'Inflated list price suggestions',
      detail:
        'Agents who suggest prices significantly above comparable sales are often trying to win the listing, not sell your home.',
    },
    {
      flag: '"I serve all of Calgary"',
      detail:
        "Calgary is too large and varied for any agent to be equally expert everywhere. Vague territory claims signal lack of specialization.",
    },
    {
      flag: 'Slow initial response',
      detail:
        "How an agent responds to your first inquiry tells you exactly how they'll respond when you need them during a live transaction.",
    },
    {
      flag: 'No references available',
      detail:
        'An experienced agent has dozens of satisfied clients. Inability to provide references quickly is a serious warning sign.',
    },
    {
      flag: 'Unclear commission structure',
      detail:
        'All compensation should be clearly stated upfront. Vague answers about commission are a red flag.',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          How to Choose a Realtor in Calgary
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Choosing the right Calgary REALTOR® is one of the most important financial decisions
          you&apos;ll make. This guide covers what to look for, what to ask, how to verify credentials,
          and what separates a great agent from an average one in the Calgary market specifically.
        </p>

        <div className="mt-12 space-y-10">
          <div className="space-y-6 text-charcoal/70 leading-relaxed">
            <h2 className="font-playfair text-2xl font-bold text-primary">
              Step 1 — Verify Their RECA License
            </h2>
            <p>
              Every practicing real estate agent in Alberta must hold a current license issued by
              the Real Estate Council of Alberta (RECA). This is non-negotiable. Visit reca.ca,
              search the public registry by the agent&apos;s name, and confirm their license is active,
              their brokerage affiliation is current, and their license type covers the transaction
              you&apos;re undertaking (residential, commercial, property management).
            </p>
            <p>
              The registry also shows any disciplinary history. An agent with past complaints
              isn&apos;t automatically disqualified — context matters — but you deserve to know before
              signing a representation agreement.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-primary">
              Step 2 — Look for Neighbourhood-Specific Experience
            </h2>
            <p>
              The most important question you can ask a Calgary REALTOR® isn&apos;t &ldquo;how many homes
              have you sold?&rdquo; — it&apos;s &ldquo;how many homes have you sold in [your specific neighbourhood]
              in the last 24 months?&rdquo; A high-volume agent who works across all of Calgary may know
              less about the specific streets, school catchments, and micro-market dynamics of
              Mahogany or Tuscany than a lower-volume agent who focuses there exclusively.
            </p>
            <p>
              Ask for a list of recent sales in your target community. Any experienced agent will
              provide this immediately. If they hesitate or redirect to general Calgary statistics,
              that&apos;s your answer.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-primary">
              Step 3 — Check Their Sale-to-List Price Ratio
            </h2>
            <p>
              For sellers, the most important metric is how close to (or above) list price the
              agent achieves on their listings. An agent consistently selling at 97–98% of list
              price is underperforming compared to one achieving 100–103% in the same market
              conditions. Ask for their average days on market and average sale-to-list ratio over
              the last 12 months — any serious agent tracks these numbers.
            </p>
            <p>
              For buyers, look for an agent with a track record of successful offers in competitive
              situations. In Calgary&apos;s active neighbourhoods, many properties still see multiple
              offer scenarios. An agent who knows how to write a competitive offer — escalation
              clauses, clean conditions, strategic deposit amounts — is worth significantly more
              than one who doesn&apos;t.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-primary">
              Step 4 — Interview at Least Two Agents
            </h2>
            <p>
              Most buyers and sellers work with the first agent they meet. This is almost always a
              mistake. Interview a minimum of two agents — ideally three — and ask each the same
              set of questions. The differences in how they answer will tell you more than the
              content of any single answer.
            </p>

            <div className="bg-charcoal/5 rounded-sm p-6 border border-charcoal/10">
              <p className="font-playfair text-lg font-bold text-primary mb-4">
                Questions to ask every Calgary realtor:
              </p>
              <ol className="space-y-3">
                {questions.map((q, i) => (
                  <li key={i} className="flex gap-3 text-charcoal/70 text-sm leading-relaxed">
                    <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
            </div>

            <h2 className="font-playfair text-2xl font-bold text-primary">
              Step 5 — Understand What You&apos;re Signing
            </h2>
            <p>
              Before your agent can represent you, you&apos;ll sign a representation agreement. For
              buyers this is a Buyer Representation Agreement (BRA) — it specifies the term of the
              relationship, the agent&apos;s compensation, and the scope of their duties. For sellers
              it&apos;s a Listing Agreement.
            </p>
            <p>
              Read these documents carefully. Pay attention to the term length — most are 90 days,
              some are longer. Understand the cancellation provisions. Ensure the commission
              structure is clearly stated. A trustworthy agent will walk you through every line
              before asking you to sign.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-primary">
              Red Flags to Watch For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {redFlags.map((item, i) => (
                <div key={i} className="border border-red-100 rounded-sm p-4 bg-red-50/50">
                  <p className="text-red-800 font-semibold text-sm">⚠ {item.flag}</p>
                  <p className="text-charcoal/60 text-xs mt-2 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-sm p-8 text-white">
            <p className="text-accent text-xs uppercase tracking-widest font-medium">
              Skip the research
            </p>
            <h2 className="font-playfair text-2xl font-bold mt-2">
              We&apos;ve already done the vetting for you.
            </h2>
            <p className="text-white/70 mt-3 leading-relaxed">
              Our featured REALTOR® has been independently verified for RECA license status,
              neighbourhood transaction history, and client satisfaction. Fill out our form and
              we&apos;ll make the introduction.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-sm transition"
            >
              Get Matched Free →
            </Link>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
