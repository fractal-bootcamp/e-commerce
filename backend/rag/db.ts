import { Pool } from "pg";

// Generate pool
export const pool = async () => {
  return new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 15432,
    database: "ragdemo",
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
        embedding vector(1536)
      )`);
  } finally {
    client.release();
  }

  // don't do this in production
  await client.query("DELETE FROM documents");
};
