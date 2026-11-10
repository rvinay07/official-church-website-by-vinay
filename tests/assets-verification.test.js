import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('Assets Verification Test Suite', () => {
  const publicDir = path.join(rootDir, 'public');

  test('Public directory exists', () => {
    assert.ok(fs.existsSync(publicDir), 'public/ directory must exist');
  });

  test('Critical church photos and icons exist and are non-empty in public/', () => {
    const criticalFiles = [
      'church-image-1.jpg',
      'church-image-2.jpeg',
      'church-image-3.jpeg',
      'church-image-4.jpeg',
      'church-image-5.jpeg',
      'church-image-6.jpeg',
      'IMG_7318.JPG.jpeg',
      'logo.png',
      'qr.png',
      '.nojekyll',
    ];

    for (const file of criticalFiles) {
      const filePath = path.join(publicDir, file);
      assert.ok(fs.existsSync(filePath), `Missing critical asset: public/${file}`);
      const stats = fs.statSync(filePath);
      if (file !== '.nojekyll') {
        assert.ok(stats.size > 0, `Asset public/${file} is empty (0 bytes)`);
      }
    }
  });

  test('All 59 church story milestone photos exist and are valid files', () => {
    for (let i = 1; i <= 59; i++) {
      const photoPath = path.join(publicDir, 'about', 'story', `img-${i}.png`);
      assert.ok(fs.existsSync(photoPath), `Missing story photo: img-${i}.png`);
      const stats = fs.statSync(photoPath);
      assert.ok(stats.size > 1000, `Story photo img-${i}.png is corrupted or empty`);
    }
  });

  test('Pastoral portraits exist', () => {
    const solomon = path.join(publicDir, 'about', 'pastors', 'solomon.JPG');
    const benny = path.join(publicDir, 'about', 'pastors', 'benny.JPG');

    assert.ok(fs.existsSync(solomon), 'Missing Senior Pastor photo');
    assert.ok(fs.existsSync(benny), 'Missing Associate Pastor photo');
  });

  test('All ministry badges exist in public/ministries', () => {
    const ministryBadges = [
      'all.png',
      'brother.png',
      'children.png',
      'chosen.png',
      'gospel.png',
      'sister.png',
      'ushering.png',
    ];

    for (const badge of ministryBadges) {
      const badgePath = path.join(publicDir, 'ministries', badge);
      assert.ok(fs.existsSync(badgePath), `Missing ministry badge: ${badge}`);
    }
  });

  test('All homepage preview cards exist in public/homepage', () => {
    const previews = [
      'aboutpic.png',
      'mediapic.png',
      'ministriespic.png',
      'prayerpic.png',
      'socialpic.png',
      'sundaypic.png',
    ];

    for (const p of previews) {
      const pPath = path.join(publicDir, 'homepage', p);
      assert.ok(fs.existsSync(pPath), `Missing homepage preview: ${p}`);
    }
  });
});
