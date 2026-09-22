import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = 'https://metropolitanhost.com/themes/themeforest/html/maharatri';
const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..', 'public', 'maharatri');

const CSS_FILES = [
  'assets/css/plugins/bootstrap.min.css',
  'assets/css/plugins/animate.min.css',
  'assets/css/plugins/magnific-popup.css',
  'assets/css/plugins/slick.css',
  'assets/css/plugins/slick-theme.css',
  'assets/fonts/flaticon/flaticon.css',
  'assets/css/plugins/font-awesome.min.css',
  'assets/css/style.css',
  'assets/css/responsive.css',
  'assets/css/theme-colors/color9.css',
  'assets/css/mht-panel.css',
  'assets/css/mht-v13.css',
  'assets/css/krishna.css',
];

const IMAGES = [
  'assets/img/logo.webp',
  'assets/img/om.svg',
  'assets/img/banner/s1.webp',
  'assets/img/banner/s2.webp',
  'assets/img/banner/s3.webp',
  'assets/img/banner/s4.webp',
  'assets/img/cta/3.webp',
  'assets/img/donation/5.webp',
  'assets/img/donation/6.webp',
  'assets/img/donation/7.webp',
  'assets/img/puja/1.webp',
  'assets/img/puja/2.webp',
  'assets/img/puja/3.webp',
  'assets/img/puja/4.webp',
  'assets/img/puja/5.webp',
  'assets/img/puja/6.webp',
  'assets/img/volunteers/3.webp',
  'assets/img/volunteers/4.webp',
  'assets/img/volunteers/5.webp',
  'assets/img/volunteers/6.webp',
  'assets/img/video-gallery/01.webp',
  'assets/img/video-gallery/1.webp',
  'assets/img/video-gallery/2.webp',
  'assets/img/video-gallery/3.webp',
  'assets/img/video-gallery/4.webp',
  'assets/img/blog/1.webp',
  'assets/img/blog/2.webp',
  'assets/img/blog/3.webp',
  'assets/img/people/1.webp',
  'assets/img/people/2.webp',
  'assets/img/ig/1.webp',
  'assets/img/ig/2.webp',
  'assets/img/ig/3.webp',
  'assets/img/ig/4.webp',
  'assets/img/ig/5.webp',
  'assets/img/ig/6.webp',
  'assets/fonts/flaticon/Flaticon.woff2',
  'assets/fonts/flaticon/Flaticon.woff',
  'assets/fonts/flaticon/Flaticon.ttf',
];

async function download(path) {
  const url = `${BASE}/${path}`;
  const dest = join(ROOT, path);
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log('OK', path);
}

async function patchKrishnaCss() {
  const cssPath = join(ROOT, 'assets/css/krishna.css');
  const { readFile } = await import('node:fs/promises');
  let css = await readFile(cssPath, 'utf8');
  css = css.replace(/url\('\.\.\/img\//g, "url('/maharatri/assets/img/");
  await writeFile(cssPath, css);
  console.log('Patched krishna.css image paths');
}

async function main() {
  console.log('Downloading Maharatri assets to', ROOT);
  for (const file of [...CSS_FILES, ...IMAGES]) {
    try {
      await download(file);
    } catch (err) {
      console.warn('SKIP', file, err.message);
    }
  }
  await patchKrishnaCss();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
