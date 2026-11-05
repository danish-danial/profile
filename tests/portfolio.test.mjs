import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const page = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');

test('home and notebook show real work without listing the starter example', async () => {
    const [home, notes] = await Promise.all([page('index.html'), page('notes/index.html')]);
    assert.match(home, /<h1[^>]*>Danish Danial<\/h1>/);
    assert.match(home, /<summary>Under the hood<\/summary>/);
    assert.match(home, /<summary>Development notes<\/summary>/);
    assert.match(home, /href="mailto:danishdanialzurkanain@gmail\.com"/);
    assert.match(home, /Catspotting/);
    assert.match(home, /makanan-larangan/);
    assert.match(home, /id="work"/);
    assert.match(home, /href="\/notes\/"/);
    assert.match(notes, /href="\/"/);
    assert.doesNotMatch(home, /hero-directory|On my desk|Explore the work|Work alongside opinions/);
    for (const html of [home, notes]) {
        assert.match(html, /Nothing published yet/);
        assert.doesNotMatch(html, /The greatest post of all time/);
        assert.match(html, /<main id="main"/);
        assert.match(html, /name="description"/);
        assert.match(html, /Radio Canada/);
        assert.doesNotMatch(html, /Zilla Slab|Spectral/);
        assert.doesNotMatch(html, /astro\.build|Astro Basics/);
    }
});

test('homepage stays brief with technical details available on demand', async () => {
    const html = await page('index.html');
    const text = html
        .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '')
        .replace(/<details\b[^>]*>[\s\S]*?<\/details>/g, '')
        .replace(/<[^>]*>/g, ' ')
        .trim();
    assert.ok(text.split(/\s+/).length <= 100, 'default homepage should stay under 100 words');
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert.equal((html.match(/<details\b/g) ?? []).length, 2);
});

test('old archive redirects and the unlisted example uses the reading layout', async () => {
    assert.match(await page('posts/index.html'), /url=\/notes\//);
    const example = await page('posts/great-post/index.html');
    assert.match(example, /<h1>The greatest post of all time<\/h1>/);
    assert.match(example, /<em>great<\/em>/);
    assert.match(example, /class="prose page-width"/);
});
