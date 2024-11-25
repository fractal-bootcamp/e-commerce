"use client";

// import XAIChat from "@/components/XAIChat";
// import { useAuth } from "@/hooks/useAuth";
// import Image from "next/image";
import { lobster, openSans } from "@/utils/fonts";
import CountrySelector from "@/components/CountrySelector";

const Page = () => {
  // const { idToken, firebaseUser } = useAuth();

  // console.log(idToken);
  // console.log(firebaseUser);

  return (
    <div>
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:py-12">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl mb-8 ${lobster.className}`}>
              Welcome to Snack Safari
            </h1>
            <p className={`text-lg sm:text-xl mb-4 ${openSans.className}`}>
              Embark on a global adventure of flavors!
            </p>
            <p className="text-lg sm:text-xl  mb-4 font-['Open_Sans']">
              Pick a country and we&apos;ll find you a great snack!
            </p>
            {/* <XAIChat /> */}
          </div>
        </div>
      </main>
      <CountrySelector />
    </div>
  );
};

export default Page;
