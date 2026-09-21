export function mht(path) {
  return `/maharatri/${path.replace(/^\//, '')}`;
}

export const GODS = [
  'Brahma', 'Vishnu', 'Shiva', 'Krishna', 'Rama', 'Hanuman', 'Durga', 'Lakshmi',
  'Saraswati', 'Ganesh', 'Kartikeya', 'Indra', 'Surya', 'Kali', 'Parvati', 'Radha',
  'Balaji', 'Narasimha', 'Murugan', 'Ayyappa',
];

export const HERO_SLIDES_1 = [
  {
    subtitle: 'Krishna embodies divine love.',
    title: 'Strength lies not in the body,\nbut in the spirit.',
    cta: 'Continue Your Journey',
    ctaPath: '/contact',
  },
  {
    subtitle: 'Krishna inspires eternal devotion.',
    title: 'Growth demands stepping beyond\nyour comfort zone.',
    cta: 'Unleash Your Inner Warrior',
    ctaPath: '/contact',
  },
];

export const HERO_SLIDES_2 = [
  {
    subtitle: 'Wisdom Is Key',
    title: 'Train your mind as fiercely\nas your body.',
    cta: 'Follow Your Destiny',
    ctaPath: '/contact',
  },
  {
    subtitle: 'Krishna symbolizes play.',
    title: 'Enchanting hearts with\neternal love and wisdom.',
    cta: 'Get It Now',
    ctaPath: '/contact',
  },
];

export const ABOUT_FEATURES = [
  'Peace of Mind',
  'Set For Pastor',
  '100% Satisfaction',
  'Trusted Company',
];

export const SERVICES = [
  {
    icon: 'flaticon-temple',
    title: 'Temple',
    text: 'Temple is place where hindu worship consectetur adipisicing elit, sed do',
    href: '/services',
    variant: 'white',
  },
  {
    icon: 'flaticon-arti',
    title: 'Puja',
    text: 'Temple is place where hindu worship consectetur adipisicing elit, sed do',
    href: '/courses',
    variant: 'primary',
  },
  {
    icon: 'flaticon-pooja',
    title: 'Donation',
    text: 'Temple is place where hindu worship consectetur adipisicing elit, sed do',
    href: '/donate',
    variant: 'secondary',
  },
];

export const ICON_BLOCKS = [
  { icon: 'flaticon-temple', title: 'Temple', text: 'Donation is a good act amet quam vehicula elementum sed.' },
  { icon: 'flaticon-powder-1', title: 'Donation', text: 'Donation is a good act amet quam vehicula elementum sed.' },
];

export const DONATIONS = [
  { image: mht('assets/img/donation/5.webp'), title: 'Protecting Children', raised: '$52,384', goal: '$85,000', percent: 84 },
  { image: mht('assets/img/donation/6.webp'), title: 'Donate Ngos', raised: '$49,444', goal: '$78,000', percent: 65 },
  { image: mht('assets/img/donation/7.webp'), title: 'Feed The Poor', raised: '$78,334', goal: '$96,400', percent: 94 },
];

export const PUJA_ITEMS = [
  { image: mht('assets/img/puja/1.webp'), title: 'Durga Puja', classes: 'col-lg-4 coaching' },
  { image: mht('assets/img/puja/2.webp'), title: 'Raksha Bandhan', classes: 'col-lg-4 strategy' },
  { image: mht('assets/img/puja/3.webp'), title: 'Janmashtmi', classes: 'col-lg-4 coaching strategy' },
  { image: mht('assets/img/puja/4.webp'), title: 'Mahashivratri', classes: 'col-lg-4 relations coaching' },
  { image: mht('assets/img/puja/5.webp'), title: 'Holi', classes: 'col-lg-4 stakeholder strategy' },
  { image: mht('assets/img/puja/6.webp'), title: 'Diwali', classes: 'col-lg-4 stakeholder' },
];

export const PUJA_FILTERS = [
  { key: '*', label: 'All', filterClass: '*' },
  { key: 'coaching', label: 'Durga Puja', filterClass: 'coaching' },
  { key: 'stakeholder', label: 'Raksha Bandhan', filterClass: 'stakeholder' },
  { key: 'relations', label: 'Holi', filterClass: 'relations' },
];

export const PUJA_TEXT = 'Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod';

export const VOLUNTEERS = [
  { image: mht('assets/img/volunteers/4.webp'), role: 'Temple Pandit', name: 'Rakesh K Pandey' },
  { image: mht('assets/img/volunteers/6.webp'), role: 'Temple Memember', name: 'Yesh Chopra' },
  { image: mht('assets/img/volunteers/5.webp'), role: 'Temple Memember', name: 'M Kapoor' },
  { image: mht('assets/img/volunteers/3.webp'), role: 'Temple Memember', name: 'Mohan Das' },
];

export const VIDEOS = [
  { image: mht('assets/img/video-gallery/1.webp'), title: 'Varansi at Night' },
  { image: mht('assets/img/video-gallery/2.webp'), title: 'Chaar Dhaam Yatra' },
  { image: mht('assets/img/video-gallery/3.webp'), title: 'Mahashivratri Temple' },
  { image: mht('assets/img/video-gallery/4.webp'), title: 'OM Mahashivratri' },
];

export const BLOG_POSTS = [
  {
    image: mht('assets/img/blog/2.webp'),
    title: 'Education for all rural children are necessary.',
    author: 'Yesh Chopra',
    authorImg: mht('assets/img/people/1.webp'),
    date: 'May 20, 2026',
  },
  {
    image: mht('assets/img/blog/1.webp'),
    title: 'Reconstruct or new construct Temple krishna',
    author: 'Yesh Chopra',
    authorImg: mht('assets/img/people/2.webp'),
    date: 'May 20, 2026',
  },
  {
    image: mht('assets/img/blog/3.webp'),
    title: 'Ensure child safety & health in World Temple',
    author: 'Yesh Chopra',
    authorImg: mht('assets/img/people/1.webp'),
    date: 'May 20, 2026',
  },
];

export const FOOTER_POSTS = [
  { image: mht('assets/img/blog/1.webp'), title: 'Temple companies are being so transparent with their work', date: 'May 20, 2026' },
  { image: mht('assets/img/blog/2.webp'), title: 'Testimony love offering so blessed', date: 'May 20, 2026' },
  { image: mht('assets/img/blog/3.webp'), title: "As we've all discovered by now, the world can change", date: 'May 20, 2026' },
];
