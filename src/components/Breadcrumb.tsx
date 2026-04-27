interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  schema?: string
}

export default function Breadcrumb({ items, schema }: BreadcrumbProps) {
  return (
    <>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      )}
      <nav className="flex items-center gap-2 text-xs text-charcoal/40 mb-8">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span>›</span>}
            {item.href ? (
              <a href={item.href} className="hover:text-accent transition">
                {item.label}
              </a>
            ) : (
              <span className="text-charcoal/70">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
