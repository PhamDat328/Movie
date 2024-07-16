import React from 'react';
import Menus from './components/Menu';
import { UserInteract } from './components';

const Header = () => {
  return (
    <div className='flex h-[60px] justify-between bg-[#f1dede] mx-auto sm:px-8 w-full px-2 fixed top-0 z-[100]'>
      <Menus />
      <UserInteract />
    </div>
  );
};

export default Header;
