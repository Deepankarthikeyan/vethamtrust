import { img } from './images';

/** Homepage copy aligned to the reference mockup (header excluded — uses site Layout). */
export const SPIRITUAL_HERO = {
  eyebrow: 'Spiritual Based',
  title: 'LIFE LIVING',
  subtitle: 'A journey from physical well-being to inner transformation.',
  paragraphs: [
    'Spiritual based life living is a holistic path that unites simplified physical exercises, meditation, introspection, and the wisdom of Yogiraj Vethathiri Maharishi.',
    'Experience conscious living in harmony with nature — nurturing the body, calming the mind, and awakening the spirit for a balanced, purposeful life.',
  ],
  image: img('homeHeroLandscape'),
  primaryCta: { label: 'Explore Spiritual Living', path: '/about' },
  secondaryCta: { label: 'Enquire Now', path: '/contact' },
  pillars: [
    { icon: 'fas fa-seedling', label: 'Know Yourself' },
    { icon: 'fas fa-book-open', label: 'Understand Life' },
    { icon: 'fas fa-hands-holding-heart', label: 'Live in Harmony' },
  ],
};

export const SPIRITUAL_ABOUT = {
  eyebrow: 'About',
  title: 'Live Better. Think Deeper. Know Yourself.',
  text: [
    'Vethathiri Maharishi Spiritual Village is a serene sanctuary where seekers learn to live consciously — blending timeless spiritual wisdom with practical daily practices.',
    'Here, every step guides you toward self-realization, inner peace, and harmony with yourself, society, and nature.',
  ],
  quote: 'Know yourself. Understand life. Live in harmony.',
  quoteAttribution: 'Yogiraj Vethathiri Maharishi',
  image: img('mahaan'),
  backdrop: img('villageAbout'),
};

export const JOURNEY_WITHIN = {
  eyebrow: 'The Journey Within',
  title: 'From Physical Well-being to Inner Transformation',
  items: [
    {
      title: 'Simplified Physical Exercises',
      text: 'Gentle exercises to strengthen the body and prepare the mind for deeper practice.',
      image: img('serviceSimplifiedYoga'),
      icon: 'fas fa-person-walking',
    },
    {
      title: 'Meditation',
      text: 'Calm the mind, expand awareness, and experience inner stillness.',
      image: img('serviceMeditation'),
      icon: 'fas fa-om',
    },
    {
      title: 'Introspection',
      text: 'Understand thoughts and emotions to release stress and gain clarity.',
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
      text: 'Learn timeless teachings on consciousness, peace, and unity.',
      image: img('serviceTeachings'),
      icon: 'fas fa-sun',
    },
  ],
};

export const FIVE_DIMENSIONS = {
  title: 'Five Dimensions of Conscious Living',
  subtitle: 'Integrate body, mind, life force, consciousness, and harmony',
  items: [
    { key: 'body', label: 'BODY', color: '#3d7a52', icon: 'fas fa-heart-pulse', text: 'Physical health & vitality' },
    { key: 'mind', label: 'MIND', color: '#4a7fb8', icon: 'fas fa-lightbulb', text: 'Mental clarity & focus' },
    { key: 'life', label: 'LIFE FORCE', color: '#d97706', icon: 'fas fa-fire', text: 'Energy & renewal' },
    { key: 'consciousness', label: 'CONSCIOUSNESS', color: '#7c5cbf', icon: 'fas fa-eye', text: 'Awareness & insight' },
    { key: 'harmony', label: 'HARMONY', color: '#8b5e3c', icon: 'fas fa-infinity', text: 'Unity & peaceful living' },
  ],
  bannerImage: img('banner2'),
};

export const WAY_OF_LIFE = {
  title: 'More Than a Practice. A Way of Life.',
  text: 'Conscious living transforms how we think, act, and relate — turning spiritual practice into a graceful way of everyday life.',
  items: [
    { icon: 'fas fa-brain', label: 'Consciousness in our thoughts' },
    { icon: 'fas fa-scale-balanced', label: 'Discipline in our actions' },
    { icon: 'fas fa-hand-holding-heart', label: 'Compassion in our relationships' },
    { icon: 'fas fa-dove', label: 'Peace within ourselves' },
    { icon: 'fas fa-users', label: 'Responsibility toward society' },
    { icon: 'fas fa-leaf', label: 'Harmony with nature' },
    { icon: 'fas fa-book', label: 'Wisdom in daily choices' },
    { icon: 'fas fa-sun', label: 'Gratitude in every moment' },
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
  text: 'When individual peace blossoms, world peace becomes possible.',
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
  text: 'Surrounded by nature in Marisettipathi, the village offers meditation halls, yoga spaces, and community satsang for seekers of all ages.',
  cta: { label: 'Explore the Village', path: '/our-village' },
  featureImage: img('villagePlan'),
  tiles: [
    { title: 'Nature', text: 'Lush greenery and fresh air for renewal.', image: img('villageAbout') },
    { title: 'Meditation', text: 'Silent halls for introspection and calm.', image: img('meditationHall') },
    { title: 'Yoga', text: 'Daily practice for body–mind integration.', image: img('serviceHatha') },
    { title: 'Community', text: 'Satsang, service, and shared growth.', image: img('galleryPreview3') },
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
  title: 'Begin Your Inner Journey',
  text: 'Take the first step on the path of spiritual based life living — where peace within becomes peace for the world.',
  image: img('banner4'),
  pillars: [
    { icon: 'fas fa-leaf', label: 'Live consciously' },
    { icon: 'fas fa-heart', label: 'Live compassionately' },
    { icon: 'fas fa-dove', label: 'Live harmoniously' },
    { icon: 'fas fa-eye', label: 'Live with awareness' },
  ],
  cta: { label: 'Begin Your Journey', path: '/contact' },
  tagline: 'Spiritual Based Life Living',
};
