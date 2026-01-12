
import * as http from 'http';

function postRequest(path: string, body?: any) {
    return new Promise((resolve, reject) => {
        const data = body ? JSON.stringify(body) : '';
        const options = {
            hostname: 'localhost',
            port: 3001,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = http.request(options, (res) => {
            let responseData = '';
            res.on('data', (chunk) => { responseData += chunk; });
            res.on('end', () => {
                console.log(`Response from ${path}:`, responseData);
                resolve(responseData);
            });
        });

        req.on('error', (e) => {
            console.error(`Problem with request to ${path}:`, e.message);
            reject(e);
        });

        if (data) {
            req.write(data);
        }
        req.end();
    });
}

async function run() {
    console.log('Seeding Navigation...');
    await postRequest('/scraper/navigation');

    console.log('Seeding Category...');
    await postRequest('/scraper/category', { url: 'https://www.worldofbooks.com/en-gb/collections/rare-fiction-books' });
}

run();
