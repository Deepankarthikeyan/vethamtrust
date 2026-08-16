export const SITE = {
  name: 'Vetham Kuzhumam Spiritual Trust',
  tagline: 'World Peace through Individual Peace',
  phone: '+91 9944511067',
  phoneHref: 'tel:+919944511067',
  email: 'vethamkuzhumam@gmail.com',
  address: 'Marisettipathi Village, Kumitipathi Post, Madukkarai, Coimbatore - 641032',
  addressShort: 'Marisettipathi Village, Coimbatore - 641032',
  social: {
    facebook: 'https://www.facebook.com/vetham.kuzhumam.1/',
    instagram: 'https://www.instagram.com/vethamkuzhumam/',
    youtube: 'https://www.youtube.com/@VethamSpiritualGroup',
  },
};

export const NAV_ITEMS = [
  { path: '/', label: 'Home', key: 'home' },
  { path: '/about', label: 'About Us', key: 'about' },
  { path: '/our-village', label: 'Our Village', key: 'village' },
  { path: '/courses', label: 'Courses', key: 'courses' },
  {
    path: '/events',
    label: 'Events',
    key: 'events',
    children: [
      { path: '/blog', label: 'Blog', key: 'blog' },
      { path: '/services', label: 'Services', key: 'services' },
      { path: '/donate', label: 'Donate', key: 'donate' },
    ],
  },
  { path: '/social-media', label: 'Social Media', key: 'social' },
  { path: '/contact', label: 'Contact', key: 'contact' },
];

export const TEAM = [
  {
    name: 'Gnana Rishi A S Rathakrishnan',
    role: 'Founder',
    image: 'trustee1',
    portrait: 'portraitFounder',
    headline: 'Guiding Souls. Building Peace.',
    bio: 'Spiritual master and founder of Vetham Kuzhumam Spiritual Trust, dedicated to spreading the teachings of Yogiraj Vethathiri Maharishi.',
    achievements: [
      { title: 'Founder', subtitle: 'Vetham Kuzhumam Spiritual Trust' },
      { title: 'Visionary', subtitle: 'For World Peace' },
    ],
    portraitSide: 'right',
  },
  {
    name: 'Gnanasiriyar Selvin',
    role: 'Co-Founder & President',
    image: 'trustee2',
    portrait: 'portraitPresident',
    headline: 'Leading with Devotion. Serving with Purpose.',
    bio: 'Co-founder and president guiding the trust’s spiritual programs, satsang, and community outreach with clarity and compassion.',
    achievements: [
      { title: 'President', subtitle: 'Vetham Kuzhumam Spiritual Trust' },
      { title: 'Mentor', subtitle: 'To spiritual seekers' },
    ],
    portraitSide: 'left',
  },
  {
    name: 'Gnanasiriyar Balasubramanian',
    role: 'Co-Founder & Secretary',
    image: 'trustee3',
    portrait: 'portraitSecretary',
    headline: 'Nurturing Community. Growing Together.',
    bio: 'Co-founder and secretary fostering spiritual learning, village development, and the daily rhythm of trust activities.',
    achievements: [
      { title: 'Secretary', subtitle: 'Vetham Kuzhumam Spiritual Trust' },
      { title: 'Guide', subtitle: 'For satsang and service' },
    ],
    portraitSide: 'right',
  },
  {
    name: 'Gnanasiriyar A S Sureash Kumaar',
    role: 'Co-Founder & Treasurer',
    image: 'trustee4',
    portrait: 'portraitTreasurer',
    headline: 'Stewarding Vision. Supporting Growth.',
    bio: 'Co-founder and treasurer helping build the spiritual village vision through careful stewardship and dedicated service.',
    achievements: [
      { title: 'Treasurer', subtitle: 'Vetham Kuzhumam Spiritual Trust' },
      { title: 'Builder', subtitle: 'Of the divine village vision' },
    ],
    portraitSide: 'left',
  },
];

export const BANNERS = [
  {
    image: 'banner1',
    subtitle: 'A Heaven for Spiritual Growth',
    title: 'Discover Vethathiri Maharishi Village',
    text: 'World Peace through Individual Peace — inspired by Yogiraj Vethathiri Maharishi.',
    cta: { label: 'Visit Our Village', path: '/our-village' },
  },
  {
    image: 'banner2',
    subtitle: 'VETHATHIRI MAHARISHI',
    title: 'Meditation Hall & Spiritual Centre',
    text: 'A sanctuary where individuals immerse in spiritual practices and connect with nature.',
    cta: { label: 'Our Story', path: '/about' },
  },
  {
    image: 'banner3',
    subtitle: 'VETHATHIRI MAHARISHI',
    title: 'Divine Spiritual Village',
    text: 'Meditation, yoga, and satsang in the foothills of Pathimalai Murugan Temple, Coimbatore.',
    cta: { label: 'Book a Tour', path: '/contact' },
  },
];
