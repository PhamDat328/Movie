import { sortParams } from '@/constants/defaultParam/sort';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import React, { ReactNode } from 'react';

const MovieDiscoverLayout = ({
  children,
  handleChangeSortParam,
}: {
  children: ReactNode;
  handleChangeSortParam: (param: string) => void;
}) => {
  const handleSortChange = (param: string) => {
    handleChangeSortParam(param);
  };
  return (
    <div className='grid grid-cols-10 mt-10'>
      <div className='col-span-2 w-full flex justify-center'>
        <div className='px-4 pt-4 '>
          <Menu placement='bottom'>
            <MenuHandler>
              <Button variant='outlined' className='px-10 mr-4'>
                Sort
              </Button>
            </MenuHandler>
            <MenuList className='font-body shadow-xl'>
              {Object.entries(sortParams).map(([key, value]) => (
                <MenuItem
                  onClick={() => handleSortChange(value.param)}
                  key={key}
                >
                  {value.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className='col-span-8'>{children}</div>
    </div>
  );
};

export default MovieDiscoverLayout;
