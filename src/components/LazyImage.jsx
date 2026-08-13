import { useState } from 'react';

export default function LazyImage({ src, alt = '', className = '', width, height, loading = 'lazy' }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!src) return null;

  return (
    <img
      src={error ? '/assets/images/vetham/logo.png' : src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
      style={loaded ? undefined : { background: '#f0ebe3' }}
    />
  );
}
