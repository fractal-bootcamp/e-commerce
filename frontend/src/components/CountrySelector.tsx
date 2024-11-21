import { enumToArray } from "@/utils/enumToArray";
// import Image from 'next/image';
import { Country } from "@/types/types";
import Link from "next/link";

const CountrySelector = () => {
  // Get countries from enum
  const countries = enumToArray(Country);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
      {countries.map((country) => (
        <Link
          key={country}
          href={{
            pathname: "/products",
            query: { country: country.toLowerCase() },
          }}
          className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="aspect-[4/3] sm:aspect-square relative">
            {/* <Image
              src={country.flag}
              alt={`${country.name} flag`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-0.5 sm:mb-1">{country}</h3>
              {/* <p className="text-xs sm:text-sm opacity-90">{country.description}</p> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountrySelector;
