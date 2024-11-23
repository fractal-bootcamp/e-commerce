import { ragQuery } from "@/api/apiRag";
import { Product } from "@/types/types";
import { useState } from "react";

const useRag = () => {
  const [query, setQuery] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [queryProducts, setQueryProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query !== "") {
      // Set loading
      setLoading(true);

      // Set messages
      setMessages((prev) => [...prev, query]);
      setQuery("");
      const queryResponse: string[] = await ragQuery(query);

      // Set query products
      const products: Product[] = queryResponse.map((jsonString) => JSON.parse(jsonString));
      setQueryProducts(() => [...products]);
      setLoading(false);
      setError(false);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  return {
    loading,
    query,
    setQuery,
    messages,
    setMessages,
    error,
    setError,
    handleSubmitQuery,
    queryProducts,
  };
};

export default useRag;
