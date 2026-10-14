import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FULL_BLEED_PATHS = new Set(['/', '/our-village']);

/**
 * Keeps a single body mode class (`vx-home` | `vx-inner`) in sync with the route.
 * Previously both classes could stack after client-side navigation, which applied
 * `body.vx-inner p { color: … }` to the whole document (footer, village tiles, CTA).
 */
export default function useBodyPageMode() {
  const { pathname } = useLocation();
  const fullBleed = FULL_BLEED_PATHS.has(pathname);

  useEffect(() => {
    const body = document.body;
    body.classList.remove('krishna-home', 'vetham-inner', 'boxed_wrapper', 'vx-home', 'vx-inner');
    body.classList.add('vx-site', fullBleed ? 'vx-home' : 'vx-inner');

    const vethamCss = document.getElementById('vetham-custom-css');
    const vethamType = document.getElementById('vetham-typography-css');
    if (vethamCss) vethamCss.disabled = false;
    if (vethamType) vethamType.disabled = false;
  }, [pathname, fullBleed]);

  return { fullBleed };
}
