import { Pool } from "pg";

// Generate pool
export const pool = async () => {
  return new Pool({
    connectionString: process.env.RAG_DATABASE_URL, // Neon connection string
    ssl: { rejectUnauthorized: false }, // Required for Neon
  });
};

// Initialize database
export const initializeDatabase = async () => {
  const client = await (await pool()).connect();
  try {
    await client.query("CREATE EXTENSION IF NOT EXISTS vector");

    await client.query(`
      CREATE TABLE IF NOT EXISTS documents (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        embedding vector(8191)
      )`);
  } finally {
    client.release();
  }

  // don't do this in production
  await client.query("DELETE FROM documents");
};
