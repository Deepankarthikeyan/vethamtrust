import { HOME_BLOG_POSTS } from './blog';
import { img } from './images';
import { BANNERS, SITE, TEAM } from './site';

export const GODS = [
  'Brahma', 'Vishnu', 'Shiva', 'Krishna', 'Rama', 'Hanuman', 'Durga', 'Lakshmi',
  'Saraswati', 'Ganesh', 'Kartikeya', 'Indra', 'Surya', 'Kali', 'Parvati', 'Radha',
  'Balaji', 'Narasimha', 'Murugan', 'Ayyappa', 'Vethathiri',
];

export const HERO_SLIDES_1 = [
  {
    subtitle: SITE.tagline,
    title: BANNERS[0].title.replace(' — ', '\n').replace(' & ', ' &\n'),
    cta: BANNERS[0].cta.label,
    ctaPath: BANNERS[0].cta.path,
    bg: img(BANNERS[0].image),
  },
  {
    subtitle: BANNERS[1].subtitle,
    title: BANNERS[1].title.replace(' & ', ' &\n'),
    cta: BANNERS[1].cta.label,
    ctaPath: BANNERS[1].cta.path,
    bg: img(BANNERS[1].image),
  },
];

export const HERO_SLIDES_2 = [
  {
    subtitle: BANNERS[2].subtitle,
    title: BANNERS[2].title.replace(' & ', ' &\n'),
    cta: BANNERS[2].cta.label,
    ctaPath: BANNERS[2].cta.path,
    bg: img(BANNERS[2].image),
  },
  {
    subtitle: 'Spiritual Teachings & Yoga',
    title: 'World Peace through\nIndividual Peace',
    cta: 'Contact Us',
    ctaPath: '/contact',
    bg: img('banner4'),
  },
];

export const ABOUT_FEATURES = [
  'Yoga & Meditation',
  'Spiritual Village',
  'Satsang & Guidance',
  'World Peace Mission',
];

export const SERVICES = [
  {
    icon: 'flaticon-temple',
    title: 'Yoga & Meditation',
    text: 'Workshops, meditation sessions, and discourses guiding individuals on a path of self-discovery.',
    path: '/courses',
    variant: 'white',
  },
  {
    icon: 'flaticon-arti',
    title: 'Spiritual Village',
    text: 'Building Vethathiri Maharishi Spiritual Village — a peaceful retreat for meditation and enlightenment.',
    path: '/our-village',
    variant: 'primary',
  },
  {
    icon: 'flaticon-pooja',
    title: 'Join Satsang',
    text: 'Connect with the Guru, experience divine love and grace. Join our community for spiritual updates.',
    path: '/contact',
    variant: 'secondary',
  },
];

export const ICON_BLOCKS = [
  {
    icon: 'flaticon-temple',
    title: 'Yoga & Meditation',
    text: 'Through yoga, meditation, and holistic teachings for inner peace and self-realization.',
  },
  {
    icon: 'flaticon-powder-1',
    title: 'Spiritual Village',
    text: 'A sanctuary for spiritual tranquility and connection with nature in Coimbatore.',
  },
];

export const DONATIONS = [
  {
    image: img('villagePlan'),
    title: 'Vethathiri Maharishi Spiritual Village',
    raised: 'Ongoing',
    goal: 'Village Plan',
    percent: 72,
    path: '/our-village',
  },
  {
    image: img('construction'),
    title: 'Retirement Home for Elders',
    raised: 'In Progress',
    goal: 'Elder Care',
    percent: 58,
    path: '/donate',
  },
  {
    image: img('history'),
    title: 'Mini Meditation Hall & Gurukul',
    raised: 'Completed',
    goal: 'Community Space',
    percent: 100,
    path: '/our-village',
  },
];

export const PROGRAM_ITEMS = [
  { image: img('galleryPreview1'), title: 'Foundation Course', categories: ['courses'] },
  { image: img('galleryPreview2'), title: 'Youngness Yogic Practices', categories: ['yoga'] },
  { image: img('galleryPreview3'), title: 'Mano Nirvan Kriya', categories: ['courses', 'yoga'] },
  { image: img('galleryPreview4'), title: 'Appeasement Sittings', categories: ['meditation'] },
  { image: img('serviceMeditation'), title: 'Meditation Sessions', categories: ['meditation', 'yoga'] },
  { image: img('serviceSelfRealization'), title: 'Self Realization Training', categories: ['courses'] },
];

export const PROGRAM_FILTERS = [
  { key: '*', label: 'All' },
  { key: 'courses', label: 'Courses' },
  { key: 'yoga', label: 'Yoga' },
  { key: 'meditation', label: 'Meditation' },
];

export const VOLUNTEERS = TEAM.map((member) => ({
  image: img(member.image),
  role: member.role,
  name: member.name,
  path: '/leadership',
}));

export const VIDEOS = [
  { image: img('galleryPreview3'), title: 'Foundation Course' },
  { image: img('galleryPreview4'), title: 'Event Photos' },
  { image: img('meditationHall'), title: 'Meditation Hall' },
  { image: img('villageAbout'), title: 'Spiritual Village' },
];

export const BLOG_POSTS = HOME_BLOG_POSTS.map((post) => ({
  ...post,
  image: img(post.image),
  author: 'Vetham Trust',
  authorImg: img('trustee1'),
  date: '2026',
}));
