import { sortParams } from '@/constants/defaultParam/sort';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import { useRouter } from 'next/router';
import React from 'react';

const SortMenu = () => {
  const router = useRouter();

  const handleSortChange = (param: string) => {
    const url = new URL(router.asPath, window.location.origin);
    const params = new URLSearchParams(url.search);

    params.set('sort_by', param);
    url.search = params.toString();

    router.push(url.toString());
  };
  return (
    <div className='px-4'>
      <Menu placement='bottom'>
        <MenuHandler>
          <Button variant='outlined' className='px-10 mr-4'>
            Sort
          </Button>
        </MenuHandler>
        <MenuList className='font-body shadow-xl'>
          {Object.entries(sortParams).map(([key, value]) => (
            <MenuItem onClick={() => handleSortChange(value.param)} key={key}>
              {value.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortMenu;
