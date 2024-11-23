"use client";

import useRag from "@/hooks/useRag";
import XProduct from "./XProduct";

const XAIChat = () => {
  const { loading, query, setQuery, handleSubmitQuery, error, queryProducts } = useRag();

  return (
    <div className="flex flex-col space-y-4 pb-10">
      <div className="fixed top-16 bg-black z-20 left-0 right-0 w-full">
        <form onSubmit={handleSubmitQuery} className="flex bg-white m-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-black flex-1 outline-none p-2 text-xs"
          />
          <button
            type="submit"
            className="bg-black text-white p-2 text-xs border-[0.5px] border-white"
          >
            Submit
          </button>
        </form>
      </div>

      {error && <div className="text-red-500">Query can&apos;t be empty</div>}
      <div className="pt-10">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col space-y-4">
            {queryProducts.map((prod, key) => (
              <div key={key} className="border-[0.5px] border-white p-2">
                <XProduct product={prod} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default XAIChat;
