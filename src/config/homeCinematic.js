import { img } from './images';
import { ALL_SERVICES } from './services';
import { UPCOMING_EVENTS, PAST_EVENTS } from './events';
import { GALLERY_ITEMS, gallerySrc } from './gallery';
import { SITE, TEAM } from './site';

export const HOME_SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'about', label: 'About' },
  { id: 'purpose', label: 'Purpose' },
  { id: 'programs', label: 'Programs' },
  { id: 'journey', label: 'Journey' },
  { id: 'founder', label: 'Founder' },
  { id: 'quotes', label: 'Quotes' },
  { id: 'impact', label: 'Impact' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'events', label: 'Events' },
  { id: 'donate', label: 'Donate' },
  { id: 'contact', label: 'Contact' },
  { id: 'footer', label: 'Footer' },
];

export const ABOUT_CHAPTERS = [
  {
    num: '01',
    title: 'Origin',
    text: 'Founded in 2017, inspired by Yogiraj Vethathiri Maharishi — a sanctuary for seekers in Coimbatore.',
    image: img('about1'),
  },
  {
    num: '02',
    title: 'Philosophy',
    text: 'World Peace through Individual Peace — guiding each soul toward inner harmony and universal compassion.',
    image: img('mahaan'),
  },
  {
    num: '03',
    title: 'Service',
    text: 'Yoga, meditation, satsang, and community outreach touching lives across the globe.',
    image: img('meditationHall'),
  },
  {
    num: '04',
    title: 'Future',
    text: 'Building Vethathiri Maharishi Spiritual Village — a retreat for enlightenment and elder care.',
    image: img('villagePlan'),
  },
];

export const PURPOSE_STATEMENTS = [
  {
    title: 'Inner Peace',
    text: 'Through yoga and meditation, we guide individuals on a path of self-discovery and stillness.',
    image: img('meditationHall'),
  },
  {
    title: 'Community',
    text: 'Satsang, courses, and village life nurture connection, devotion, and shared spiritual growth.',
    image: img('aboutGroup'),
  },
  {
    title: 'Legacy',
    text: 'Honouring Maharishi\'s vision with integrity — a trust dedicated to world peace and service.',
    image: img('history'),
  },
];

export const HOME_PROGRAMS = ALL_SERVICES.slice(0, 4).map((s) => ({
  title: s.title,
  category: s.category,
  excerpt: s.excerpt.slice(0, 120) + '…',
  image: img(s.image),
  path: '/services',
}));

export const JOURNEY_STAGES = [
  {
    stage: 'Discover',
    title: 'Awaken curiosity',
    text: 'Begin with foundation courses, satsang, and the teachings of simplified yoga.',
    image: img('serviceTeachings'),
  },
  {
    stage: 'Practice',
    title: 'Deepen your path',
    text: 'Meditation, Mano Nirvan Kriya, and daily awareness build lasting inner strength.',
    image: img('serviceMeditation'),
  },
  {
    stage: 'Transform',
    title: 'Realize your nature',
    text: 'Self-realization trainings reveal clarity beyond body, mind, and worldly turbulence.',
    image: img('serviceSelfRealization'),
  },
  {
    stage: 'Serve',
    title: 'Give back with grace',
    text: 'Support the village, mentor seekers, and carry peace into every community you touch.',
    image: img('serviceDonation'),
  },
];

export const HOME_QUOTES = [
  { text: 'Peace begins within.', author: 'Vetham Spiritual Trust' },
  { text: 'World Peace through Individual Peace.', author: 'Yogiraj Vethathiri Maharishi' },
  { text: 'Stillness is the gateway to wisdom.', author: 'Gnana Rishi A S Rathakrishnan' },
];

export const IMPACT_STATS = [
  { value: 2017, suffix: '', label: 'Founded', display: '2017' },
  { value: 2, suffix: 'M+', label: 'Lives touched', display: null },
  { value: 10, suffix: '+', label: 'Programs', display: null },
  { value: 254, suffix: '+', label: 'Communities', display: null },
];

export const HOME_GALLERY = GALLERY_ITEMS.slice(0, 8).map((g) => ({
  title: g.title,
  label: g.label,
  src: gallerySrc(g.file),
}));

export const HOME_EVENTS = [...UPCOMING_EVENTS, ...PAST_EVENTS.slice(0, 2)].map((e) => ({
  badge: e.badge,
  title: e.title,
  date: e.period || e.date || '',
  description: e.description,
  path: e.cta?.path || '/events',
  cta: e.cta?.label || 'Explore',
}));

export const FOUNDER = TEAM[0];

export { SITE };
