const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');

test('index.html has a title', () => {
  assert.match(html, /<title>.+<\/title>/i);
});

test('index.html has an h1', () => {
  assert.match(html, /<h1>.+<\/h1>/i);
});