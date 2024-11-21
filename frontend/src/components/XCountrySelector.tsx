import Link from "next/link";

interface XCountrySelectorProps {
  countries: string[];
}

const XCountrySelector = ({ countries }: XCountrySelectorProps) => {
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
          <p className="p-4">{country}</p>
        </Link>
      ))}
    </div>
  );
};

export default XCountrySelector;
