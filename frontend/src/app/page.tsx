"use client";

import XCountrySelector from "@/components/XCountrySelector";
import XAIChat from "@/components/XAIChat";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { idToken, firebaseUser } = useAuth();
  console.log(idToken);
  console.log(firebaseUser);

  return (
    <div>
      <main>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-3 sm:mb-4">
              Welcome to Snack Safari
            </h1>
            <p className="text-base sm:text-lg text-amber-700">
              Embark on a global adventure of flavors! Choose your destination below.
            </p>
            <XAIChat />
          </div>
        </div>
      </main>
      <XCountrySelector />
    </div>
  );
}
