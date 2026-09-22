import { img } from './images';
import { SITE, TEAM, BANNERS } from './site';
import { HOME_BLOG_POSTS } from './blog';
import { UPCOMING_EVENTS, PAST_EVENTS } from './events';

export const PHILOSOPHY_QUOTE = 'Peace begins within.';

export const ABOUT_CHAPTERS = [
  {
    num: '01',
    title: 'Origin',
    text: `${SITE.name} was founded in 2017, inspired by Yogiraj Vethathiri Maharishi, to carry forward a timeless vision of spiritual awakening in Coimbatore.`,
    image: img('about1'),
  },
  {
    num: '02',
    title: 'Philosophy',
    text: `Our guiding principle — "${SITE.tagline}" — invites every seeker to discover harmony within before radiating peace to the world.`,
    image: img('mahaan'),
  },
  {
    num: '03',
    title: 'Service',
    text: 'Through yoga, meditation, satsang, and holistic teachings, the Trust guides individuals on paths of self-discovery and inner calm.',
    image: img('about2'),
  },
  {
    num: '04',
    title: 'Future',
    text: 'We are building Vethathiri Maharishi Spiritual Village — a peaceful retreat for meditation, health, and enlightenment in Marisettipathi.',
    image: img('villagePlan'),
  },
];

export const PURPOSE_STATEMENTS = [
  'Guide seekers toward self-realization through the teachings of Yogiraj Vethathiri Maharishi.',
  'Offer yoga, meditation, and satsang as pathways to inner peace and clarity.',
  'Build a spiritual village where community, nature, and devotion come together.',
];

export const PROGRAMS = [
  {
    icon: 'fas fa-spa',
    title: 'Yoga & Meditation',
    text: 'Workshops, meditation sessions, and discourses guiding individuals on a path of self-discovery.',
    image: img('galleryPreview1'),
    href: '/courses',
  },
  {
    icon: 'fas fa-tree',
    title: 'Spiritual Village',
    text: 'Building Vethathiri Maharishi Spiritual Village — a peaceful retreat for meditation and enlightenment.',
    image: img('villagePlan'),
    href: '/our-village',
  },
  {
    icon: 'fas fa-hands',
    title: 'Join Satsang',
    text: 'Connect with the Guru, experience divine love and grace. Join our community for spiritual updates.',
    image: img('galleryPreview3'),
    href: '/contact',
  },
  {
    icon: 'fas fa-book-open',
    title: 'Teachings',
    text: 'Self-realization trainings guiding individuals to understand their true nature beyond body and mind.',
    image: img('serviceTeachings'),
    href: '/services',
  },
];

export const JOURNEY_STAGES = [
  {
    label: 'Discover',
    title: 'Begin Your Path',
    text: 'Explore the teachings of Vethathiri Maharishi and discover a way of living rooted in peace and awareness.',
    image: img('banner1'),
  },
  {
    label: 'Practice',
    title: 'Yoga & Meditation',
    text: 'Engage in yoga, meditation, and satsang — daily practices that calm the mind and awaken the spirit.',
    image: img('banner2'),
  },
  {
    label: 'Transform',
    title: 'Inner Change',
    text: 'Through self-realization and holistic teachings, transform stress into serenity and confusion into clarity.',
    image: img('meditationHall'),
  },
  {
    label: 'Serve',
    title: 'Community & Village',
    text: 'Join hands in building the spiritual village vision — serving elders, community, and the path of peace.',
    image: img('construction'),
  },
];

export const FOUNDER = {
  ...TEAM[0],
  image: img(TEAM[0].image),
  quote: '"World Peace through Individual Peace begins with one awakened heart."',
  since: '2017',
};

export const SCROLL_QUOTES = [
  SITE.tagline,
  'Meditation is the conscious creation of inner peace.',
  'Yoga can actually make you happier — naturally and deeply.',
];

export const IMPACT_STATS = [
  { value: 2, suffix: 'M', label: 'People Reached' },
  { value: 25, suffix: '+', label: 'Mentors' },
  { value: 254, suffix: '+', label: 'Community' },
  { value: 10, suffix: '+', label: 'Services' },
];

export const GALLERY_ITEMS = [
  { image: img('galleryPreview1'), title: 'Foundation Course', tag: 'Foundation Course' },
  { image: img('galleryPreview2'), title: 'Foundation Course', tag: 'Foundation Course' },
  { image: img('galleryPreview3'), title: 'Event Photos', tag: 'Event Photos' },
  { image: img('galleryPreview4'), title: 'Event Photos', tag: 'Event Photos' },
  { image: img('about1'), title: 'Spiritual Village', tag: 'Village' },
  { image: img('about2'), title: 'Meditation Hall', tag: 'Meditation' },
];

export const EVENTS_LIST = [...UPCOMING_EVENTS, ...PAST_EVENTS.slice(0, 2)];

export const DONATION_CTA = {
  headline: "Your support becomes someone's new beginning.",
  text: 'Help us build the spiritual village, meditation hall, and community programs that touch lives across Coimbatore and beyond.',
  image: img('banner3'),
};

export const HERO = {
  title: SITE.name,
  subtitle: SITE.tagline,
  text: 'A journey of yoga, meditation, and spiritual awakening in the foothills of Coimbatore.',
  image: img(BANNERS[0].image),
  cta: { label: 'Explore the Journey', path: '/about' },
};

export const FOOTER_TAGLINE = 'Peace · Harmony · Wisdom';

export const BLOG_POSTS = HOME_BLOG_POSTS.map((post) => ({
  ...post,
  image: img(post.image),
}));
