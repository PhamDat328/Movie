'use client';
import Image from 'next/image';
import logo from '../../../../assets/images/luxe-black.png';

import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import Link from 'next/link';

const Menus = () => {
  return (
    <div className='flex font-semibold items-center gap-8'>
      <Link href='/'>
        <Image src={logo} alt='logo' width={100} height={100} />
      </Link>

      <Menu allowHover>
        <MenuHandler>
          <p className='cursor-pointer'>Movie</p>
        </MenuHandler>
        <MenuList className='font-body'>
          <MenuItem>
            <Link href='/movie/popular'>Popular</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/movie/upcoming'>Upcoming</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/movie/top-rated'>Top Rated</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/movie/now-playing'>Now Playing</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu allowHover>
        <MenuHandler>
          <p className='cursor-pointer'>TV Shows</p>
        </MenuHandler>
        <MenuList className='font-body'>
          <MenuItem>Popular</MenuItem>
          <MenuItem>Airing Today</MenuItem>
          <MenuItem>On TV</MenuItem>
          <MenuItem>Top Rated</MenuItem>
        </MenuList>
      </Menu>
      <Menu allowHover>
        <MenuHandler>
          <p className='cursor-pointer'>Movie</p>
        </MenuHandler>
        <MenuList className='font-body'>
          <MenuItem>Popular People</MenuItem>
        </MenuList>
      </Menu>
      <Menu allowHover>
        <MenuHandler>
          <p className='cursor-pointer'>Movie</p>
        </MenuHandler>
        <MenuList className='font-body'>
          <MenuItem>Discussion</MenuItem>
          <MenuItem>LeaderBoard</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>API</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Menus;
