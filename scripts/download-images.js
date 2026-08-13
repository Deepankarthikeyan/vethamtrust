#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../public/assets/vetham');

const IMAGES = {
  'logo.png': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/09/logo-vetham.png',
  'favicon.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/09/cropped-logo-vetham-spiritual-group-180x180.jpg',
  'banner-1.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/vetham-spiritual-group-36-890x664.jpg',
  'banner-2.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/vetham-spiritual-group-37-890x664.jpg',
  'banner-3.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/vetham-spiritual-group-38-890x664.jpg',
  'about-1.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2022/03/vetham-spiritual-group-4.jpg',
  'about-2.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/Meditation-hall-3-630x630.jpg',
  'village-about.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/village_about-1536x864.jpg',
  'meditation-hall.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/construction-4-meditation-hall-630x630.jpg',
  'construction.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/construction-3-630x630.jpg',
  'village-plan.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/village_plan-890x664.jpg',
  'mahaan.png': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/mahaan-png-600x469.png',
  'leader.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/leader-600x605.jpg',
  'history.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/history-630x630.jpg',
  'trustee-1.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/09/trustee-1-e1760003310143-570x696.jpeg',
  'trustee-2.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/09/trustee-2-e1760004447431-570x696.jpeg',
  'trustee-3.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/09/trustee-4-570x696.png',
  'trustee-4.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2026/01/Gnanasiriyar-A-S-Sureash-Kumaar-570x696.jpg',
  'gallery-1.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/vetham-spiritual-group-36-890x664.jpg',
  'gallery-2.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/vetham-spiritual-group-37-890x664.jpg',
  'gallery-3.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/vetham-spiritual-group-38-890x664.jpg',
  'gallery-4.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/Meditation-hall-3-630x630.jpg',
  'gallery-5.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/construction-3-630x630.jpg',
  'gallery-6.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/history-630x630.jpg',
  'blog-1.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/leader-600x605.jpg',
  'blog-2.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/village_about-1536x864.jpg',
  'blog-3.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/village_plan-890x664.jpg',
  'page-title.jpg': 'https://vethamspiritualtrust.com/wp-content/uploads/2025/08/village_about-1536x864.jpg',
};

fs.mkdirSync(OUT, { recursive: true });

for (const [name, url] of Object.entries(IMAGES)) {
  const dest = path.join(OUT, name);
  if (fs.existsSync(dest)) {
    console.log('skip', name);
    continue;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log('ok', name, buf.length);
  } catch (e) {
    console.error('fail', name, e.message);
  }
}

// Copy to resource paths used by theme
const copies = [
  ['banner-1.jpg', '../images/banner/banner-1.jpg'],
  ['banner-2.jpg', '../images/banner/banner-2.jpg'],
  ['banner-3.jpg', '../images/banner/banner-3.jpg'],
  ['about-1.jpg', '../images/resource/about-1.jpg'],
  ['about-2.jpg', '../images/resource/about-2.jpg'],
  ['logo.png', '../images/logo.png'],
  ['logo.png', '../images/logo-2.png'],
  ['logo.png', '../images/logo-3.png'],
  ['meditation-hall.jpg', '../images/resource/cause-1.jpg'],
  ['construction.jpg', '../images/resource/cause-2.jpg'],
  ['village-plan.jpg', '../images/resource/cause-3.jpg'],
  ['trustee-1.jpg', '../images/team/team-1.jpg'],
  ['trustee-2.jpg', '../images/team/team-2.jpg'],
  ['trustee-3.jpg', '../images/team/team-3.jpg'],
  ['trustee-4.jpg', '../images/team/team-4.jpg'],
  ['gallery-1.jpg', '../images/gallery/gallery-1.jpg'],
  ['gallery-2.jpg', '../images/gallery/gallery-2.jpg'],
  ['gallery-3.jpg', '../images/gallery/gallery-3.jpg'],
  ['gallery-4.jpg', '../images/gallery/gallery-4.jpg'],
  ['blog-1.jpg', '../images/news/news-1.jpg'],
  ['blog-2.jpg', '../images/news/news-2.jpg'],
  ['blog-3.jpg', '../images/news/news-3.jpg'],
  ['page-title.jpg', '../images/background/page-title.jpg'],
  ['page-title.jpg', '../images/background/page-title-4.jpg'],
];

for (const [src, rel] of copies) {
  const from = path.join(OUT, src);
  const to = path.join(OUT, rel);
  if (fs.existsSync(from)) {
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
  }
}

console.log('done');
