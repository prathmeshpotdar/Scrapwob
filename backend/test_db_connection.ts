
import { Client } from 'pg';

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'product_explorer',
});

async function test() {
    try {
        await client.connect();
        console.log('Connected successfully');
        const res = await client.query('SELECT NOW()');
        console.log('Time:', res.rows[0]);
        await client.end();
    } catch (err) {
        console.error('Connection error:', err);
    }
}

test();
