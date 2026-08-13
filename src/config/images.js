const CDN = 'https://vethamspiritualtrust.com/wp-content/uploads';
const V = '/assets/images/vetham';

const catalog = {
  logo: [`${V}/logo.png`, `${CDN}/2025/09/logo-vetham.png`],
  logoFooter: [`${V}/logo.png`, `${CDN}/2025/09/logo-vetham.png`],
  favicon: [`${V}/favicon.jpg`, `${CDN}/2025/09/cropped-logo-vetham-spiritual-group-180x180.jpg`],
  banner1: [`${V}/banner-1.jpg`, `${CDN}/2025/08/vetham-spiritual-group-36-890x664.jpg`],
  banner2: [`${V}/banner-2.jpg`, `${CDN}/2025/08/vetham-spiritual-group-37-890x664.jpg`],
  banner3: [`${V}/banner-3.jpg`, `${CDN}/2025/08/vetham-spiritual-group-38-890x664.jpg`],
  about1: [`${V}/group.jpg`, `${CDN}/2022/03/vetham-spiritual-group-4.jpg`],
  about2: [`${V}/meditation-hall.jpg`, `${CDN}/2025/08/Meditation-hall-3-630x630.jpg`],
  villageAbout: [`${V}/village-about.jpg`, `${CDN}/2025/08/village_about-1536x864.jpg`],
  meditationHall: [`${V}/meditation-hall.jpg`, `${CDN}/2025/08/construction-4-meditation-hall-630x630.jpg`],
  construction: [`${V}/construction.jpg`, `${CDN}/2025/08/construction-3-630x630.jpg`],
  villagePlan: [`${V}/village-plan.jpg`, `${CDN}/2025/08/village_plan-890x664.jpg`],
  mahaan: [`${V}/mahaan.png`, `${CDN}/2025/08/mahaan-png-600x469.png`],
  leader: [`${V}/leader.jpg`, `${CDN}/2025/08/leader-600x605.jpg`],
  history: [`${V}/history.jpg`, `${CDN}/2025/08/history-630x630.jpg`],
  trustee1: [`${V}/trustee-2.jpg`, `${CDN}/2025/09/trustee-2-e1760004447431-570x696.jpeg`],
  trustee2: [`${V}/trustee-1.jpg`, `${CDN}/2025/09/trustee-1-e1760003310143-570x696.jpeg`],
  trustee3: [`${V}/trustee-balasubramanian.png`, `${CDN}/2025/09/trustee-4-570x696.png`],
  trustee4: [`${V}/trustee-4.jpg`, `${CDN}/2026/01/Gnanasiriyar-A-S-Sureash-Kumaar-570x696.jpg`],
  blog1: [`${V}/blog-1.jpg`, `${CDN}/2025/08/leader-600x605.jpg`],
  blog2: [`${V}/blog-2.jpg`, `${CDN}/2025/08/village_about-1536x864.jpg`],
  blog3: [`${V}/blog-3.jpg`, `${CDN}/2025/08/village_plan-890x664.jpg`],
  blog4: [`${V}/blog-4.jpg`],
  blog5: [`${V}/blog-5.jpg`],
  pageTitle: [`${V}/page-banner.jpg`, `${CDN}/2025/08/village_about-1536x864.jpg`],
  feature1: [`${V}/village-about.jpg`, `${CDN}/2025/08/village_about-1536x864.jpg`],
  feature2: [`${V}/meditation-hall.jpg`, `${CDN}/2025/08/construction-4-meditation-hall-630x630.jpg`],
  testimonialBg: [`${V}/village-about.jpg`, `${CDN}/2025/08/village_about-1536x864.jpg`],
  qrCode: [`${V}/qr-code-vkst-scan.png`],
  shape1: ['/assets/images/shape/shape-1.png'],
  shape2: ['/assets/images/shape/shape-2.png'],
  icon1: ['/assets/images/icons/icon-1.png'],
  icon2: ['/assets/images/icons/icon-2.png'],
  icon3: ['/assets/images/icons/icon-3.png'],
  iconBg1: ['/assets/images/icons/icon-bg-1.png'],
  iconBg2: ['/assets/images/icons/icon-bg-2.png'],
  iconBg3: ['/assets/images/icons/icon-bg-3.png'],
  iconBg4: ['/assets/images/icons/icon-bg-4.png'],
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
