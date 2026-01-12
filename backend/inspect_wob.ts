import { chromium } from 'playwright';
import * as fs from 'fs';

async function run() {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    console.log('Navigating to home...');
    await page.goto('https://www.worldofbooks.com/en-gb', { waitUntil: 'domcontentloaded' });
    const homeHtml = await page.content();
    fs.writeFileSync('wob_home.html', homeHtml);
    console.log('Saved wob_home.html');

    console.log('Navigating to category...');
    await page.goto('https://www.worldofbooks.com/en-gb/collections/fiction', { waitUntil: 'networkidle' });
    const catHtml = await page.content();
    fs.writeFileSync('wob_category.html', catHtml);
    console.log('Saved wob_category.html');

    await browser.close();
}

run().catch(console.error);
