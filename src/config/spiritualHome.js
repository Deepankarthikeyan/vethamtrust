import { img } from './images';
import { SITE } from './site';

export const SPIRITUAL_HERO = {
  eyebrow: 'Spiritual Based',
  title: 'Life Living',
  subtitle: 'A journey from physical well-being to inner transformation.',
  paragraphs: [
    `${SITE.name} carries forward the teachings of Yogiraj Vethathiri Maharishi — guiding seekers toward self-realization, clarity, and harmony in daily life.`,
    'Through yoga, meditation, introspection, and community satsang, we invite you to discover peace within and radiate it to the world.',
  ],
  image: img('banner1'),
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
    'Inspired by Yogiraj Vethathiri Maharishi, our trust offers a serene environment where ancient wisdom meets modern living. We nurture physical health, mental clarity, and spiritual awakening for families, seekers, and communities in Coimbatore and beyond.',
    'Whether you are beginning your path or deepening your practice, you are welcome to learn, meditate, and serve with us.',
  ],
  quote: 'Know yourself. Understand life. Live in harmony.',
  quoteAttribution: 'Yogiraj Vethathiri Maharishi',
  image: img('mahaan'),
};

export const JOURNEY_WITHIN = {
  title: 'The Journey Within',
  subtitle: 'Five timeless practices for conscious living',
  items: [
    {
      title: 'Simplified Physical Exercises',
      text: 'Gentle movements that strengthen the body and prepare the mind for deeper meditation.',
      image: img('serviceSimplifiedYoga'),
      icon: 'fas fa-person-walking',
    },
    {
      title: 'Meditation',
      text: 'Calm the mind, awaken awareness, and experience the stillness that lies within.',
      image: img('serviceMeditation'),
      icon: 'fas fa-om',
    },
    {
      title: 'Introspection',
      text: 'Reflect on thoughts and habits to dissolve stress and cultivate emotional balance.',
      image: img('servicePhilosophy'),
      icon: 'fas fa-brain',
    },
    {
      title: 'Kayakalpa',
      text: 'Holistic practices for vitality, longevity, and harmony between body and life force.',
      image: img('serviceHealing'),
      icon: 'fas fa-leaf',
    },
    {
      title: 'Wisdom of Vethathiri Maharishi',
      text: 'Timeless teachings on consciousness, peace, and the unity of humanity.',
      image: img('serviceTeachings'),
      icon: 'fas fa-sun',
    },
  ],
};

export const FIVE_DIMENSIONS = {
  title: 'Five Dimensions of Conscious Living',
  subtitle: 'Integrate body, mind, and spirit for a balanced life',
  items: [
    { key: 'body', label: 'Body', color: '#3d7a52', icon: 'fas fa-heart-pulse', text: 'Physical health & vitality' },
    { key: 'mind', label: 'Mind', color: '#4a7fb8', icon: 'fas fa-lightbulb', text: 'Clarity & focus' },
    { key: 'life', label: 'Life Force', color: '#d97706', icon: 'fas fa-fire', text: 'Energy & renewal' },
    { key: 'consciousness', label: 'Consciousness', color: '#7c5cbf', icon: 'fas fa-eye', text: 'Awareness & insight' },
    { key: 'harmony', label: 'Harmony', color: '#8b5e3c', icon: 'fas fa-infinity', text: 'Unity & peace' },
  ],
  bannerImage: img('banner2'),
};

export const WAY_OF_LIFE = {
  title: 'More Than a Practice. A Way of Life.',
  text: 'Spiritual living is not confined to a mat or a hall — it flows into how we speak, serve, and relate. At Vetham, we cultivate values that transform individuals and communities.',
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
    { num: '02', title: 'Emotional Balance', text: 'Understand feelings with introspection and self-awareness.', icon: 'fas fa-heart' },
    { num: '03', title: 'Self-Awareness', text: 'Discover who you are beyond body, mind, and circumstance.', icon: 'fas fa-user' },
    { num: '04', title: 'Spiritual Growth', text: 'Deepen practice through satsang, yoga, and teachings.', icon: 'fas fa-seedling' },
    { num: '05', title: 'Harmonious Living', text: 'Align daily life with peace, purpose, and compassion.', icon: 'fas fa-home' },
    { num: '06', title: 'Universal Connection', text: 'Experience oneness with humanity and the natural world.', icon: 'fas fa-globe' },
  ],
};

export const DUAL_FEATURE = {
  left: {
    title: 'Know Yourself. Understand Life.',
    items: [
      'Know Yourself',
      'Understand Life',
      'Live in Harmony',
      'Experience Inner Peace',
    ],
    image: img('meditationHall'),
  },
  right: {
    title: 'One Humanity. One Consciousness.',
    text: 'When individual peace blossoms, world peace becomes possible. Join our community in building the spiritual village vision.',
    image: img('aboutGroup'),
    values: [
      { icon: 'fas fa-heart', label: 'Love' },
      { icon: 'fas fa-hand-holding-heart', label: 'Compassion' },
      { icon: 'fas fa-comments', label: 'Understanding' },
      { icon: 'fas fa-dove', label: 'Harmony' },
      { icon: 'fas fa-hands-helping', label: 'Responsibility' },
    ],
  },
};

export const VILLAGE_LIFE = {
  title: 'Life at the Spiritual Village',
  text: 'Vethathiri Maharishi Spiritual Village in Marisettipathi is a sanctuary for meditation, yoga, and community — surrounded by nature near Pathimalai Murugan Temple.',
  cta: { label: 'Explore the Village', path: '/our-village' },
  heroImage: img('villagePlan'),
  tiles: [
    { title: 'Nature', text: 'Lush landscapes and fresh air for renewal.', image: img('villageAbout') },
    { title: 'Meditation', text: 'Dedicated halls for silence and introspection.', image: img('meditationHall') },
    { title: 'Yoga', text: 'Daily practice for body-mind integration.', image: img('serviceHatha') },
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
  title: 'Begin Your Inner Journey',
  image: img('banner3'),
  pillars: [
    { icon: 'fas fa-leaf', label: 'Live consciously' },
    { icon: 'fas fa-heart', label: 'Live compassionately' },
    { icon: 'fas fa-dove', label: 'Live harmoniously' },
    { icon: 'fas fa-eye', label: 'Live with awareness' },
  ],
  cta: { label: 'Begin Your Journey', path: '/contact' },
  tagline: 'Spiritual Based Life Living',
};
