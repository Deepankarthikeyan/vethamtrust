const loaders = {
  '/': () => import('../pages/Home'),
  '/about': () => import('../pages/About'),
  '/our-village': () => import('../pages/OurVillage'),
  '/courses': () => import('../pages/Courses'),
  '/services': () => import('../pages/Services'),
  '/leadership': () => import('../pages/Leadership'),
  '/events': () => import('../pages/Events'),
  '/blog': () => import('../pages/Blog'),
  '/social-media': () => import('../pages/SocialMedia'),
  '/contact': () => import('../pages/Contact'),
  '/donate': () => import('../pages/Donate'),
};

const started = new Set();

export function prefetchRoute(path) {
  const loader = loaders[path];
  if (!loader || started.has(path)) return;
  started.add(path);
  loader();
}
