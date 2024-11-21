import { ragQuery } from "@/api/apiRag";
import { useState } from "react";

const useRag = () => {
  const [query, setQuery] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  const handleSubmitQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query !== "") {
      setMessages((prev) => [...prev, query]);
      setQuery("");
      const queryResponse: string[] = await ragQuery(query);
      setMessages((prev) => [...prev, ...queryResponse]);
      console.log(queryResponse);
      setError(false);
    } else {
      setError(true);
    }
  };

  return { query, setQuery, messages, setMessages, error, setError, handleSubmitQuery };
};

export default useRag;
