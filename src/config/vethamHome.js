import { img } from './images';
import { SITE, TEAM, BANNERS } from './site';
import { HOME_BLOG_POSTS } from './blog';

export function mht(path) {
  return `/maharatri/${path.replace(/^\//, '')}`;
}

export const TICKER_ITEMS = [
  'World Peace',
  'Individual Peace',
  'Meditation',
  'Yoga',
  'Satsang',
  'Self-Realization',
  'Vethathiri Maharishi',
  'Spiritual Village',
  'Inner Peace',
  'Enlightenment',
  'Kundalini Yoga',
  'Divine Grace',
];

function bannerToSlide(banner) {
  return {
    subtitle: banner.subtitle,
    title: banner.title,
    cta: banner.cta.label,
    ctaPath: banner.cta.path,
    image: img(banner.image),
  };
}

export const HERO_SLIDES_1 = BANNERS.slice(0, 2).map(bannerToSlide);

export const HERO_SLIDES_2 = [
  bannerToSlide(BANNERS[2]),
  {
    subtitle: 'Spiritual Village',
    title: 'Join The Community For Enlightenment',
    cta: 'Donate Now',
    ctaPath: '/donate',
    image: img('feature1'),
  },
];

export const ABOUT_INTRO = {
  subtitle: 'Our Story & Trust',
  title: 'Building a Legacy of Integrity and Excellence',
  text: `${SITE.name}, founded in 2017 and inspired by Yogiraj Vethathiri Maharishi, is dedicated to the vision of "${SITE.tagline}." The Trust has touched countless lives around the globe, guiding individuals on their spiritual journeys.`,
  image1: img('about1'),
  image2: img('about2'),
};

export const ABOUT_FEATURES = [
  'Yoga & Meditation',
  'Spiritual Village',
  'Join Satsang',
  'World Peace Mission',
];

export const SERVICES = [
  {
    icon: 'flaticon-temple',
    title: 'Yoga & Meditation',
    text: 'Workshops, meditation sessions, and discourses guiding individuals on a path of self-discovery.',
    href: '/courses',
    variant: 'white',
  },
  {
    icon: 'flaticon-arti',
    title: 'Spiritual Village',
    text: 'Building Vethathiri Maharishi Spiritual Village — a peaceful retreat for meditation and enlightenment.',
    href: '/our-village',
    variant: 'primary',
  },
  {
    icon: 'flaticon-pooja',
    title: 'Join Satsang',
    text: 'Connect with the Guru, experience divine love and grace. Join our WhatsApp group for updates.',
    href: '/contact',
    variant: 'secondary',
  },
];

export const ABOUT_COUNTER = {
  subtitle: 'What We Do',
  title: 'Spiritual Growth & Enlightenment in Coimbatore',
  text: 'Through yoga, meditation, and holistic teachings, the Trust guides seekers toward inner peace and self-realization.',
  image: img('mahaan'),
  counterValue: 9,
  counterLabel: 'Years of Service',
};

export const ICON_BLOCKS = [
  {
    icon: 'flaticon-temple',
    title: 'Yoga & Meditation',
    text: 'Through yoga, meditation, and holistic teachings for inner peace.',
  },
  {
    icon: 'flaticon-powder-1',
    title: 'Spiritual Village',
    text: 'A sanctuary for spiritual tranquility and connection with nature.',
  },
];

export const DONATIONS = [
  {
    image: img('villagePlan'),
    title: 'Vethathiri Maharishi Spiritual Village',
    text: 'A peaceful retreat in Marisettipathi Village for meditation, health, and enlightenment.',
  },
  {
    image: img('construction'),
    title: 'Retirement Home for Elders',
    text: 'Building a retirement home where elders are cared for with dignity, love, and spiritual support.',
  },
  {
    image: img('history'),
    title: 'Mini Meditation Hall & Gurukul',
    text: 'Mini Meditation Hall inaugurated. Gurukul opened for spiritual learning. Beautiful 3-acre garden.',
  },
];

export const GALLERY_ITEMS = [
  { image: img('galleryPreview1'), title: 'Foundation Course', tag: 'Foundation Course', classes: 'col-lg-4 foundation' },
  { image: img('galleryPreview2'), title: 'Foundation Course', tag: 'Foundation Course', classes: 'col-lg-4 foundation' },
  { image: img('galleryPreview3'), title: 'Event Photos', tag: 'Event Photos', classes: 'col-lg-4 events' },
  { image: img('galleryPreview4'), title: 'Event Photos', tag: 'Event Photos', classes: 'col-lg-4 events foundation' },
  { image: img('galleryPreview1'), title: 'Spiritual Moments', tag: 'Community', classes: 'col-lg-4 events' },
  { image: img('galleryPreview3'), title: 'Community Events', tag: 'Events', classes: 'col-lg-4 foundation events' },
];

export const GALLERY_FILTERS = [
  { key: '*', label: 'All', filterClass: '*' },
  { key: 'foundation', label: 'Foundation Course', filterClass: 'foundation' },
  { key: 'events', label: 'Event Photos', filterClass: 'events' },
];

export const VOLUNTEERS = TEAM.map((member) => ({
  image: img(member.image),
  role: member.role,
  name: member.name,
}));

export const BROADCAST = {
  image: img('meditationHall'),
  title: 'Spiritual Teachings & Satsang',
  text: `${SITE.name} shares the teachings of Yogiraj Vethathiri Maharishi through satsang, meditation, and spiritual programs. Watch our videos on YouTube for guidance on the path to ${SITE.tagline.toLowerCase()}.`,
};

export const VIDEOS = [
  { image: img('galleryPreview3'), title: 'Foundation Course' },
  { image: img('galleryPreview4'), title: 'Community Events' },
  { image: img('about1'), title: 'Spiritual Village' },
  { image: img('about2'), title: 'Meditation Hall' },
];

export const BLOG_POSTS = HOME_BLOG_POSTS.map((post) => ({
  image: img(post.image),
  title: post.title,
  author: SITE.name,
  authorImg: img('logo'),
  date: 'Vetham Blog',
}));

export const FOOTER_POSTS = HOME_BLOG_POSTS.map((post) => ({
  image: img(post.image),
  title: post.title,
  date: 'Vetham Blog',
}));

export const FOOTER_ABOUT = `${SITE.name} is dedicated to ${SITE.tagline.toLowerCase()}, offering yoga, meditation, and spiritual teachings in Coimbatore.`;
