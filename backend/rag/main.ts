import { initializeDatabase } from "./db";
import { storeDocument } from "./embeddings";

export const main = async (documents: string[]) => {
  await initializeDatabase();
  for (const doc of documents) {
    await storeDocument(doc);
  }
};
