const BASE = '/maharatri';

export function asset(path) {
  return `${BASE}/${path.replace(/^\//, '')}`;
}
