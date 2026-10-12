import { img } from './images';

export const SPIRITUAL_HERO = {
  eyebrow: 'Spiritual Based',
  title: 'LIFE LIVING',
  subtitle: 'A journey from physical well-being to inner transformation.',
  paragraphs: [
    'Spiritual based life living integrates simplified physical exercises, meditation, introspection, and the profound wisdom of Yogiraj Vethathiri Maharishi — guiding you toward holistic well-being and inner awakening.',
    'Discover a path where conscious living nurtures the body, calms the mind, and opens the heart to peace, purpose, and harmony with all life.',
  ],
  image: img('homeHeroReference'),
  primaryCta: { label: 'Explore Spiritual Living', path: '/about' },
  secondaryCta: { label: 'Enquire Now', path: '/contact' },
  motto: 'Know Yourself • Understand Life • Live in Harmony',
};

export const SPIRITUAL_ABOUT = {
  eyebrow: 'About',
  title: 'Live Better. Think Deeper. Know Yourself.',
  text: [
    'Vethathiri Maharishi Spiritual Village offers a tranquil space to learn, practice, and live the teachings of conscious life — where ancient wisdom meets mindful modern living.',
    'Every program is designed to help you know yourself, understand life, and live in harmony with nature, community, and the world within.',
  ],
  quote: 'Know yourself. Understand life. Live in harmony.',
  quoteAttribution: 'Vethathiri Maharishi',
  image: img('homeAboutMaharishiReference'),
};

export const JOURNEY_WITHIN = {
  eyebrow: 'The Journey Within',
  title: 'From Physical Well-being to Inner Transformation',
  subtitle: 'Our approach brings together simple yet meaningful practices that encourage a balanced and conscious way of living.',
  items: [
    {
      title: 'Simplified Physical Exercises',
      text: 'Improve physical health, flexibility and overall well-being through simple and practical exercises.',
      image: img('homeJourneyCard1'),
      icon: 'fas fa-person-walking',
      iconTone: 'green',
    },
    {
      title: 'Meditation',
      text: 'Develop a calm and focused mind through regular meditation and inner observation.',
      image: img('homeJourneyCard2'),
      icon: 'fas fa-om',
      iconTone: 'orange',
    },
    {
      title: 'Introspection',
      text: 'Understand your thoughts, emotions and actions through self-awareness and reflection.',
      image: img('homeJourneyCard3'),
      icon: 'fas fa-brain',
      iconTone: 'green',
    },
    {
      title: 'Kayakalpa',
      text: 'A traditional practice focused on developing awareness of the body, mind and life force.',
      image: img('homeJourneyCard4'),
      icon: 'fas fa-leaf',
      iconTone: 'orange',
    },
    {
      title: 'Wisdom of Vethathiri Maharishi',
      text: 'Explore profound teachings that help understand human life, relationships, nature and universal consciousness.',
      image: img('homeJourneyCard5'),
      icon: 'fas fa-sun',
      iconTone: 'green',
    },
  ],
};

export const FIVE_DIMENSIONS = {
  eyebrow: 'Five Dimensions',
  title: 'Five Dimensions of Conscious Living',
  items: [
    {
      key: 'body',
      label: 'BODY',
      color: '#3d7a52',
      icon: 'fas fa-user',
      text: 'Healthy physical living',
      image: img('homeDimensionPanel1'),
    },
    {
      key: 'mind',
      label: 'MIND',
      color: '#4a7fb8',
      icon: 'fas fa-brain',
      text: 'Clarity and emotional balance',
      image: img('homeDimensionPanel2'),
    },
    {
      key: 'life',
      label: 'LIFE FORCE',
      color: '#d97706',
      icon: 'fas fa-sun',
      text: 'Awareness of the energy within',
      image: img('homeDimensionPanel3'),
    },
    {
      key: 'consciousness',
      label: 'CONSCIOUSNESS',
      color: '#7c5cbf',
      icon: 'fas fa-spa',
      text: 'Understanding oneself and life',
      image: img('homeDimensionPanel4'),
    },
    {
      key: 'harmony',
      label: 'HARMONY',
      color: '#8b5e3c',
      icon: 'fas fa-users',
      text: 'Living peacefully with society and nature',
      image: img('homeDimensionPanel5'),
    },
  ],
};

export const WAY_OF_LIFE = {
  eyebrow: 'A Way of Living',
  title: 'More Than a Practice. A Way of Life.',
  text: 'Spiritual living is not limited to meditation or yoga. It is about bringing awareness into everyday life.',
  items: [
    { icon: 'fas fa-brain', title: 'Consciousness', hint: 'in our thoughts' },
    { icon: 'fas fa-book-open', title: 'Discipline', hint: 'in our actions' },
    { icon: 'fas fa-hand-holding-heart', title: 'Compassion', hint: 'in our relationships' },
    { icon: 'fas fa-leaf', title: 'Harmony', hint: 'with nature' },
    { icon: 'fas fa-fire', title: 'Peace', hint: 'within ourselves' },
    { icon: 'fas fa-user', title: 'Responsibility', hint: 'towards society' },
    { icon: 'fas fa-globe', title: 'Universal Brotherhood', hint: 'towards all' },
  ],
};

export const INNER_PEACE_STEPS = {
  eyebrow: 'What You Can Discover',
  title: 'A Journey Towards Inner Peace',
  intro: 'Through regular practice and conscious living, seekers can develop:',
  items: [
    { num: '01', title: 'Mental Clarity', text: 'A calmer and more focused mind.', icon: 'fas fa-brain', accent: '#2f5f44' },
    { num: '02', title: 'Emotional Balance', text: 'Greater understanding and control of emotions.', icon: 'fas fa-heart', accent: '#c45a1a' },
    { num: '03', title: 'Self-Awareness', text: 'A deeper understanding of oneself.', icon: 'fas fa-user', accent: '#3d7a52' },
    { num: '04', title: 'Inner Peace', text: 'A peaceful state beyond everyday distractions.', icon: 'fas fa-spa', accent: '#7c5cbf' },
    { num: '05', title: 'Harmony', text: 'A balanced relationship with people, society and nature.', icon: 'fas fa-leaf', accent: '#4a7fb8' },
    { num: '06', title: 'Wisdom', text: 'A deeper understanding of life and its purpose.', icon: 'fas fa-sun', accent: '#d97706' },
  ],
};

export const PURPOSE_PANEL = {
  eyebrow: 'The Purpose of the Journey',
  title: 'Know Yourself. Understand Life.',
  image: img('homePurposeMeditation'),
  items: [
    { icon: 'fas fa-user', title: 'Know Yourself', text: 'Understand your thoughts, emotions, body and inner nature.' },
    { icon: 'fas fa-book-open', title: 'Understand Life', text: 'Explore the purpose and deeper meaning of human life.' },
    { icon: 'fas fa-spa', title: 'Live in Harmony', text: 'Build harmonious relationships with people and nature.' },
    { icon: 'fas fa-fire', title: 'Experience Inner Peace', text: 'Discover the peace and wisdom that already exist within.' },
  ],
};

export const BROTHERHOOD_PANEL = {
  eyebrow: 'Universal Brotherhood',
  title: 'One Humanity. One Consciousness.',
  text: 'The teachings encourage us to move beyond individual boundaries and develop a sense of universal brotherhood.',
  footer: 'Together, these values can create a more peaceful individual, family, society and world.',
  image: img('homeBrotherhoodHill'),
  values: [
    { icon: 'fas fa-heart', label: 'Love', tone: 'love' },
    { icon: 'fas fa-leaf', label: 'Compassion', tone: 'compassion' },
    { icon: 'fas fa-comments', label: 'Understanding', tone: 'understanding' },
    { icon: 'fas fa-users', label: 'Harmony', tone: 'harmony' },
    { icon: 'fas fa-globe', label: 'Responsibility', tone: 'responsibility' },
  ],
};

export const VILLAGE_LIFE = {
  sectionTitle: 'Life at the Spiritual Village',
  title: 'A Peaceful Environment for Conscious Living',
  text: 'Surrounded by nature, the Village provides an atmosphere where people can slow down, reflect, practise and reconnect with themselves.',
  cta: { label: 'Explore the Village', path: '/our-village' },
  tiles: [
    { title: 'Nature', text: 'Connect with the natural environment.', image: img('homeVillageTile1') },
    { title: 'Meditation', text: 'Create space for inner silence.', image: img('homeVillageTile2') },
    { title: 'Yoga', text: 'Support physical and mental well-being.', image: img('homeVillageTile3') },
    { title: 'Community', text: 'Grow together through shared values.', image: img('homeVillageTile4') },
  ],
};

export const BALANCE_CARDS = {
  eyebrow: 'Why Spiritual Based Life Living',
  title: 'Bring Balance Into Everyday Life',
  cards: [
    {
      tone: 'physical',
      title: 'Physical',
      image: img('homeBalancePhysical'),
      points: ['Healthy body', 'Exercise', 'Vitality', 'Discipline'],
    },
    {
      tone: 'mental',
      title: 'Mental',
      image: img('homeBalanceMental'),
      points: ['Clear mind', 'Meditation', 'Emotional balance', 'Focus'],
    },
    {
      tone: 'spiritual',
      title: 'Spiritual',
      image: img('homeBalanceSpiritual'),
      points: ['Inner awareness', 'Introspection', 'Self-realisation', 'Inner peace'],
    },
  ],
};

export const HOME_REFERENCE_SECTIONS = [
  {
    id: 'sh-practices',
    label: 'The Journey Within',
    image: img('homeSectionJourney'),
  },
  {
    id: 'sh-dimensions',
    label: 'Five Dimensions of Conscious Living',
    image: img('homeSectionDimensions'),
  },
  {
    id: 'sh-way',
    label: 'More Than a Practice. A Way of Life.',
    image: img('homeSectionWayOfLife'),
  },
  {
    id: 'sh-benefits',
    label: 'A Journey Towards Inner Peace',
    image: img('homeSectionInnerPeace'),
  },
  {
    id: 'sh-purpose',
    label: 'Know Yourself. Understand Life.',
    image: img('homeSectionPurposeBrotherhood'),
  },
  {
    id: 'sh-village',
    label: 'Life at the Spiritual Village',
    image: img('homeSectionVillageLife'),
    cta: { label: 'Explore the Village', path: '/our-village' },
  },
  {
    id: 'sh-balance',
    label: 'Bring Balance Into Everyday Life',
    image: img('homeSectionBalance'),
  },
];

export const FINAL_CTA = {
  eyebrow: 'A Simple Message',
  title: 'Begin Your Inner Journey',
  text: "You don't have to leave everyday life behind to discover inner peace.",
  image: img('homeSectionFinalCta'),
  pillars: [
    { icon: 'fas fa-leaf', label: 'Live consciously' },
    { icon: 'fas fa-heart', label: 'Live compassionately' },
    { icon: 'fas fa-praying-hands', label: 'Live harmoniously' },
    { icon: 'fas fa-spa', label: 'Live with awareness' },
  ],
  cta: { label: 'Begin Your Journey', path: '/contact' },
  tagline: 'Spiritual Based Life Living',
  taglineSub: 'A journey towards knowing yourself and understanding life.',
};
