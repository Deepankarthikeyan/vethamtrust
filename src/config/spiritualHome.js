import { img } from './images';
import { SITE } from './site';

export const SPIRITUAL_HERO = {
  eyebrow: 'Spiritual Based',
  title: 'LIFE LIVING',
  subtitle: 'A journey from physical well-being to inner transformation.',
  paragraphs: [
    'Welcome to a way of living rooted in the teachings of Yogiraj Vethathiri Maharishi — where physical health, mental clarity, and spiritual awakening come together in harmony.',
    `${SITE.name} invites you to explore simplified yoga, meditation, introspection, and conscious living in the peaceful surroundings of Coimbatore.`,
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
    'Vethathiri Maharishi Spiritual Village offers a serene environment to learn, practice, and experience the wisdom of conscious living. Here, seekers discover practical tools for self-realization while staying connected to nature and community.',
    'Through daily practice and guided teachings, individuals cultivate peace within — the foundation of world peace.',
  ],
  quote: 'Know yourself. Understand life. Live in harmony.',
  quoteAttribution: 'Yogiraj Vethathiri Maharishi',
  image: img('mahaan'),
  backdrop: img('villageAbout'),
};

export const JOURNEY_WITHIN = {
  title: 'From Physical Well-being to Inner Transformation',
  subtitle: 'The Journey Within',
  items: [
    {
      title: 'Simplified Physical Exercises',
      text: 'Gentle movements that energize the body and prepare the mind for meditation.',
      image: img('serviceSimplifiedYoga'),
      icon: 'fas fa-person-walking',
    },
    {
      title: 'Meditation',
      text: 'Still the mind, deepen awareness, and experience inner silence.',
      image: img('serviceMeditation'),
      icon: 'fas fa-om',
    },
    {
      title: 'Introspection',
      text: 'Reflect on thoughts and emotions to release stress and gain clarity.',
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
      text: 'Timeless teachings on consciousness, harmony, and human unity.',
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
      text: 'Strength, health, and physical well-being',
      image: img('serviceHatha'),
    },
    {
      key: 'mind',
      label: 'MIND',
      color: '#4a7fb8',
      icon: 'fas fa-lightbulb',
      text: 'Clarity, focus, and calm attention',
      image: img('serviceMeditation'),
    },
    {
      key: 'life',
      label: 'LIFE FORCE',
      color: '#d97706',
      icon: 'fas fa-fire',
      text: 'Energy, renewal, and vibrant living',
      image: img('serviceKundalini'),
    },
    {
      key: 'consciousness',
      label: 'CONSCIOUSNESS',
      color: '#7c5cbf',
      icon: 'fas fa-eye',
      text: 'Awareness beyond body and mind',
      image: img('serviceSelfRealization'),
    },
    {
      key: 'harmony',
      label: 'HARMONY',
      color: '#8b5e3c',
      icon: 'fas fa-infinity',
      text: 'Unity with life, nature, and humanity',
      image: img('serviceAwareness'),
    },
  ],
  bannerImage: img('banner2'),
};

export const WAY_OF_LIFE = {
  title: 'More Than a Practice. A Way of Life.',
  text: 'Spiritual living shapes how we think, speak, and serve. These principles guide everyday choices toward peace and conscious responsibility.',
  items: [
    {
      icon: 'fas fa-brain',
      title: 'Consciousness',
      text: 'Bring awareness to every thought and intention.',
    },
    {
      icon: 'fas fa-scale-balanced',
      title: 'Discipline',
      text: 'Practice consistency with patience and sincerity.',
    },
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'Compassion',
      text: 'Respond to others with kindness and understanding.',
    },
    {
      icon: 'fas fa-dove',
      title: 'Peace',
      text: 'Cultivate stillness within, even amid daily demands.',
    },
    {
      icon: 'fas fa-users',
      title: 'Responsibility',
      text: 'Serve society with humility and purposeful action.',
    },
    {
      icon: 'fas fa-leaf',
      title: 'Harmony',
      text: 'Live in balance with nature and fellow beings.',
    },
  ],
};

export const INNER_PEACE_STEPS = {
  title: 'A Journey Towards Inner Peace',
  items: [
    { num: '01', title: 'Mental Clarity', text: 'Quiet the mind through meditation and mindful living.', icon: 'fas fa-spa' },
    { num: '02', title: 'Emotional Balance', text: 'Understand feelings with introspection and patience.', icon: 'fas fa-heart' },
    { num: '03', title: 'Self-Awareness', text: 'Discover your true nature beyond body and circumstance.', icon: 'fas fa-user' },
    { num: '04', title: 'Inner Peace', text: 'Experience lasting calm rooted in conscious practice.', icon: 'fas fa-water' },
    { num: '05', title: 'Harmony', text: 'Align thoughts, words, and actions in unity.', icon: 'fas fa-infinity' },
    { num: '06', title: 'Wisdom', text: 'Live with insight drawn from Maharishi’s teachings.', icon: 'fas fa-book-open' },
  ],
};

export const PURPOSE_JOURNEY = {
  id: 'sh-purpose',
  title: 'Know Yourself. Understand Life.',
  intro: 'The spiritual journey begins with self-knowledge — understanding the body, mind, and life force as instruments of consciousness.',
  image: img('meditationHall'),
  items: [
    {
      icon: 'fas fa-user',
      title: 'Know Yourself',
      text: 'Recognize your true self beyond physical and mental limitations.',
    },
    {
      icon: 'fas fa-book-open',
      title: 'Understand Life',
      text: 'See life’s purpose through clarity, introspection, and wisdom.',
    },
    {
      icon: 'fas fa-hands-holding-heart',
      title: 'Live in Harmony',
      text: 'Align daily living with peace, compassion, and balance.',
    },
    {
      icon: 'fas fa-dove',
      title: 'Experience Inner Peace',
      text: 'Rest in the stillness that arises from conscious practice.',
    },
  ],
};

export const UNIVERSAL_BROTHERHOOD = {
  title: 'One Humanity. One Consciousness.',
  text: 'When individual peace blossoms, humanity moves closer to world peace. Together we nurture love, understanding, and shared responsibility.',
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
  eyebrow: 'Life at the Spiritual Village',
  title: 'A Peaceful Environment for Conscious Living',
  text: 'Nestled in Marisettipathi near Pathimalai Murugan Temple, our village is a sanctuary for meditation, yoga, satsang, and community — surrounded by nature and purposeful living.',
  cta: { label: 'Explore the Village', path: '/our-village' },
  heroImage: img('villagePlan'),
  tiles: [
    { title: 'Nature', text: 'Green landscapes and fresh air for renewal and reflection.', image: img('villageAbout') },
    { title: 'Meditation', text: 'Dedicated spaces for silence, introspection, and inner calm.', image: img('meditationHall') },
    { title: 'Yoga', text: 'Daily practice integrating body, breath, and awareness.', image: img('serviceHatha') },
    { title: 'Community', text: 'Satsang, service, and shared spiritual growth.', image: img('galleryPreview3') },
  ],
};

export const BALANCE_CARDS = {
  title: 'Bring Balance Into Everyday Life',
  cards: [
    {
      tone: 'physical',
      title: 'Physical Well-being',
      image: img('serviceSimplifiedYoga'),
      points: ['Healthy body', 'Steady energy', 'Restful sleep', 'Natural vitality'],
    },
    {
      tone: 'mental',
      title: 'Mental Well-being',
      image: img('serviceMeditation'),
      points: ['Clear mind', 'Emotional balance', 'Focused attention', 'Stress relief'],
    },
    {
      tone: 'spiritual',
      title: 'Spiritual Well-being',
      image: img('serviceTeachings'),
      points: ['Inner awareness', 'Purposeful living', 'Compassionate action', 'Lasting peace'],
    },
  ],
};

export const FINAL_CTA = {
  title: 'Begin Your Inner Journey',
  text: 'Take the first step toward conscious living — explore teachings, practices, and community at Vethathiri Maharishi Spiritual Village.',
  image: img('banner3'),
  pillars: [
    { icon: 'fas fa-leaf', label: 'Live consciously' },
    { icon: 'fas fa-heart', label: 'Live compassionately' },
    { icon: 'fas fa-dove', label: 'Live harmoniously' },
    { icon: 'fas fa-eye', label: 'Live with awareness' },
    { icon: 'fas fa-sun', label: 'Live with purpose' },
  ],
  cta: { label: 'Begin Your Journey', path: '/contact' },
  tagline: 'Spiritual Based Life Living',
};
