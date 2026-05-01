export interface RelatedCommunity {
  name: string
  slug: string
  zone: string
  blurb: string
}

export const relatedCommunities: Record<string, RelatedCommunity[]> = {
  'auburn-bay': [
    { name: 'McKenzie Towne', slug: 'mckenzie-towne', zone: 'Calgary SE', blurb: 'Charming SE community with walkable main street and strong resale values.' },
    { name: 'Cranston', slug: 'cranston', zone: 'Calgary SE', blurb: 'Newer SE community with Riverstone estate section and Fish Creek access.' },
    { name: 'Mahogany', slug: 'mahogany', zone: 'Calgary SE', blurb: "Award-winning lake community — Calgary's largest private beach." },
  ],
  'mckenzie-towne': [
    { name: 'Auburn Bay', slug: 'auburn-bay', zone: 'Calgary SE', blurb: 'Popular lake community in SE Calgary with year-round amenities.' },
    { name: 'Cranston', slug: 'cranston', zone: 'Calgary SE', blurb: 'Established SE community with Riverstone luxury section and ravine lots.' },
    { name: 'Copperfield', slug: 'copperfield', zone: 'Calgary SE', blurb: 'Family-friendly SE community with strong value and easy Deerfoot access.' },
  ],
  'cranston': [
    { name: 'Auburn Bay', slug: 'auburn-bay', zone: 'Calgary SE', blurb: 'Lake community neighbouring Cranston with beach club and year-round events.' },
    { name: 'McKenzie Towne', slug: 'mckenzie-towne', zone: 'Calgary SE', blurb: 'Walkable SE community with heritage-inspired architecture and strong community feel.' },
    { name: 'Shawnee Slopes', slug: 'shawnee-slopes', zone: 'Calgary SW', blurb: 'Established Fish Creek community with mature trees and quick Macleod Trail access.' },
  ],
  'canyon-meadows': [
    { name: 'Shawnee Slopes', slug: 'shawnee-slopes', zone: 'Calgary SW', blurb: 'Adjacent Fish Creek community with estate lots and mature landscaping.' },
    { name: 'Arbour Lake', slug: 'arbour-lake', zone: 'Calgary NW', blurb: "NW lake community — one of Calgary's few residential lake communities." },
    { name: 'Cougar Ridge', slug: 'cougar-ridge', zone: 'Calgary SW', blurb: 'Hilltop SW community with mountain views and strong school catchments.' },
  ],
  'cougar-ridge': [
    { name: 'West Springs', slug: 'west-springs', zone: 'Calgary SW', blurb: 'Neighbouring SW community with newer builds and walkable amenities.' },
    { name: 'Discovery Ridge', slug: 'discovery-ridge', zone: 'Calgary SW', blurb: 'Secluded SW community backing Griffith Woods — rare ravine and wildlife corridor.' },
    { name: 'Canyon Meadows', slug: 'canyon-meadows', zone: 'Calgary SW', blurb: 'Established SW community with Fish Creek access and mature lots.' },
  ],
  'west-springs': [
    { name: 'Cougar Ridge', slug: 'cougar-ridge', zone: 'Calgary SW', blurb: 'Hilltop SW neighbour with mountain views and family-oriented streets.' },
    { name: 'Discovery Ridge', slug: 'discovery-ridge', zone: 'Calgary SW', blurb: 'Private SW community backing Griffith Woods Provincial Park.' },
    { name: 'Hamptons', slug: 'hamptons', zone: 'Calgary NW', blurb: 'Established NW community with golf course and strong school options.' },
  ],
  'discovery-ridge': [
    { name: 'West Springs', slug: 'west-springs', zone: 'Calgary SW', blurb: 'Newer SW community with walkable shops and strong family amenities.' },
    { name: 'Cougar Ridge', slug: 'cougar-ridge', zone: 'Calgary SW', blurb: 'Hilltop community with panoramic mountain views and quiet streets.' },
    { name: 'Shawnee Slopes', slug: 'shawnee-slopes', zone: 'Calgary SW', blurb: 'Mature Fish Creek community with established trees and park access.' },
  ],
  'hamptons': [
    { name: 'West Springs', slug: 'west-springs', zone: 'Calgary SW', blurb: 'Popular SW community with newer builds and walkable amenities strip.' },
    { name: 'Arbour Lake', slug: 'arbour-lake', zone: 'Calgary NW', blurb: "One of Calgary's only residential lake communities — NW Calgary." },
    { name: 'Cougar Ridge', slug: 'cougar-ridge', zone: 'Calgary SW', blurb: 'Views community with mountain sightlines and strong resale demand.' },
  ],
  'shawnee-slopes': [
    { name: 'Canyon Meadows', slug: 'canyon-meadows', zone: 'Calgary SW', blurb: 'Neighbouring Fish Creek community with mature lots and established schools.' },
    { name: 'Cranston', slug: 'cranston', zone: 'Calgary SE', blurb: 'SE community with Riverstone estate section and Fish Creek Park access.' },
    { name: 'Discovery Ridge', slug: 'discovery-ridge', zone: 'Calgary SW', blurb: 'Secluded SW ravine community backing Griffith Woods.' },
  ],
  'arbour-lake': [
    { name: 'Hamptons', slug: 'hamptons', zone: 'Calgary NW', blurb: 'Established NW golf course community with strong school catchments.' },
    { name: 'West Springs', slug: 'west-springs', zone: 'Calgary SW', blurb: 'Popular SW community with newer builds and walkable amenities.' },
    { name: 'Cougar Ridge', slug: 'cougar-ridge', zone: 'Calgary SW', blurb: 'Hilltop SW community with mountain views and family-friendly streets.' },
  ],
  'mahogany': [
    { name: 'Auburn Bay', slug: 'auburn-bay', zone: 'Calgary SE', blurb: 'Neighbouring SE lake community with beach club and year-round amenities.' },
    { name: 'Cranston', slug: 'cranston', zone: 'Calgary SE', blurb: 'Established SE community with Riverstone estate section and Fish Creek access.' },
    { name: 'McKenzie Towne', slug: 'mckenzie-towne', zone: 'Calgary SE', blurb: 'Charming SE community with walkable main street and strong resale values.' },
  ],
  'copperfield': [
    { name: 'McKenzie Towne', slug: 'mckenzie-towne', zone: 'Calgary SE', blurb: 'Charming SE community with walkable main street and strong resale values.' },
    { name: 'Auburn Bay', slug: 'auburn-bay', zone: 'Calgary SE', blurb: 'Popular SE lake community with year-round beach club amenities.' },
    { name: 'Mahogany', slug: 'mahogany', zone: 'Calgary SE', blurb: "Calgary's largest private lake community — award-winning SE neighbourhood." },
  ],
  'evergreen': [
    { name: 'Shawnee Slopes', slug: 'shawnee-slopes', zone: 'Calgary SW', blurb: 'Adjacent Fish Creek community with estate lots and mature landscaping.' },
    { name: 'Canyon Meadows', slug: 'canyon-meadows', zone: 'Calgary SW', blurb: 'Established SW community with Fish Creek access and mature lots.' },
    { name: 'Discovery Ridge', slug: 'discovery-ridge', zone: 'Calgary SW', blurb: 'Secluded SW ravine community backing Griffith Woods Provincial Park.' },
  ],
}
