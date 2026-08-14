#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../public/assets/images/vetham');
const GALLERY_OUT = path.join(OUT, 'gallery');
const BASE = 'https://vethamspiritualtrust.com/wp-content/uploads';

const IMAGES = {
  'logo.png': `${BASE}/2025/09/logo-vetham.png`,
  'favicon.jpg': `${BASE}/2025/09/cropped-logo-vetham-spiritual-group-180x180.jpg`,
  'banner-1.jpg': `${BASE}/2025/08/village_about.jpg`,
  'banner-2.jpg': `${BASE}/2025/08/Meditation-hall-3.jpg`,
  'banner-3.jpg': `${BASE}/2025/08/history.jpg`,
  'banner-4.jpg': `${BASE}/2025/08/village_plan.jpg`,
  'mahaan.png': `${BASE}/2025/08/mahaan-png.png`,
  'leader.jpg': `${BASE}/2025/08/leader.jpg`,
  'village-about.jpg': `${BASE}/2025/08/village_about.jpg`,
  'village-plan.jpg': `${BASE}/2025/08/village_plan.jpg`,
  'history.jpg': `${BASE}/2025/08/history.jpg`,
  'construction.jpg': `${BASE}/2025/08/construction-3.jpg`,
  'meditation-hall.jpg': `${BASE}/2025/08/Meditation-hall-3.jpg`,
  'page-banner.jpg': `${BASE}/2025/08/vetham-spiritual-group-9.jpg`,
  'about-group.jpg': `${BASE}/2025/08/vetham-spiritual-group-19.jpg`,
  'trustee-selvin.jpg': `${BASE}/2025/09/trustee-1-e1760003310143.jpeg`,
  'trustee-gnana-rishi.jpg': `${BASE}/2025/09/trustee-2-e1760004447431.jpeg`,
  'trustee-balasubramanian.png': `${BASE}/2025/09/trustee-4.png`,
  'trustee-sureash.jpg': `${BASE}/2026/01/Gnanasiriyar-A-S-Sureash-Kumaar.jpg`,
  'blog-1.jpg': `${BASE}/2025/08/vetham-spiritual-group-36.jpg`,
  'blog-2.jpg': `${BASE}/2025/08/vetham-spiritual-group-37.jpg`,
  'blog-3.jpg': `${BASE}/2025/08/vetham-spiritual-group-38.jpg`,
  'blog-4.jpg': `${BASE}/2023/04/vetham-spiritual-group-35.jpg`,
  'blog-5.jpg': `${BASE}/2022/03/vetham-spiritual-group-7.jpg`,
  'razorpay-logo.png': `${BASE}/2025/09/razorpay-with-all-cards-upi-logo-png.png`,
  'contact-phone.png': `${BASE}/2025/08/incoming-call-e1755454105274.png`,
  'contact-home.png': `${BASE}/2025/08/home-2-e1755454366869.png`,
  'contact-email.png': `${BASE}/2025/08/exchange-mails-1-e1755454643815.png`,
  'testimonial-boy.png': `${BASE}/2022/05/boy.png`,
  'testimonial-woman.png': `${BASE}/2022/05/woman.png`,
  'qr-code-vkst-scan.png': 'https://vethamspiritualtrust.com/wp-content/uploads/elementor/thumbs/qr-code-vkst-r9yiuvio85jaduh93cxo9jzyxlu5ugrgl32jta7d9s.jpg',
};

const GALLERY = {
  'foundation-course-1.jpg': `${BASE}/2025/08/foundation-course-1.jpg`,
  'foundation-course-2-scaled.jpg': `${BASE}/2025/08/foundation-course-2-scaled.jpg`,
  'foundation-course-4-scaled.jpg': `${BASE}/2025/08/foundation-course-4-scaled.jpg`,
  'ASR-Ayya-Teacher.jpg': `${BASE}/2025/08/ASR-Ayya-Teacher.jpg`,
  'Nagarajan-Ayya-Teacher.jpg': `${BASE}/2025/08/Nagarajan-Ayya-Teacher.jpg`,
  'event-photos-1-scaled.jpg': `${BASE}/2025/08/event-photos-1-scaled.jpg`,
  'event-photos-4-scaled.jpg': `${BASE}/2025/08/event-photos-4-scaled.jpg`,
  'event-photos-7-scaled.jpg': `${BASE}/2025/08/event-photos-7-scaled.jpg`,
  'event-photos-10-scaled.jpg': `${BASE}/2025/08/event-photos-10-scaled.jpg`,
  'event-photos-15-scaled.jpg': `${BASE}/2025/08/event-photos-15-scaled.jpg`,
  'event-photos-16-scaled.jpg': `${BASE}/2025/08/event-photos-16-scaled.jpg`,
  'event-photos-18-scaled.jpg': `${BASE}/2025/08/event-photos-18-scaled.jpg`,
  'event-photos-19-scaled.jpg': `${BASE}/2025/08/event-photos-19-scaled.jpg`,
  'event-photos-20-scaled.jpg': `${BASE}/2025/08/event-photos-20-scaled.jpg`,
  'event-photos-21-scaled.jpg': `${BASE}/2025/08/event-photos-21-scaled.jpg`,
  'event-photos-23-scaled.jpg': `${BASE}/2025/08/event-photos-23-scaled.jpg`,
  'event-photos-39-scaled.jpg': `${BASE}/2025/08/event-photos-39-scaled.jpg`,
  'event-photos-43-scaled.jpg': `${BASE}/2025/08/event-photos-43-scaled.jpg`,
  'event-photos-45-scaled.jpg': `${BASE}/2025/08/event-photos-45-scaled.jpg`,
  'event-photos-47-scaled.jpg': `${BASE}/2025/08/event-photos-47-scaled.jpg`,
  'event-photos-48-scaled.jpg': `${BASE}/2025/08/event-photos-48-scaled.jpg`,
  'event-photos-49-scaled.jpg': `${BASE}/2025/08/event-photos-49-scaled.jpg`,
  'event-photos-50-scaled.jpg': `${BASE}/2025/08/event-photos-50-scaled.jpg`,
  'event-photos-52-scaled.jpg': `${BASE}/2025/08/event-photos-52-scaled.jpg`,
  'event-photos-54-scaled.jpg': `${BASE}/2025/08/event-photos-54-scaled.jpg`,
  'event-photos-57-scaled.jpg': `${BASE}/2025/08/event-photos-57-scaled.jpg`,
  'sept-event-2025-1.jpg': `${BASE}/2025/10/sept-event-2025-1.jpg`,
  'sept-event-2025-2.jpg': `${BASE}/2025/10/sept-event-2025-2.jpg`,
  'sept-event-2025-3.jpg': `${BASE}/2025/10/sept-event-2025-3.jpg`,
  'sept-event-2025-4.jpg': `${BASE}/2025/10/sept-event-2025-4.jpg`,
};

async function downloadFile(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  return buf.length;
}

async function downloadMap(map, dir) {
  fs.mkdirSync(dir, { recursive: true });
  for (const [name, url] of Object.entries(map)) {
    const dest = path.join(dir, name);
    try {
      const size = await downloadFile(url, dest);
      console.log('ok', name, size);
    } catch (e) {
      console.error('fail', name, e.message);
    }
  }
}

await downloadMap(IMAGES, OUT);
await downloadMap(GALLERY, GALLERY_OUT);
console.log('done');
