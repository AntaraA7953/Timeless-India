import { useEffect, useState } from "react";

type FestivalCountdownProps = {
  date: string;
  label: string;
  theme: "durga" | "diwali" | "christmas";
};

type CountdownValues = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ZERO: CountdownValues = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function getCountdown(target: number): CountdownValues {
  const remaining = Math.max(0, target - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export default function FestivalCountdown({ date, label, theme }: FestivalCountdownProps) {
  const target = new Date(date).getTime();
  const [countdown, setCountdown] = useState(() => getCountdown(target));

  useEffect(() => {
    const update = () => setCountdown(getCountdown(target));
    update();

    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const hasArrived = countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0;
  const units = [
    [countdown.days, "days"],
    [countdown.hours, "hours"],
    [countdown.minutes, "minutes"],
    [countdown.seconds, "seconds"],
  ] as const;

  return (
    <section className={`festival-countdown countdown-${theme}`} aria-label={`${label} countdown`}>
      <div className="countdown-heading">
        <span className="countdown-spark" aria-hidden="true">✦</span>
        <div>
          <span className="countdown-eyebrow">THE WAITING BEGINS</span>
          <strong>{hasArrived ? `${label} is here` : `Until ${label}`}</strong>
        </div>
        <span className="countdown-spark" aria-hidden="true">✦</span>
      </div>

      <div className="countdown-units">
        {units.map(([value, unit]) => (
          <div className="countdown-unit" key={unit}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{unit}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
