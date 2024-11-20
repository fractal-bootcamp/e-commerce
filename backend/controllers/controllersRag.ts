import { findSimilarDocuments } from "../rag/ragEmbeddings";
import { withLogging } from "../utils/withLogging";
import type { Request, Response } from "express";

export const ragQuery = withLogging("ragQuery", false, async (req: Request, res: Response) => {
  const { query } = req.body;
  const similarDocuments = await findSimilarDocuments(query, 3);
  res.status(200).json(similarDocuments);
});
