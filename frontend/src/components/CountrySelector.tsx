'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SearchSection } from './SearchSection';

const countries = [
  {
    name: 'India',
    flag: '/flags/india.png',
    description: 'Discover sweet and spicy Indian treats'
  },
  {
    name: 'Peru',
    flag: '/flags/peru.png',
    description: 'Explore unique Peruvian delicacies'
  },
  {
    name: 'Sri Lanka',
    flag: '/flags/sri-lanka.png',
    description: 'Experience tropical Sri Lankan sweets'
  },
  {
    name: 'Australia',
    flag: '/flags/australia.png',
    description: 'Taste authentic Australian snacks'
  }
];

export default function CountrySelector() {
  const [query, setQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = () => {
    const filtered = countries.filter((country) => country.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredCountries(filtered);
  }

  useEffect(() => {
    if (query) {
      handleSearch();
    } else {
      setFilteredCountries(countries);
    }
  }, [query]);

  return (
    <div>
      <div className='flex justify-center'>
        <SearchSection query={query} setQuery={setQuery} handleSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-12 p-12 md:p-16 lg:p-24 max-w-6xl mx-auto">
        {filteredCountries.map((country) => (
          <Link
            key={country.name}
            href={{
              pathname: '/products',
              query: { country: country.name.toLowerCase() },
            }}
            className="group relative overflow-hidden rounded-lg bg-white shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <div className="aspect-square relative">
              <Image
                src={country.flag}
                alt={`${country.name} flag`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-white">
                <h3 className="text-base sm:text-lg font-bold mb-0">{country.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 