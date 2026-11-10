import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  CHURCH_INFO,
  SERVICES,
  WEEKLY_PROGRAMS,
  UPCOMING_EVENTS,
  PASTORS,
  GIVING_DETAILS,
  MINISTRIES,
  VIDEOS,
  STORY_PHOTOS,
  BELIEFS,
} from '../src/data/churchData.js';

describe('Data Integrity Test Suite', () => {
  test('CHURCH_INFO contains complete and valid church metadata', () => {
    assert.equal(CHURCH_INFO.name, 'Agape AG Church');
    assert.equal(CHURCH_INFO.city, 'Guntakal');
    assert.equal(CHURCH_INFO.state, 'Andhra Pradesh');
    assert.equal(CHURCH_INFO.pincode, '515803');
    assert.ok(CHURCH_INFO.phone.includes('98484 88414'));
    assert.ok(CHURCH_INFO.phones.length >= 2);
    assert.equal(CHURCH_INFO.email, 'agapegtl@gmail.com');
    assert.ok(CHURCH_INFO.youtubeStreams.includes('youtube.com'));
    assert.ok(CHURCH_INFO.address.full.includes('515803'));
  });

  test('SERVICES contains exactly 4 Sunday services with correct timings', () => {
    assert.equal(SERVICES.length, 4);

    const [first, second, youth, third] = SERVICES;
    assert.equal(first.id, 1);
    assert.ok(first.time.includes('7:30 AM'));
    assert.equal(first.isLive, true);

    assert.equal(second.id, 2);
    assert.ok(second.time.includes('11:00 AM'), 'Second service must be at 11:00 AM');

    assert.equal(youth.id, 3);
    assert.ok(youth.time.includes('5:00 PM'));

    assert.equal(third.id, 4);
    assert.ok(third.time.includes('6:30 PM'));
    assert.equal(third.isLive, true);
  });

  test('WEEKLY_PROGRAMS contains all 5 official church programs', () => {
    assert.equal(WEEKLY_PROGRAMS.length, 5);

    const ids = WEEKLY_PROGRAMS.map((p) => p.id);
    assert.ok(ids.includes('mens-meeting'));
    assert.ok(ids.includes('intercessory-prayer'));
    assert.ok(ids.includes('womens-meeting'));
    assert.ok(ids.includes('youth-meeting'));
    assert.ok(ids.includes('all-night-prayer'));

    for (const prog of WEEKLY_PROGRAMS) {
      assert.ok(prog.title, `Missing title on ${prog.id}`);
      assert.ok(prog.schedule, `Missing schedule on ${prog.id}`);
      assert.ok(prog.description, `Missing description on ${prog.id}`);
      assert.ok(prog.tag, `Missing tag on ${prog.id}`);
    }
  });

  test('PASTORS information matches official pastoral banner', () => {
    assert.equal(PASTORS.length, 2);

    const senior = PASTORS.find((p) => p.id === 'senior-pastor');
    assert.ok(senior);
    assert.ok(senior.name.includes('Solomon Vijay Raj'));
    assert.equal(senior.phoneRaw, '+919848488414');
    assert.equal(senior.email, 'solmon4christ@gmail.com');

    const associate = PASTORS.find((p) => p.id === 'associate-pastor');
    assert.ok(associate);
    assert.ok(associate.name.includes('Benedict Vijay Raj'));
    assert.equal(associate.phoneRaw, '+919533362164');
    assert.equal(associate.email, 'aagben@gmail.com');
  });

  test('GIVING_DETAILS contains complete bank and UPI information', () => {
    assert.ok(GIVING_DETAILS.accountName);
    assert.ok(GIVING_DETAILS.accountNumber);
    assert.ok(GIVING_DETAILS.bankName);
    assert.ok(GIVING_DETAILS.ifsc);
    assert.ok(GIVING_DETAILS.upiId.includes('@'));
    assert.ok(GIVING_DETAILS.qrImage);
  });

  test('MINISTRIES contains all 8 church ministries', () => {
    assert.equal(MINISTRIES.length, 8);
    for (const m of MINISTRIES) {
      assert.ok(m.id);
      assert.ok(m.title);
      assert.ok(m.image);
      assert.ok(m.heroImage);
      assert.ok(m.timing);
      assert.ok(m.details && m.details.length > 0);
    }
  });

  test('STORY_PHOTOS has all 59 milestone entries', () => {
    assert.equal(STORY_PHOTOS.length, 59);
    for (let i = 0; i < 59; i++) {
      assert.equal(STORY_PHOTOS[i].id, i + 1);
      assert.equal(STORY_PHOTOS[i].src, `about/story/img-${i + 1}.png`);
    }
  });

  test('BELIEFS has complete doctrinal statements', () => {
    assert.ok(BELIEFS.length >= 6);
    for (const b of BELIEFS) {
      assert.ok(b.title);
      assert.ok(b.icon);
      assert.ok(b.text);
    }
  });
});
