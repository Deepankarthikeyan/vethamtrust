const CDN = 'https://vethamspiritualtrust.com/wp-content/uploads';

const catalog = {
  logo: [`/assets/images/logo-2.png`, `${CDN}/2025/09/logo-vetham.png`],
  logoFooter: [`/assets/images/logo-3.png`, `${CDN}/2025/09/logo-vetham.png`],
  favicon: [`/assets/images/vetham/favicon.jpg`, `${CDN}/2025/09/cropped-logo-vetham-spiritual-group-180x180.jpg`],
  banner1: [`/assets/images/banner/banner-1.jpg`, `${CDN}/2025/08/vetham-spiritual-group-36-890x664.jpg`],
  banner2: [`/assets/images/banner/banner-2.jpg`, `${CDN}/2025/08/vetham-spiritual-group-37-890x664.jpg`],
  banner3: [`/assets/images/banner/banner-3.jpg`, `${CDN}/2025/08/vetham-spiritual-group-38-890x664.jpg`],
  about1: [`/assets/images/resource/about-1.jpg`, `${CDN}/2022/03/vetham-spiritual-group-4.jpg`],
  about2: [`/assets/images/resource/about-2.jpg`, `${CDN}/2025/08/Meditation-hall-3-630x630.jpg`],
  villageAbout: [`/assets/images/vetham/village-about.jpg`, `${CDN}/2025/08/village_about-1536x864.jpg`],
  meditationHall: [`/assets/images/resource/cause-1.jpg`, `${CDN}/2025/08/construction-4-meditation-hall-630x630.jpg`],
  construction: [`/assets/images/resource/cause-2.jpg`, `${CDN}/2025/08/construction-3-630x630.jpg`],
  villagePlan: [`/assets/images/resource/cause-3.jpg`, `${CDN}/2025/08/village_plan-890x664.jpg`],
  mahaan: [`/assets/images/vetham/mahaan.png`, `${CDN}/2025/08/mahaan-png-600x469.png`],
  leader: [`/assets/images/vetham/leader.jpg`, `${CDN}/2025/08/leader-600x605.jpg`],
  history: [`/assets/images/vetham/history.jpg`, `${CDN}/2025/08/history-630x630.jpg`],
  trustee1: [`/assets/images/team/team-1.jpg`, `${CDN}/2025/09/trustee-1-e1760003310143-570x696.jpeg`],
  trustee2: [`/assets/images/team/team-2.jpg`, `${CDN}/2025/09/trustee-2-e1760004447431-570x696.jpeg`],
  trustee3: [`/assets/images/team/team-3.jpg`, `${CDN}/2025/09/trustee-4-570x696.png`],
  trustee4: [`/assets/images/team/team-4.jpg`, `${CDN}/2026/01/Gnanasiriyar-A-S-Sureash-Kumaar-570x696.jpg`],
  gallery1: [`/assets/images/gallery/gallery-1.jpg`, `${CDN}/2025/08/vetham-spiritual-group-36-890x664.jpg`],
  gallery2: [`/assets/images/gallery/gallery-2.jpg`, `${CDN}/2025/08/vetham-spiritual-group-37-890x664.jpg`],
  gallery3: [`/assets/images/gallery/gallery-3.jpg`, `${CDN}/2025/08/vetham-spiritual-group-38-890x664.jpg`],
  gallery4: [`/assets/images/gallery/gallery-4.jpg`, `${CDN}/2025/08/Meditation-hall-3-630x630.jpg`],
  gallery5: [`/assets/images/gallery/gallery-5.jpg`, `${CDN}/2025/08/construction-3-630x630.jpg`],
  gallery6: [`/assets/images/gallery/gallery-6.jpg`, `${CDN}/2025/08/history-630x630.jpg`],
  gallery5: [`/assets/images/gallery/gallery-5.jpg`, `${CDN}/2025/08/construction-3-630x630.jpg`],
  gallery6: [`/assets/images/gallery/gallery-6.jpg`, `${CDN}/2025/08/history-630x630.jpg`],
  blog1: [`/assets/images/news/news-1.jpg`, `${CDN}/2025/08/leader-600x605.jpg`],
  blog2: [`/assets/images/news/news-2.jpg`, `${CDN}/2025/08/village_about-1536x864.jpg`],
  blog3: [`/assets/images/news/news-3.jpg`, `${CDN}/2025/08/village_plan-890x664.jpg`],
  pageTitle: [`/assets/images/background/page-title.jpg`, `${CDN}/2025/08/village_about-1536x864.jpg`],
  feature1: [`/assets/images/vetham/village-about.jpg`, `${CDN}/2025/08/village_about-1536x864.jpg`],
  feature2: [`/assets/images/vetham/meditation-hall.jpg`, `${CDN}/2025/08/construction-4-meditation-hall-630x630.jpg`],
  testimonialBg: [`/assets/images/background/testimonial-bg.jpg`, `${CDN}/2025/08/village_about-1536x864.jpg`],
  shape1: [`/assets/images/shape/shape-1.png`],
  shape2: [`/assets/images/shape/shape-2.png`],
  icon1: [`/assets/images/icons/icon-1.png`],
  icon2: [`/assets/images/icons/icon-2.png`],
  icon3: [`/assets/images/icons/icon-3.png`],
  iconBg1: [`/assets/images/icons/icon-bg-1.png`],
  iconBg2: [`/assets/images/icons/icon-bg-2.png`],
  iconBg3: [`/assets/images/icons/icon-bg-3.png`],
  iconBg4: [`/assets/images/icons/icon-bg-4.png`],
};

export function img(key) {
  const entry = catalog[key];
  if (!entry) return '';
  return entry[0];
}

export function imgCdn(key) {
  const entry = catalog[key];
  if (!entry) return '';
  return entry[1] || entry[0];
}

export function imgSrcSet(key) {
  const entry = catalog[key];
  if (!entry) return undefined;
  if (entry.length < 2) return undefined;
  return `${entry[0]} 1x, ${entry[1]} 2x`;
}
