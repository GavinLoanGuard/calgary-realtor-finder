export type AreaAssignment = {
  agent: string
  email: string
}

// Single source of truth for area-to-agent routing.
// To reassign an area to a new agent: update its object here only. No other code changes needed anywhere.
export function resolveAgent(area: string): AreaAssignment | null {
  const routing: Record<string, AreaAssignment> = {
    'City Centre':   { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
    'Calgary SW':    { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
    'Calgary SE':    { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
    'Calgary South': { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
    'West Calgary':  { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
    'North Calgary': { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
    'NE Calgary':    { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
    'Airdrie':       { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
    'Okotoks':       { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
    'Cochrane':      { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
    'Chestermere':   { agent: 'Nathan Koenigsberg', email: process.env.NATHAN_EMAIL ?? '' },
  }
  return routing[area] ?? null
}
