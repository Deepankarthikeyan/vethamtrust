import { GODS } from '../config/home';

export default function GodsTicker() {
  const names = [...GODS, ...GODS];

  return (
    <div className="kr-gods" aria-label="Sacred names of Indian gods" role="marquee">
      <div className="kr-gods-track" aria-hidden="true">
        {names.flatMap((name, i) => [
          <i key={`sep-${i}`} className="fas fa-om kr-gods-sep" />,
          <span key={`name-${i}`} className="kr-gods-name">{name}</span>,
        ])}
      </div>
    </div>
  );
}
