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
  {
    path: '/about',
    label: 'About Us',
    key: 'about',
    children: [{ path: '/leadership', label: 'Leadership', key: 'leadership' }],
  },
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
  { name: 'Gnana Rishi A S Rathakrishnan', role: 'Founder', image: 'trustee1' },
  { name: 'Gnanasiriyar Selvin', role: 'Co-Founder & President', image: 'trustee2' },
  { name: 'Gnanasiriyar Balasubramanian', role: 'Co-Founder & Secretary', image: 'trustee3' },
  { name: 'Gnanasiriyar A S Sureash Kumaar', role: 'Co-Founder & Treasurer', image: 'trustee4' },
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
