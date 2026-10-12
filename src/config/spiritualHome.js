import { img } from './images';

export const SPIRITUAL_HERO = {
  eyebrow: 'Spiritual Based',
  title: 'LIFE LIVING',
  subtitle: 'A journey from physical well-being to inner transformation.',
  paragraphs: [
    'Spiritual based life living integrates simplified physical exercises, meditation, introspection, and the profound wisdom of Yogiraj Vethathiri Maharishi — guiding you toward holistic well-being and inner awakening.',
    'Discover a path where conscious living nurtures the body, calms the mind, and opens the heart to peace, purpose, and harmony with all life.',
  ],
  image: img('homeHeroMeditation'),
  primaryCta: { label: 'Explore Spiritual Living', path: '/about' },
  secondaryCta: { label: 'Enquire Now', path: '/contact' },
  motto: 'Know Yourself • Understand Life • Live in Harmony',
};

export const SPIRITUAL_ABOUT = {
  title: 'Live Better. Think Deeper. Know Yourself.',
  text: [
    'Vethathiri Maharishi Spiritual Village offers a tranquil space to learn, practice, and live the teachings of conscious life — where ancient wisdom meets mindful modern living.',
    'Every program is designed to help you know yourself, understand life, and live in harmony with nature, community, and the world within.',
  ],
  quote: 'Know yourself. Understand life. Live in harmony.',
  quoteAttribution: 'Vethathiri Maharishi',
  image: img('mahaan'),
  backdrop: img('villageAbout'),
};

export const JOURNEY_WITHIN = {
  eyebrow: 'The Journey Within',
  title: 'From Physical Well-being to Inner Transformation',
  items: [
    {
      title: 'Simplified Physical Exercises',
      text: 'Gentle movements that strengthen the body and prepare the mind for meditation.',
      image: img('serviceSimplifiedYoga'),
      icon: 'fas fa-person-walking',
    },
    {
      title: 'Meditation',
      text: 'Calm the mind, deepen awareness, and experience inner stillness.',
      image: img('serviceMeditation'),
      icon: 'fas fa-om',
    },
    {
      title: 'Introspection',
      text: 'Reflect on thoughts and habits to release stress and gain clarity.',
      image: img('servicePhilosophy'),
      icon: 'fas fa-brain',
    },
    {
      title: 'Kayakalpa',
      text: 'Holistic practices for vitality, longevity, and life-force balance.',
      image: img('serviceHealing'),
      icon: 'fas fa-leaf',
    },
    {
      title: 'Wisdom of Vethathiri Maharishi',
      text: 'Timeless teachings on consciousness, peace, and human unity.',
      image: img('serviceTeachings'),
      icon: 'fas fa-sun',
    },
  ],
};

export const FIVE_DIMENSIONS = {
  title: 'Five Dimensions of Conscious Living',
  subtitle: 'Balance body, mind, life force, consciousness, and harmony',
  items: [
    {
      key: 'body',
      label: 'BODY',
      color: '#3d7a52',
      icon: 'fas fa-heart-pulse',
      text: 'Physical health & vitality',
      image: img('serviceHatha'),
    },
    {
      key: 'mind',
      label: 'MIND',
      color: '#4a7fb8',
      icon: 'fas fa-lightbulb',
      text: 'Mental clarity & focus',
      image: img('serviceMeditation'),
    },
    {
      key: 'life',
      label: 'LIFE FORCE',
      color: '#d97706',
      icon: 'fas fa-fire',
      text: 'Energy & renewal',
      image: img('serviceKundalini'),
    },
    {
      key: 'consciousness',
      label: 'CONSCIOUSNESS',
      color: '#7c5cbf',
      icon: 'fas fa-eye',
      text: 'Awareness & insight',
      image: img('serviceSelfRealization'),
    },
    {
      key: 'harmony',
      label: 'HARMONY',
      color: '#8b5e3c',
      icon: 'fas fa-infinity',
      text: 'Unity & peaceful living',
      image: img('serviceAwareness'),
    },
  ],
  bannerImage: img('banner2'),
};

export const WAY_OF_LIFE = {
  title: 'More Than a Practice. A Way of Life.',
  text: 'Spiritual living is not limited to practice alone — it shapes how we think, speak, serve, and relate every day.',
  items: [
    { icon: 'fas fa-brain', title: 'Consciousness', text: 'Awareness in every thought and intention.' },
    { icon: 'fas fa-scale-balanced', title: 'Discipline', text: 'Steady practice with patience and sincerity.' },
    { icon: 'fas fa-hand-holding-heart', title: 'Compassion', text: 'Kindness and care in all relationships.' },
    { icon: 'fas fa-leaf', title: 'Harmony', text: 'Balance with nature and daily life.' },
    { icon: 'fas fa-dove', title: 'Peace', text: 'Stillness and calm within yourself.' },
    { icon: 'fas fa-users', title: 'Responsibility', text: 'Service and integrity toward society.' },
    { icon: 'fas fa-globe', title: 'Universal Brotherhood', text: 'Oneness with all humanity.' },
  ],
};

export const INNER_PEACE_STEPS = {
  title: 'A Journey Towards Inner Peace',
  items: [
    { num: '01', title: 'Mental Clarity', text: 'Quiet mental noise through meditation and mindful living.', icon: 'fas fa-spa' },
    { num: '02', title: 'Emotional Balance', text: 'Understand feelings with introspection and patience.', icon: 'fas fa-heart' },
    { num: '03', title: 'Self-Awareness', text: 'Discover who you are beyond body and circumstance.', icon: 'fas fa-user' },
    { num: '04', title: 'Inner Peace', text: 'Experience lasting calm rooted in conscious practice.', icon: 'fas fa-water' },
    { num: '05', title: 'Harmony', text: 'Align thoughts, words, and actions in unity.', icon: 'fas fa-infinity' },
    { num: '06', title: 'Wisdom', text: 'Live with insight from the teachings of Maharishi.', icon: 'fas fa-book-open' },
  ],
};

export const PURPOSE_PANEL = {
  title: 'Know Yourself. Understand Life.',
  image: img('homePurposeMeditation'),
  items: [
    { icon: 'fas fa-user', title: 'Know Yourself', text: 'Recognize your true self beyond body and mind.' },
    { icon: 'fas fa-book-open', title: 'Understand Life', text: 'See purpose through clarity and introspection.' },
    { icon: 'fas fa-hands-holding-heart', title: 'Live in Harmony', text: 'Align daily life with peace and compassion.' },
    { icon: 'fas fa-dove', title: 'Experience Inner Peace', text: 'Rest in stillness born of conscious practice.' },
  ],
};

export const BROTHERHOOD_PANEL = {
  title: 'One Humanity. One Consciousness.',
  image: img('aboutGroup'),
  values: [
    { icon: 'fas fa-heart', label: 'Love' },
    { icon: 'fas fa-hand-holding-heart', label: 'Compassion' },
    { icon: 'fas fa-comments', label: 'Understanding' },
    { icon: 'fas fa-dove', label: 'Harmony' },
    { icon: 'fas fa-hands-helping', label: 'Responsibility' },
  ],
};

export const VILLAGE_LIFE = {
  sectionTitle: 'Life at the Spiritual Village',
  title: 'A Peaceful Environment for Conscious Living',
  text: 'Nestled in nature at Marisettipathi, the village welcomes seekers to meditation, yoga, satsang, and community living.',
  cta: { label: 'Explore the Village', path: '/our-village' },
  tiles: [
    { title: 'Nature', text: 'Lush landscapes and fresh air for renewal.', image: img('villageAbout') },
    { title: 'Meditation', text: 'Dedicated halls for silence and introspection.', image: img('meditationHall') },
    { title: 'Yoga', text: 'Daily practice for body–mind integration.', image: img('serviceHatha') },
    { title: 'Community', text: 'Satsang, service, and shared spiritual growth.', image: img('galleryPreview3') },
  ],
};

export const BALANCE_CARDS = {
  title: 'Bring Balance Into Everyday Life',
  cards: [
    {
      tone: 'physical',
      title: 'Physical',
      image: img('serviceSimplifiedYoga'),
      points: ['Healthy body', 'Steady energy', 'Restful sleep', 'Natural vitality'],
    },
    {
      tone: 'mental',
      title: 'Mental',
      image: img('serviceMeditation'),
      points: ['Clear mind', 'Emotional balance', 'Focused attention', 'Stress relief'],
    },
    {
      tone: 'spiritual',
      title: 'Spiritual',
      image: img('serviceTeachings'),
      points: ['Inner awareness', 'Purposeful living', 'Compassionate action', 'Lasting peace'],
    },
  ],
};

export const FINAL_CTA = {
  eyebrow: 'A Simple Message',
  title: 'Begin Your Inner Journey',
  text: "You don't have to leave everyday life behind to discover inner peace.",
  image: img('homeHeroLandscape'),
  pillars: [
    { icon: 'fas fa-leaf', label: 'Live consciously' },
    { icon: 'fas fa-heart', label: 'Live compassionately' },
    { icon: 'fas fa-dove', label: 'Live harmoniously' },
    { icon: 'fas fa-eye', label: 'Live with awareness' },
  ],
  cta: { label: 'Begin Your Journey', path: '/contact' },
  tagline: 'Spiritual Based Life Living',
};
