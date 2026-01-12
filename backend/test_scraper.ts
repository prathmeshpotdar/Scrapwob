import { chromium } from 'playwright';

async function run() {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    console.log('Navigating to category...');
    await page.goto('https://www.worldofbooks.com/en-gb/collections/rare-fiction-books', { waitUntil: 'load' }); // load might be better than networkidle here

    // Try extracting products
    const products = await page.$$eval('.grid__item', (items) => {
        return items.map(item => {
            const titleEl = item.querySelector('.card__heading');
            const priceEl = item.querySelector('.price-item--sale, .price-item--regular');
            const imgEl = item.querySelector('img');
            const linkEl = item.querySelector('a.full-unstyled-link');

            return {
                title: titleEl?.textContent?.trim(),
                price: priceEl?.textContent?.trim(),
                image: imgEl?.getAttribute('src') || imgEl?.getAttribute('srcset'),
                link: linkEl?.getAttribute('href')
            };
        }).filter(p => p.title); // Filter empty ones
    });

    console.log('Found products:', products.length);
    if (products.length > 0) {
        console.log('Sample:', products[0]);
    } else {
        console.log('No products found with .grid__item');
        // Debug: print classes of first few divs
        const divs = await page.$$eval('div', els => els.slice(0, 50).map(e => e.className));
        console.log('Div classes:', divs);
    }

    await browser.close();
}

run().catch(console.error);
