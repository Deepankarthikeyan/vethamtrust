import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Hide any legacy loader immediately before React paints
requestAnimationFrame(() => {
  document.querySelectorAll('.loader-wrap').forEach((el) => el.classList.add('is-hidden'));
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
