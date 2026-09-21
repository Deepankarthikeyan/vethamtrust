export const SITE = {
  name: 'Maharatri Temple',
  tagline: 'Krishna embodies divine love',
  phone: '987-879-428-48',
  hotline: '+1 212-683-9756',
  email: 'info@example.com',
  address: '14/A, Poor Street City Tower, New York USA',
  youtube: 'https://www.youtube.com/watch?v=TKnufs85hXk',
};

export const NAV_ITEMS = [
  {
    label: 'Home',
    children: [
      { label: 'Home v1', path: '/' },
      { label: 'Krishna', path: '/' },
    ],
  },
  {
    label: 'Pages',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'FAQ', path: '/contact' },
    ],
  },
  { label: 'Event', path: '/events' },
  { label: 'Puja', path: '/#puja' },
  { label: 'Donation', path: '/donate' },
];

export const FOOTER_LINKS = {
  information: [
    { label: 'Puja', path: '/#puja' },
    { label: 'Services', path: '/services' },
    { label: 'Temple', path: '/about' },
    { label: 'Volunteers', path: '/#volunteers' },
    { label: 'Donation', path: '/donate' },
  ],
  others: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Blog', path: '/blog' },
    { label: 'Donation', path: '/donate' },
  ],
};
