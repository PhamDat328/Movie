import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);
  return (
    <div className='relative top-[50%] flex w-[90%] mx-auto max-w-[1280px]'>
      <Input
        crossOrigin='true'
        type='email'
        placeholder='Search for a movie, TV show, person...'
        className='!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
        labelProps={{
          className: 'hidden',
        }}
        size='lg'
        value={searchValue}
        onChange={onChange}
        containerProps={{ className: 'min-w-[100px]' }}
      />
      <Button
        size='md'
        color='green'
        disabled={!searchValue}
        className='!absolute right-[0.1rem] top-[0.149rem] rounded'
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
