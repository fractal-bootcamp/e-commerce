import prisma from "../prisma/client";
import { initializeDatabase } from "./ragDB";
import { storeDocument } from "./ragEmbeddings";

// Get Product documents
export const getProductDocuments = async (): Promise<string[]> => {
  const allProducts = await prisma.product.findMany({});
  const allProductsStringified: string[] = allProducts.map((product) => JSON.stringify(product));
  return allProductsStringified;
};

// Initialize DB and load documents
export const main = async (documents: string[]) => {
  await initializeDatabase();
  for (const doc of documents) {
    await storeDocument(doc);
  }
};

// Loading logic
const products = await getProductDocuments();
await main(products);
