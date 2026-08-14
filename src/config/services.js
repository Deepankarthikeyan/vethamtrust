export const SERVICE_TAGS = [
  'Athma Sangamam',
  'Coimbatore',
  'Courtallam',
  'Donation',
  'Kodaikanal',
  'Kumitipathi',
  'Online Yoga',
  'Online Yoga Courses',
  'Pattarai',
  'Satsang',
  'Vetham Kuzhumam Spiritual Trust',
  'Vethathiri Maharishi Spiritual Village',
  'Yoga',
];

export const SIDEBAR_RECENT_POSTS = [
  {
    title: 'How yoga can help reduce stress',
    date: '30.08.2025',
    image: 'sidebarPost1',
    path: '/blog',
  },
  {
    title: 'The difference between mindful practice and meditation',
    date: '26.08.2025',
    image: 'sidebarPost2',
    path: '/blog',
  },
  {
    title: 'Yoga can actually make you happier',
    date: '25.08.2025',
    image: 'sidebarPost3',
    path: '/blog',
  },
];

export const ALL_SERVICES = [
  {
    page: 1,
    image: 'serviceYyp',
    title: 'Youngness Yogic Practices (YYP youthfulness)',
    category: 'Youthfulness',
    excerpt:
      'Youngness Yogic Practices (YYP youthfulness) Preservation of Vital Energy – These practices focus on conserving and channelizing life-force energy, which helps slow down aging and promotes vitality. Physical and Mental…',
  },
  {
    page: 1,
    image: 'serviceAwareness',
    title: 'Individual Constant Awareness Programme',
    category: 'Realization',
    excerpt:
      'Individual Constant Awareness Programme Awareness of the Inner Self – Self-realization trainings guide individuals to look inward, helping them understand their true nature beyond body and mind, which is…',
  },
  {
    page: 1,
    image: 'serviceManoNirvan',
    title: 'Mano Nirvan Kriya',
    category: 'Realization',
    excerpt:
      'Mano Nirvan Kriya is a deep relaxation practice designed to release stress and anxiety at the cellular level. Through gentle techniques, it calms the nervous system,…',
  },
  {
    page: 1,
    image: 'serviceSelfRealization',
    title: 'Self Realization Trainings',
    category: 'Realization',
    excerpt:
      'Self Realization Trainings: Deep Introspection – These trainings guide individuals to analyze their thoughts, emotions, and actions, helping them discover the root causes of suffering and confusion. Clarity of…',
  },
  {
    page: 1,
    image: 'serviceAppeasement',
    title: 'Appeasement Sittings',
    category: 'Session',
    excerpt:
      'Appeasement Sittings Emotional Release and Healing – These sittings provide a safe space for individuals to share their worries, conflicts, and stress, leading to emotional relief and inner calm. Guidance…',
  },
  {
    page: 1,
    image: 'serviceDonation',
    title: 'Donation',
    category: 'Spiritual Village',
    excerpt:
      'Donate to Vethathiri Maharishi Spiritual Village Retirement Home. Give with Heart. Build with Purpose. Vetham Kuzhumam Spiritual Trust is building a retirement home where elders are cared for with…',
  },
  {
    page: 2,
    image: 'servicePhilosophy',
    title: 'Philosophy',
    category: 'Session',
    excerpt:
      'Philosophy in Yoga At Vetham Spiritual Trust, the philosophy of yoga is deeply rooted in the teachings of Gnana Rishi A S Rathakrishnan, emphasizing self-realization, moral living, and universal harmony.…',
  },
  {
    page: 2,
    image: 'serviceMeditation',
    title: 'Meditation',
    category: 'Realization',
    excerpt:
      'Meditation Guided by the teachings of Gnana Rishi A S Rathakrishnan, meditation at Vetham Kuzhumam Spiritual Trust is a sacred practice of inner refinement. Through simplified techniques like Thuriyatheetham…',
  },
  {
    page: 2,
    image: 'serviceAshram',
    title: 'Ashram',
    category: 'Spiritual Village',
    excerpt:
      'Our Online Meditation Sessions are a great way to start your day. இந்த பயிற்சி புதிய அன்பர்களுக்கான பயிற்சி. பயிற்சி காலம் ஆகஸ்ட் 2025 முதல் ஜனவரி 2026 வரை வாரத்தில் 3 நாட்கள் (திங்கள், புதன்,…',
  },
  {
    page: 2,
    image: 'serviceSimplifiedYoga',
    title: 'Simplified Yoga',
    category: 'Leaning',
    excerpt:
      'Foundation Course in Yoga Begin your journey toward holistic well-being with our Foundation Course in Yoga, inspired by the teachings of Yogiraj Vethathiri Maharishi. This introductory program blends simplified…',
  },
  {
    page: 2,
    image: 'servicePrivate',
    title: 'Private Sessions',
    category: 'Leaning',
    excerpt:
      'Private Yoga Wellness Session Experience personalized healing and growth through one-on-one yoga sessions tailored to your unique needs. Whether you\'re seeking relief from stress, improving flexibility, or deepening your…',
  },
  {
    page: 2,
    image: 'serviceHealing',
    title: 'Healing',
    category: 'Wellness',
    excerpt:
      'Healing Through Yoga Wellness Our Yoga Wellness Program offers a gentle yet profound path to healing—physically, emotionally, and spiritually. Through mindful movement, breathwork, and guided meditation, participants release tension,…',
  },
  {
    page: 3,
    image: 'serviceHatha',
    title: 'Hatha',
    category: 'Yoga',
    excerpt:
      'Hatha Yoga is a classical path that harmonizes the body and mind through physical postures (asanas), breath control (pranayama), and deep relaxation. Rooted in the balance of…',
  },
  {
    page: 3,
    image: 'serviceVinyasa',
    title: 'Vinyasa',
    category: 'Yoga',
    excerpt:
      'Vinyasa Flow into vitality with our Vinyasa Yoga Program: A dynamic blend of breath and movement designed to energize the body and calm the mind. Each session guides you…',
  },
  {
    page: 3,
    image: 'serviceKundalini',
    title: 'Kundalini',
    category: 'Techniques',
    excerpt:
      'Kundalini Awaken your inner energy and elevate your consciousness through our Kundalini Yoga Program. This transformative practice blends breathwork, dynamic movements, mantra chanting, and meditation to activate the dormant…',
  },
  {
    page: 3,
    image: 'serviceTeachings',
    title: 'Teachings',
    category: 'Knowledge',
    excerpt:
      'Yoga Teachings Rooted in the profound wisdom of Yogiraj Shri Vethathiri Maharishi, the yoga teachings at Vetham Spiritual Trust emphasize simplified physical exercises, conscious breathing, and deep meditation. These practices…',
  },
];

export const SERVICE_PAGE_COUNT = 3;

export function getServicesForPage(page) {
  return ALL_SERVICES.filter((service) => service.page === page);
}
