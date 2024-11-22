"use client";

import useRag from "@/hooks/useRag";

const XAIChat = () => {
  const { messages, query, setQuery, handleSubmitQuery, error } = useRag();

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
      {error && <div className="text-red-500">Query can&apos;t be empty</div>}
    </div>
  );
};

export default XAIChat;
