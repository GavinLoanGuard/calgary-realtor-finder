export default function AgentProfile() {
  return (
    <section className="bg-white py-20 px-8 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto">
        <p className="font-inter text-accent text-xs tracking-widest uppercase">Your Calgary REALTOR®</p>
        <h2 className="font-playfair text-4xl text-primary font-bold mt-2">
          Nathan Koenigsberg
        </h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Photo placeholder */}
          <div className="flex flex-col items-center">
            <div
              className="w-48 h-48 rounded-full bg-charcoal/10 flex items-center justify-center border-2 border-dashed border-charcoal/20"
              aria-label="Agent photo placeholder"
            >
              <span className="font-inter text-charcoal/30 text-xs text-center px-4 leading-relaxed">
                AGENT PHOTO — replace with /images/nathan.jpg before launch
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="font-inter rounded-full border text-xs px-3 py-1 font-medium bg-accent/10 text-accent border-accent/20">
                ◆ RE/MAX FIRST
              </span>
              <span className="font-inter rounded-full border text-xs px-3 py-1 font-medium bg-primary/10 text-primary border-primary/20">
                ● 403-536-9024
              </span>
            </div>

            <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-1">Coverage</p>
            <p className="font-inter text-charcoal/70 text-sm mb-5">
              City Centre · West · South · South East · Okotoks
            </p>

            <p className="font-inter text-charcoal/70 text-base leading-relaxed">
              Nathan Koenigsberg is a Calgary real estate specialist with RE/MAX First, serving buyers
              and sellers across Calgary&apos;s inner city, west, south, and south east communities. With
              deep expertise in Calgary&apos;s established and newer communities alike, Nathan brings a
              client-focused approach to every transaction.
            </p>

            <div className="mt-6">
              <a
                href="#lead-form"
                className="inline-block font-inter bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-sm transition-colors"
              >
                Connect with Nathan →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
