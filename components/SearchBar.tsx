import SearchContext from '@/contexts/SearchContext';
import { Button, Input } from '@material-tailwind/react';
import { useContext } from 'react';

const SearchBar = () => {
  const { handleSearchVal, searchVal } = useContext(SearchContext);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleSearchVal(event.target.value);
  return (
    <div className='relative top-[50%] flex w-[90%] mx-auto max-w-[1280px] shadow-xl'>
      <Input
        crossOrigin='true'
        type='text'
        placeholder='Search for a movie, TV show, person...'
        className='!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
        labelProps={{
          className: 'hidden',
        }}
        size='lg'
        value={searchVal}
        onChange={onChange}
        containerProps={{ className: 'min-w-[100px]' }}
      />
      <Button
        type='submit'
        size='md'
        color='green'
        disabled={!searchVal}
        className='!absolute right-[0.1rem] top-[0.149rem] rounded'
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
