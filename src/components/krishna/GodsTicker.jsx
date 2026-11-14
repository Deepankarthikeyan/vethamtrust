import { TICKER_ITEMS } from '../../config/vethamHome';

export default function GodsTicker() {
  const names = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="kr-gods" aria-label="Spiritual teachings" role="marquee">
      <div className="kr-gods-track" aria-hidden="true">
        {names.flatMap((name, i) => [
          <i key={`sep-${i}`} className="fas fa-om kr-gods-sep" />,
          <span key={`name-${i}`} className="kr-gods-name">{name}</span>,
        ])}
      </div>
    </div>
  );
}
