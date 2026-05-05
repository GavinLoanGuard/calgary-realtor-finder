export type AreaStatus = 'active' | 'waitlist'

export interface Area {
  slug: string
  name: string
  zone: string
  status: AreaStatus
  agent?: string
  communities: string[]
}

export const areas: Area[] = [
  {
    slug: 'city-centre',
    name: 'City Centre Calgary',
    zone: 'City Centre',
    status: 'active',
    agent: 'Nathan Koenigsberg',
    communities: [
      'Beltline', 'Downtown Core', 'East Village', 'Eau Claire', 'Chinatown',
      'Mission', 'Cliff Bungalow', 'Lower Mount Royal', 'Upper Mount Royal',
      'Hillhurst', 'West Hillhurst', 'Sunnyside', 'Rosedale', 'Bridgeland',
      'Riverside', 'Inglewood', 'Ramsay', 'Parkhill', 'Erlton',
      'Bankview', 'Scarboro', 'Sunalta', 'Shaganappi', 'Rutland Park',
      'Killarney/Glengarry', 'Altadore', 'Garrison Woods', 'South Calgary',
      'Windsor Park', 'Elbow Park', 'Meadowlark Park', 'Roxboro', 'Rideau Park',
      'Elboya', 'Britannia', 'Mayfair', 'Bel-Aire', 'Pump Hill', 'Palliser',
      'Haysboro', 'Kingsland', 'Fairview', 'Acadia', 'Willow Park'
    ]
  },
  {
    slug: 'west-calgary',
    name: 'West Calgary',
    zone: 'West',
    status: 'active',
    agent: 'Nathan Koenigsberg',
    communities: [
      'Springbank Hill', 'Signal Hill', 'Aspen Woods', 'Coach Hill',
      'Strathcona Park', 'Discovery Ridge', 'Patterson', 'Cougar Ridge',
      'West Springs', 'Christie Park', 'Westgate', 'Glamorgan',
      'Glenbrook', 'Glendale', 'Rutland Park', 'Rosscarrock',
      'Spruce Cliff', 'Valley Ridge', 'Greenwood/Greenbriar',
      'Crestmont', 'Rocky Ridge', 'Royal Oak', 'Tuscany',
      'Scenic Acres', 'Ranchlands', 'Hawkwood', 'Arbour Lake',
      'Citadel', 'Hamptons', 'Edgemont', 'Silver Springs',
      'Bowness', 'Montgomery', 'University District', 'Varsity',
      'Dalhousie', 'Charleswood', 'Collingwood', 'University Heights',
      'St. Andrews Heights', 'Parkdale', 'Point McKay', 'Wildwood',
      'Lakeview', 'North Glenmore Park', 'CFB Currie', 'Garrison Green',
      'Lincoln Park', 'Oakridge', 'Woodbine', 'Cedarbrae',
      'Braeside', 'Eagle Ridge', 'Bayview'
    ]
  },
  {
    slug: 'south-calgary',
    name: 'South Calgary',
    zone: 'South',
    status: 'active',
    agent: 'Nathan Koenigsberg',
    communities: [
      'Shawnee Slopes', 'Millrise', 'Evergreen', 'Shawnessy',
      'Somerset', 'Silverado', 'Sundance', 'Chaparral', 'Legacy',
      'Walden', 'Wolf Willow', 'Midnapore', 'Bridlewood',
      'MacEwan Glen', 'Canyon Meadows', 'Woodlands', 'Bonavista Downs',
      'Lake Bonavista', 'Queensland', 'Deer Ridge', 'Deer Run',
      'Parkland', 'Diamond Cove', 'Pine Creek', 'Belmont',
      'Yorkville', 'Keystone Hills', 'Southwood', 'Haysboro',
      'Willow Park', 'Maple Ridge', 'Southview', 'Riverbend',
      'Ogden', 'Lynnwood', 'Inglewood', 'Auburn Bay'
    ]
  },
  {
    slug: 'south-east-calgary',
    name: 'South East Calgary',
    zone: 'South East',
    status: 'active',
    agent: 'Nathan Koenigsberg',
    communities: [
      'Auburn Bay', 'Mahogany', 'Seton', 'Cranston', 'McKenzie Lake',
      'McKenzie Towne', 'New Brighton', 'Copperfield', 'Douglasdale/Glen',
      'Quarry Park', 'Riverbend', 'Ogden', 'Forest Lawn',
      'Albert Park/Radisson Heights', 'Erin Woods', 'Dover',
      'Forest Heights', 'Penbrooke Meadows', 'Applewood Park',
      'Coral Springs', 'Monterey Park', 'Sunridge', 'Temple',
      'Pineridge', 'Rundle', 'Whitehorn', 'Falconridge',
      'Castleridge', 'Martindale', 'Taradale', 'Saddle Ridge',
      'Redstone', 'Cityscape', 'Cornerstone', 'Rangeview',
      'Homestead', 'Hotchkiss'
    ]
  },
  {
    slug: 'okotoks',
    name: 'Okotoks',
    zone: 'Okotoks',
    status: 'active',
    agent: 'Nathan Koenigsberg',
    communities: ['Okotoks']
  },
  {
    slug: 'north-calgary',
    name: 'North Calgary',
    zone: 'North',
    status: 'active',
    communities: [
      'Panorama Hills', 'Country Hills', 'Country Hills Village',
      'Coventry Hills', 'Harvest Hills', 'Hidden Valley', 'Sandstone Valley',
      'Beddington Heights', 'Huntington Hills', 'North Haven',
      'Thorncliffe', 'Highwood', 'Cambrian Heights', 'Capitol Hill',
      'Rosemont', 'Highland Park', 'Tuxedo Park', 'Mount Pleasant',
      'Livingston', 'Carrington', 'Ambleton', 'Evanston',
      'Kincora', 'Sage Hill', 'Nolan Hill', 'Sherwood',
      'Symons Valley Ranch', 'NolanHill', 'Glacier Ridge', 'Alpine Park'
    ]
  },
  {
    slug: 'north-east-calgary',
    name: 'North East Calgary',
    zone: 'North East',
    status: 'active',
    communities: [
      'Skyview Ranch', 'Saddle Ridge', 'Taradale', 'Martindale',
      'Castleridge', 'Falconridge', 'Whitehorn', 'Temple', 'Pineridge',
      'Rundle', 'Marlborough', 'Marlborough Park', 'Mayland Heights',
      'Vista Heights', 'Abbeydale', 'Coral Springs', 'Monterey Park',
      'McCall', 'Greenview', 'Cityscape', 'Redstone', 'Cornerstone',
      'Homestead', 'Ricardo Ranch', 'Belvedere', 'Hotchkiss'
    ]
  },
  {
    slug: 'airdrie',
    name: 'Airdrie',
    zone: 'Airdrie',
    status: 'active',
    communities: ['Airdrie']
  },
  {
    slug: 'cochrane',
    name: 'Cochrane',
    zone: 'Cochrane',
    status: 'active',
    communities: ['Cochrane']
  },
  {
    slug: 'chestermere',
    name: 'Chestermere',
    zone: 'Chestermere',
    status: 'active',
    communities: ['Chestermere']
  }
]

export const activeAreas = areas.filter(a => a.status === 'active')
export const waitlistAreas = areas.filter(a => a.status === 'waitlist')
