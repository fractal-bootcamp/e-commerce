import { openSans } from '../app/layout';

export type SearchSectionProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: React.MouseEventHandler<HTMLButtonElement>
}

export const SearchSection: React.FC<SearchSectionProps> = ({ query, setQuery }) => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <input
          className={`input w-full border-2 border-amber-300 ${openSans.className} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500`}
          // the current value of the query state should be what is displayed in the box
          value={query}
          // whenever anything changes in the input field, assign this to setQuery
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a country..."
        />
      </div>
    </div>
  )
}