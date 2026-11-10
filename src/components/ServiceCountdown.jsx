import React, { useState, useEffect } from 'react';

/**
 * Returns the nearest upcoming Sunday service from the current time.
 */
function getNextSundayService(now = new Date()) {
  const candidates = [];

  // Look ahead up to 14 days strictly for Sunday services
  for (let i = 0; i < 14; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    if (d.getDay() === 0) {
      // 1. First Sunday Service
      candidates.push({
        title: "First Sunday Service",
        timeLabel: "Sunday • 7:30 AM",
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), 7, 30, 0),
      });
      // 2. Second Sunday Service
      candidates.push({
        title: "Second Sunday Service",
        timeLabel: "Sunday • 11:00 AM",
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), 11, 0, 0),
      });
      // 3. Youth Bible Study
      candidates.push({
        title: "Youth Bible Study",
        timeLabel: "Sunday • 5:00 PM",
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), 17, 0, 0),
      });
      // 4. Third Sunday Service (Bilingual)
      candidates.push({
        title: "Third Sunday Service",
        timeLabel: "Sunday • 6:30 PM",
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), 18, 30, 0),
      });
    }
  }

  // Filter strictly future Sunday services
  const future = candidates
    .filter((c) => c.date.getTime() > now.getTime())
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return future[0] || candidates[0];
}

export default function ServiceCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [targetService, setTargetService] = useState(null);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const next = getNextSundayService(now);
      setTargetService(next);

      const diff = Math.max(0, next.date.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  if (!targetService) return null;

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto bg-white rounded-lg border border-neutral-border p-4 sm:p-5 shadow-card">
      {/* Header: Service Name & Schedule */}
      <div className="text-center mb-3 sm:mb-4">
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-teal-deep block">
          Next Sunday Service
        </span>
        <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mt-0.5">
          {targetService.title}
        </h3>
        <div className="text-xs font-medium text-gold-deep mt-0.5">
          {targetService.timeLabel}
        </div>
      </div>

      {/* 4-Column Balanced Grid: Zero squishing, perfectly proportioned boxes */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
        {/* Days */}
        <div className="bg-[#103546] text-white rounded-lg py-2.5 sm:py-3 px-1 text-center border border-teal-deep/30 shadow-subtle flex flex-col items-center justify-center">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-white leading-none">
            {pad(timeLeft.days)}
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-stone-300 mt-1.5 leading-none">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="bg-[#103546] text-white rounded-lg py-2.5 sm:py-3 px-1 text-center border border-teal-deep/30 shadow-subtle flex flex-col items-center justify-center">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-white leading-none">
            {pad(timeLeft.hours)}
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-stone-300 mt-1.5 leading-none">
            Hours
          </span>
        </div>

        {/* Minutes */}
        <div className="bg-[#103546] text-white rounded-lg py-2.5 sm:py-3 px-1 text-center border border-teal-deep/30 shadow-subtle flex flex-col items-center justify-center">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-white leading-none">
            {pad(timeLeft.minutes)}
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-stone-300 mt-1.5 leading-none">
            Mins
          </span>
        </div>

        {/* Seconds */}
        <div className="bg-[#103546] text-white rounded-lg py-2.5 sm:py-3 px-1 text-center border border-teal-deep/30 shadow-subtle flex flex-col items-center justify-center">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-muted leading-none">
            {pad(timeLeft.seconds)}
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold-muted mt-1.5 leading-none">
            Secs
          </span>
        </div>
      </div>
    </div>
  );
}
