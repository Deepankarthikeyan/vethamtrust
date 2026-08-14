const V = '/assets/images/vetham';
const G = `${V}/gallery`;

const catalog = {
  logo: [`${V}/logo.png`],
  logoFooter: [`${V}/logo.png`],
  favicon: [`${V}/favicon.jpg`],
  banner1: [`${V}/banner-1.jpg`],
  banner2: [`${V}/banner-2.jpg`],
  banner3: [`${V}/banner-3.jpg`],
  banner4: [`${V}/banner-4.jpg`],
  about1: [`${V}/village-about.jpg`],
  about2: [`${V}/meditation-hall.jpg`],
  villageAbout: [`${V}/village-about.jpg`],
  meditationHall: [`${V}/meditation-hall.jpg`],
  construction: [`${V}/construction.jpg`],
  villagePlan: [`${V}/village-plan.jpg`],
  history: [`${V}/history.jpg`],
  mahaan: [`${V}/mahaan.png`],
  leader: [`${V}/leader.jpg`],
  aboutGroup: [`${V}/about-group.jpg`],
  trustee1: [`${V}/trustee-gnana-rishi.jpg`],
  trustee2: [`${V}/trustee-selvin.jpg`],
  trustee3: [`${V}/trustee-balasubramanian.png`],
  trustee4: [`${V}/trustee-sureash.jpg`],
  blog1: [`${V}/blog-1.jpg`],
  blog2: [`${V}/blog-2.jpg`],
  blog3: [`${V}/blog-3.jpg`],
  blog4: [`${V}/blog-4.jpg`],
  blog5: [`${V}/blog-5.jpg`],
  pageTitle: [`${V}/page-banner.jpg`],
  feature1: [`${V}/village-about.jpg`],
  feature2: [`${V}/meditation-hall.jpg`],
  qrCode: [`${V}/qr-code-vkst-scan.png`],
  razorpayLogo: [`${V}/razorpay-logo.png`],
  contactPhone: [`${V}/contact-phone.png`],
  contactEmail: [`${V}/contact-email.png`],
  contactHome: [`${V}/contact-home.png`],
  testimonialBoy: [`${V}/testimonial-boy.png`],
  testimonialWoman: [`${V}/testimonial-woman.png`],
  galleryPreview1: [`${G}/foundation-course-1.jpg`],
  galleryPreview2: [`${G}/foundation-course-2-scaled.jpg`],
  galleryPreview3: [`${G}/event-photos-1-scaled.jpg`],
  galleryPreview4: [`${G}/event-photos-4-scaled.jpg`],
};

export function img(key) {
  const entry = catalog[key];
  if (!entry) return '';
  return entry[0];
}

export function imgCdn(key) {
  return img(key);
}

export function imgSrcSet(key) {
  return undefined;
}
