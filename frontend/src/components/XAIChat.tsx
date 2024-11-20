"use client";

import React, { useState } from "react";

const XAIChat = () => {
  const [query, setQuery] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  const handleSubmitQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query !== "") {
      setMessages((prev) => [...prev, query]);
      setQuery("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="border-2 border-black">
      <div className="border-2 border-blue-500 h-20 text-black text-right p-2 overflow-y-scroll">
        {messages.map((msg, key) => (
          <p key={key}>{msg}</p>
        ))}
      </div>
      <form onSubmit={handleSubmitQuery} className="flex flex-col">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-black"
        />
        <button type="submit" className="bg-red-500">
          Submit
        </button>
      </form>
      {error && <div className="text-red-500">Query can't be empty</div>}
    </div>
  );
};

export default XAIChat;
