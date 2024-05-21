import SearchContext from '@/contexts/SearchContext';
import {
  Avatar,
  Badge,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { createRef, useContext, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ImPlus } from 'react-icons/im';
import { IoNotifications } from 'react-icons/io5';
const SearchBar = dynamic(() => import('@/components/SearchBar'));
import profileSVG from '@/assets/images/profile.svg';
import settingSVG from '@/assets/images/setting.svg';
import inboxSVG from '@/assets/images/inbox.svg';
import signOutSVG from '@/assets/images/signout.svg';
import helpSVG from '@/assets/images/help.svg';
import Image from 'next/image';
import avatar from '@/assets/images/avatar.png';

const UserInteract = () => {
  const { handleClose, searchVal, isOpen, handleOpen, handleSearchVal } =
    useContext(SearchContext);
  const formRef = createRef<HTMLFormElement>();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchVal);
    router.push(`/search?query=${searchVal}`);
    handleSearchVal('');
    handleClose();
  };

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target as HTMLDivElement)
      )
        handleClose();
    };
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [formRef]);

  return (
    <div className='flex items-center gap-8'>
      <Menu allowHover>
        <MenuHandler className='cursor-pointer text-xl'>
          <span>
            <ImPlus />
          </span>
        </MenuHandler>
        <MenuList className='font-body'>
          <MenuItem>Add New Movie</MenuItem>
          <MenuItem>Add New TV Show</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuHandler>
          <button className='rounded-sm px-[7px] hover:bg-[#333] transition-all duration-200 hover:text-[#fff] py-[3px]  border-2 border-[#333]'>
            VI
          </button>
        </MenuHandler>
        <MenuList className='font-body'>
          <MenuItem>
            <Typography variant='small' className='font-medium'>
              EN
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant='small' className='font-medium'>
              VI
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>

      <Badge
        content='2'
        color='red'
        className='text-[0.55rem] cursor-pointer min-w-[20px] min-h-[16px] right-[6px]'
      >
        <Menu>
          <MenuHandler className='cursor-pointer'>
            <span>
              <IoNotifications className='text-[1.75rem]' />
            </span>
          </MenuHandler>
          <MenuList className='flex flex-col gap-2 font-body'>
            <MenuItem className='flex items-center gap-4 py-2 pl-2 pr-8'>
              <div className='w-[38px] h-[38px] rounded-full'>
                <Image alt='paypal' src={avatar} />
              </div>
              <div className='flex flex-col gap-1'>
                <Typography
                  variant='small'
                  color='gray'
                  className='font-semibold'
                >
                  Tania send you a message
                </Typography>
                <Typography className='flex items-center gap-1 text-sm font-medium text-blue-gray-500'>
                  13 minutes ago
                </Typography>
              </div>
            </MenuItem>
            <MenuItem className='flex items-center gap-4 py-2 pl-2 pr-8'>
              <div className='w-[38px] h-[38px] rounded-full'>
                <Image alt='paypal' src={avatar} />
              </div>
              <div className='flex flex-col gap-1'>
                <Typography
                  variant='small'
                  color='gray'
                  className='font-semibold'
                >
                  Natali replied to your email.
                </Typography>
                <Typography className='flex items-center gap-1 text-sm font-medium text-blue-gray-500'>
                  1 hour ago
                </Typography>
              </div>
            </MenuItem>
            <MenuItem className='flex items-center gap-4 py-2 pl-2 pr-8'>
              <div className='w-[38px] h-[38px] rounded-full'>
                <Image alt='paypal' src={avatar} />
              </div>
              <div className='flex flex-col gap-1'>
                <Typography
                  variant='small'
                  color='gray'
                  className='font-semibold'
                >
                  You&apos;ve received a payment.
                </Typography>
                <Typography className='flex items-center gap-1 text-sm font-medium text-blue-gray-500'>
                  5 hours ago
                </Typography>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      </Badge>

      <Menu>
        <MenuHandler className='cursor-pointer w-[38px] h-[38px] rounded-full'>
          <Image alt='tania andrew' src={avatar} />
        </MenuHandler>
        <MenuList className='font-body'>
          <MenuItem className='flex items-center gap-2'>
            <Image src={profileSVG} alt='profile' />
            <Typography variant='small' className='font-medium'>
              My Profile
            </Typography>
          </MenuItem>
          <MenuItem className='flex items-center gap-2'>
            <Image src={settingSVG} alt='setting' />
            <Typography variant='small' className='font-medium'>
              Edit Profile
            </Typography>
          </MenuItem>
          <MenuItem className='flex items-center gap-2'>
            <Image src={inboxSVG} alt='inbox' />

            <Typography variant='small' className='font-medium'>
              Inbox
            </Typography>
          </MenuItem>
          <MenuItem className='flex items-center gap-2'>
            <Image src={helpSVG} alt='help' />
            <Typography variant='small' className='font-medium'>
              Help
            </Typography>
          </MenuItem>
          <hr className='my-2 border-blue-gray-50' />
          <MenuItem className='flex items-center gap-2 '>
            <Image src={signOutSVG} alt='sign-out' />
            <Typography variant='small' className='font-medium'>
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>

      <span onClick={() => handleOpen()}>
        <FaSearch className='text-[1.75rem] cursor-pointer' />
      </span>

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className='absolute top-[60px] z-[1000] left-0 right-0'
        >
          <SearchBar />
        </form>
      )}
    </div>
  );
};

export default UserInteract;
