'use client';
import Image from 'next/image';
import logo from '@/assets/images/luxe-black.png';

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
    <div className='flex font-semibold items-center lg:gap-8 sm:gap-4 gap-6'>
      <Link href='/' className='w-[100px] h-[20px] relative'>
        <Image src={logo} alt='logo' fill sizes='' />
      </Link>

      <div className='lg:gap-8 sm:gap-4 gap-4 flex'>
        <Menu allowHover>
          <MenuHandler>
            <nav className='cursor-pointer'>Movie</nav>
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
            <nav className='cursor-pointer'>TV Shows</nav>
          </MenuHandler>
          <MenuList className='font-body'>
            <MenuItem>Popular</MenuItem>
            <MenuItem>Airing Today</MenuItem>
            <MenuItem>On TV</MenuItem>
            <MenuItem>Top Rated</MenuItem>
          </MenuList>
        </Menu>

        <div className='md:block hidden'>
          <Menu allowHover>
            <MenuHandler>
              <nav className='cursor-pointer'>People</nav>
            </MenuHandler>
            <MenuList className='font-body'>
              <MenuItem>Popular People</MenuItem>
            </MenuList>
          </Menu>
        </div>

        <Menu allowHover>
          <MenuHandler>
            <nav className='cursor-pointer'>More</nav>
          </MenuHandler>
          <MenuList className='font-body'>
            <MenuItem>Discussion</MenuItem>
            <MenuItem>LeaderBoard</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem>API</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Menus;
