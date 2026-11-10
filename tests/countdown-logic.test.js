import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

/**
 * Sunday service candidates calculation logic from ServiceCountdown.jsx
 */
function getNextSundayService(now = new Date()) {
  const candidates = [];

  for (let i = 0; i < 14; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    if (d.getDay() === 0) {
      candidates.push({
        title: "First Sunday Service",
        timeLabel: "Sunday • 7:30 AM",
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), 7, 30, 0),
      });
      candidates.push({
        title: "Second Sunday Service",
        timeLabel: "Sunday • 11:00 AM",
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), 11, 0, 0),
      });
      candidates.push({
        title: "Youth Bible Study",
        timeLabel: "Sunday • 5:00 PM",
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), 17, 0, 0),
      });
      candidates.push({
        title: "Third Sunday Service",
        timeLabel: "Sunday • 6:30 PM",
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), 18, 30, 0),
      });
    }
  }

  const future = candidates
    .filter((c) => c.date.getTime() > now.getTime())
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return future[0] || candidates[0];
}

/**
 * 2nd Saturday 9:30 AM algorithm from MinistriesView.jsx
 */
function getNextSecondSaturday(now = new Date()) {
  let year = now.getFullYear();
  let month = now.getMonth();
  while (true) {
    const firstDay = new Date(year, month, 1);
    const firstSaturdayDate = 1 + ((6 - firstDay.getDay() + 7) % 7);
    const secondSaturday = new Date(year, month, firstSaturdayDate + 7, 9, 30, 0, 0);
    if (secondSaturday > now) return secondSaturday;
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
  }
}

describe('Countdown & Scheduling Algorithms Test Suite', () => {
  test('Sunday 6:00 AM -> targets 1st Sunday Service (7:30 AM)', () => {
    // 2026-11-15 is a Sunday
    const simulatedNow = new Date(2026, 10, 15, 6, 0, 0);
    const next = getNextSundayService(simulatedNow);

    assert.equal(next.title, 'First Sunday Service');
    assert.equal(next.timeLabel, 'Sunday • 7:30 AM');
    assert.ok(next.date.getTime() > simulatedNow.getTime());
  });

  test('Sunday 8:00 AM -> targets 2nd Sunday Service (11:00 AM)', () => {
    const simulatedNow = new Date(2026, 10, 15, 8, 0, 0);
    const next = getNextSundayService(simulatedNow);

    assert.equal(next.title, 'Second Sunday Service');
    assert.equal(next.timeLabel, 'Sunday • 11:00 AM');
  });

  test('Sunday 1:00 PM -> targets Youth Bible Study (5:00 PM)', () => {
    const simulatedNow = new Date(2026, 10, 15, 13, 0, 0);
    const next = getNextSundayService(simulatedNow);

    assert.equal(next.title, 'Youth Bible Study');
    assert.equal(next.timeLabel, 'Sunday • 5:00 PM');
  });

  test('Sunday 5:30 PM -> targets 3rd Sunday Service (6:30 PM)', () => {
    const simulatedNow = new Date(2026, 10, 15, 17, 30, 0);
    const next = getNextSundayService(simulatedNow);

    assert.equal(next.title, 'Third Sunday Service');
    assert.equal(next.timeLabel, 'Sunday • 6:30 PM');
  });

  test('Sunday 9:00 PM -> rolls over to NEXT Sunday First Service (7:30 AM)', () => {
    const simulatedNow = new Date(2026, 10, 15, 21, 0, 0);
    const next = getNextSundayService(simulatedNow);

    assert.equal(next.title, 'First Sunday Service');
    assert.equal(next.date.getDate(), 22); // Next Sunday (15 + 7)
    assert.ok(next.date.getTime() > simulatedNow.getTime());
  });

  test('Weekday (Wednesday 2:00 PM) -> targets upcoming Sunday First Service', () => {
    // 2026-11-11 is Wednesday
    const simulatedNow = new Date(2026, 10, 11, 14, 0, 0);
    const next = getNextSundayService(simulatedNow);

    assert.equal(next.title, 'First Sunday Service');
    assert.equal(next.date.getDay(), 0); // Sunday
    assert.equal(next.date.getDate(), 15);
  });

  test('Second Saturday algorithm always returns a Saturday on or between day 8 and 14', () => {
    for (let month = 0; month < 12; month++) {
      const now = new Date(2026, month, 1);
      const nextSecondSat = getNextSecondSaturday(now);

      assert.equal(nextSecondSat.getDay(), 6, 'Must be a Saturday');
      assert.equal(nextSecondSat.getHours(), 9, 'Must be at 9 AM');
      assert.equal(nextSecondSat.getMinutes(), 30, 'Must be at 30 mins');
      assert.ok(
        nextSecondSat.getDate() >= 8 && nextSecondSat.getDate() <= 14,
        `2nd Saturday of month ${month + 1} was date ${nextSecondSat.getDate()}, expected 8-14`
      );
    }
  });

  test('Second Saturday algorithm handles year rollover smoothly', () => {
    const lateDecember = new Date(2026, 11, 20); // Dec 20, 2026
    const nextSat = getNextSecondSaturday(lateDecember);

    assert.equal(nextSat.getFullYear(), 2027);
    assert.equal(nextSat.getMonth(), 0); // January 2027
    assert.equal(nextSat.getDay(), 6);
  });
});
