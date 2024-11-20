import { pool } from "./ragDB";
import { getOpenaiClient } from "./openaiClient";

// Generate embedding
export const generateEmbedding = async (text: string): Promise<number[]> => {
  const openai = await getOpenaiClient();
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  console.log(`Generated embedding for ${text}`);
  return response.data[0].embedding;
};

const arrayToVector = async (arr: number[]): Promise<string> => {
  const formattedNumbers = arr.map((num) => num.toFixed(8));
  return `[${formattedNumbers.join(",")}]`;
};

// Store document
export const storeDocument = async (content: string): Promise<void> => {
  const embedding = await generateEmbedding(content);

  // transform embedding to pgvector compatible format
  const vectorString = await arrayToVector(embedding);

  console.log(`Stored document for ${content}`);

  const poolResolved = await pool();

  await poolResolved.query("INSERT INTO documents (content, embedding) VALUES ($1, $2::vector)", [
    content,
    vectorString,
  ]);
};

// Find similar documents
export const findSimilarDocuments = async (query: string, limit: number = 3): Promise<string[]> => {
  const queryEmbedding = await generateEmbedding(query);

  // transform embedding to pgvector compatible format
  const vectorString = arrayToVector(queryEmbedding);

  const poolResolved = await pool();

  const result = await poolResolved.query(
    `SELECT content, embedding <-> $1::vector as distance
     FROM documents
     ORDER BY distance ASC
     LIMIT $2`,
    [vectorString, limit]
  );

  return result.rows.map((row) => row.content);
};
