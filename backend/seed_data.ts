
async function seed() {
    try {
        console.log('Seeding Navigation...');
        const navRes = await fetch('http://localhost:3000/scraper/navigation', { method: 'POST' });
        console.log('Navigation:', await navRes.json());

        console.log('Seeding Category data (Rare Fiction)...');
        const catRes = await fetch('http://localhost:3000/scraper/category', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: 'https://www.worldofbooks.com/en-gb/collections/rare-fiction-books' })
        });
        console.log('Category:', await catRes.json());
    } catch (e) {
        console.error('Error seeding:', e);
    }
}

seed();
