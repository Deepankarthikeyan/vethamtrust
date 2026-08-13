const MIN_DISPLAY_MS = 650;
const MAX_DISPLAY_MS = 1100;

let hideTimer = null;

export function hidePreloader() {
  document.querySelectorAll('.loader-wrap').forEach((el) => {
    el.classList.add('is-hidden');
    el.setAttribute('aria-hidden', 'true');
  });
}

export function showPreloader() {
  document.querySelectorAll('.loader-wrap').forEach((el) => {
    el.classList.remove('is-hidden');
    el.setAttribute('aria-hidden', 'false');
  });
}

/**
 * Show the VETHAM loader briefly, then hide after scripts are ready.
 * Always visible at least MIN_DISPLAY_MS, never longer than MAX_DISPLAY_MS.
 */
export async function runInitialPreloader(readyTask) {
  showPreloader();
  const started = performance.now();

  const maxTimer = setTimeout(hidePreloader, MAX_DISPLAY_MS);

  try {
    await readyTask();
  } finally {
    const elapsed = performance.now() - started;
    const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      hidePreloader();
      clearTimeout(maxTimer);
    }, remaining);
  }
}
