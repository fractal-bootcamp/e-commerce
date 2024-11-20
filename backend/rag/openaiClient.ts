import OpenAI from "openai";

export const getOpenaiClient = async (): Promise<OpenAI> => {
  const openaiClient = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
  });
  return openaiClient;
};
