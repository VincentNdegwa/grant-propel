import iconSearch from '../assets/icons/icon-search.svg'
import iconClipboard from '../assets/icons/icon-clipboard.svg'
import iconCalendar from '../assets/icons/icon-calendar.svg'
import iconBook from '../assets/icons/icon-book.svg'
import iconHandshake from '../assets/icons/icon-handshake.svg'
import iconGrowth from '../assets/icons/icon-growth.svg'
import iconGlobe from '../assets/icons/icon-globe.svg'
import badgeHeart from '../assets/icons/badge-heart.svg'
import badgeStore from '../assets/icons/badge-store.svg'
import photoNonprofits from '../assets/photos/nonprofits.jpg'
import photoSmallBusiness from '../assets/photos/small-business.jpg'

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Resources', href: '#resources' },
]

export const ORG_TYPES = [
  { value: 'small-business', label: 'Small business' },
  { value: 'nonprofit', label: 'Nonprofit' },
]

export const FEATURES = [
  {
    icon: iconSearch,
    title: 'Opportunities worth a look.',
    body: 'Grants open to organizations like yours, not every listing we can find.',
  },
  {
    icon: iconClipboard,
    title: 'Eligibility in plain language.',
    body: 'Who can apply, who can’t, and the fine print that usually disqualifies people.',
  },
  {
    icon: iconCalendar,
    title: 'Deadlines with runway.',
    body: 'Enough notice to prepare an application, not just enough to panic.',
  },
  {
    icon: iconBook,
    title: 'Guidance on applying.',
    body: 'Practical breakdowns of what reviewers look for and how applications get scored.',
  },
]

export const AUDIENCES = [
  {
    id: 'nonprofit',
    title: 'Nonprofits',
    body: 'Grants open to nonprofits like yours, with the detail you need to judge fit before you commit staff time to an application.',
    photo: photoNonprofits,
    photoAlt: 'Three volunteers packing grocery bags at a community food drive',
    badge: badgeHeart,
  },
  {
    id: 'small-business',
    title: 'Small Businesses',
    body: 'Grants open to for-profit businesses like yours, with the eligibility details laid out so you can judge fit quickly.',
    photo: photoSmallBusiness,
    photoAlt: 'A smiling bakery owner in an apron standing behind his counter',
    badge: badgeStore,
  },
]

export const DIFFERENCES = [
  {
    icon: iconHandshake,
    title: 'We explain the fine print.',
    body: 'Eligibility rules written in plain language, so you know where you stand before you apply.',
  },
  {
    icon: iconGrowth,
    title: 'We tell you when to pass.',
    body: 'Some grants aren’t worth the hours. We’d rather say so than send you after them.',
  },
  {
    icon: iconGlobe,
    title: 'We check before we send.',
    body: 'Deadlines and eligibility are confirmed against the funder’s own source before an opportunity goes out.',
  },
]

export const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
]
