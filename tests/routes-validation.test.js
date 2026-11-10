import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('Views & Architecture Validation Test Suite', () => {
  const viewsDir = path.join(rootDir, 'src', 'views');
  const componentsDir = path.join(rootDir, 'src', 'components');

  test('All primary view files exist and have valid export defaults', () => {
    const requiredViews = [
      'HomeView.jsx',
      'AboutView.jsx',
      'StoryView.jsx',
      'PastorsView.jsx',
      'BeliefsView.jsx',
      'ServicesView.jsx',
      'MinistriesView.jsx',
      'MediaView.jsx',
      'GiveView.jsx',
      'PrayerView.jsx',
      'ContactSocialView.jsx',
      'PrivacyView.jsx',
      'TermsView.jsx',
    ];

    for (const view of requiredViews) {
      const viewPath = path.join(viewsDir, view);
      assert.ok(fs.existsSync(viewPath), `Missing view component: src/views/${view}`);

      const content = fs.readFileSync(viewPath, 'utf8');
      assert.ok(
        content.includes('export default function') || content.includes('export default'),
        `${view} does not have default export`
      );
    }
  });

  test('All core UI components exist', () => {
    const requiredComponents = [
      'Navbar.jsx',
      'Footer.jsx',
      'ServiceCountdown.jsx',
      'GivingModal.jsx',
      'PrayerModal.jsx',
      'VideoPlayerModal.jsx',
      'LightboxModal.jsx',
    ];

    for (const comp of requiredComponents) {
      const compPath = path.join(componentsDir, comp);
      assert.ok(fs.existsSync(compPath), `Missing component: src/components/${comp}`);
    }
  });

  test('Zero Telugu Unicode characters in any src/ file', () => {
    const srcDir = path.join(rootDir, 'src');

    function checkDir(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          checkDir(fullPath);
        } else if (/\.(js|jsx|html|css)$/.test(entry.name)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const hasTelugu = /[\u0C00-\u0C7F]/.test(content);
          assert.equal(
            hasTelugu,
            false,
            `Found unexpected Telugu characters in ${path.relative(rootDir, fullPath)}`
          );
        }
      }
    }

    checkDir(srcDir);
  });
});
