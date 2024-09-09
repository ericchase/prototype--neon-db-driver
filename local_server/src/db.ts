import { Client } from 'pg';

// the kind of thing that would go in a .env file
// these credentials match up to the ones in the database compose file
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'dev',
  password: 'devpassword',
  database: 'dev',
});

await client.connect();

export async function query(text: string, params: any[]) {
  try {
    return (await client.query(text, params)).rows;
  } catch (error) {
    console.error(error);
  }
}
