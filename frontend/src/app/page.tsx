"use client";

import CountrySelector from "@/components/CountrySelector";
import XAIChat from "@/components/XAIChat";
import { useAuth } from "@/hooks/useAuth";
// import Image from "next/image";

export default function Home() {
  const { idToken, firebaseUser } = useAuth();
  console.log(idToken);
  console.log(firebaseUser);

  return (
    <div>
      <main>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-mono text-amber-800 mb-3 sm:mb-4">
              Welcome to Snack Safari
            </h1>
            <p className="text-base sm:text-lg text-amber-700 mb-4">
              Embark on a global adventure of flavors! Choose your destination below.
            </p>
            {/* <XAIChat /> */}
          </div>
        </div>
      </main>
      <CountrySelector />
    </div>
  );
}
