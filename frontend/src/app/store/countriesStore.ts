import { create } from 'zustand';

interface Country {
  name: string;
  flag: string;
}

interface CountriesStore {
  countries: Country[];
  setCountries: (countries: Country[]) => void;
}

export const useCountriesStore = create<CountriesStore>((set) => ({
  countries: [
    {
      name: 'India',
      flag: '/flags/india.png',
    },
    {
      name: 'Peru',
      flag: '/flags/peru.png',
    },
    {
      name: 'Sri Lanka',
      flag: '/flags/sri-lanka.png',
    },
    {
      name: 'Australia',
      flag: '/flags/australia.png',
    }
  ],
  setCountries: (countries) => set({ countries }),
}));