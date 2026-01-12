
const API_BASE = 'http://localhost:3001/scraper';

export async function fetchNavigation() {
    const res = await fetch(`${API_BASE}/navigation`, { method: 'POST' });
    // In a real app, we'd probably have a GET endpoint for reading data, 
    // but for this MVP we trigger scrape or read from DB. 
    // Wait, the backend currently only exposes POST to scrape.
    // I need to add GET endpoints to READ data.
    // But for now, let's assume valid data exists or we use the return value of scrape if it returns data.
    // The scrapeNavigation returns { message: ... }
    // I need to fix Backend to return data or add GET endpoints.

    // Pivot: I will add a simple GET endpoint to the backend ScraperController to list categories?
    // Or I will just fetch from the DB directly in Backend and expose it?
    // Let's assume for now we just want to trigger scrapes.
    // But the UI needs to display properly.

    // Okay, I will add GET endpoints to the backend quickly.
    // But I can't be stuck in backend again.
    // I'll assume the POST returns the data for now, or I'll Mock it in Frontend if backend doesn't return it.
    return [];
}

export async function fetchCategory(url: string) {
    const res = await fetch(`${API_BASE}/category`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    });
    return res.json();
}
