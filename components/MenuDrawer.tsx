import React, { createRef, useContext } from 'react';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from '@material-tailwind/react';

import avatar from '@/assets/images/avatar.png';
import { ImPlus } from 'react-icons/im';
import Image from 'next/image';
import { IoNotifications } from 'react-icons/io5';
import profileSVG from '@/assets/images/profile.svg';
import settingSVG from '@/assets/images/setting.svg';
import inboxSVG from '@/assets/images/inbox.svg';
import signOutSVG from '@/assets/images/signout.svg';
import helpSVG from '@/assets/images/help.svg';
import { RiMenu3Line } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import SearchContext from '@/contexts/SearchContext';
export function DrawerWithNavigation() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const { handleOpen } = useContext(SearchContext);

  return (
    <div className='md:hidden block'>
      <span onClick={openDrawer} className='text-2xl cursor-pointer'>
        <RiMenu3Line />
      </span>
      <Drawer open={open} onClose={closeDrawer} placement='right'>
        <div className='mb-2 flex items-center justify-between p-4'>
          <Typography variant='h5' color='blue-gray'>
            Material Tailwind
          </Typography>
          <IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
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
            </ListItemPrefix>
            Add New Movie
          </ListItem>

          <ListItem>
            <ListItemPrefix>
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
            </ListItemPrefix>
            Language
          </ListItem>
          <ListItem>
            <ListItemPrefix>
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
                      <div className='w-[38px] h-[38px] relative rounded-full'>
                        <Image alt='paypal' src={avatar} fill sizes='50vw' />
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
                      <div className='w-[38px] h-[38px] relative rounded-full'>
                        <Image alt='paypal' src={avatar} sizes='50vw' fill />
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
                      <div className='w-[38px] h-[38px] relative rounded-full'>
                        <Image alt='paypal' src={avatar} sizes='50vw' fill />
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
            </ListItemPrefix>
            Notification
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Menu>
                <MenuHandler>
                  <div className='cursor-pointer relative w-[38px] h-[38px] rounded-full'>
                    <Image
                      alt='tania andrew'
                      fill
                      src={avatar}
                      sizes='100vw'
                      objectFit='cover'
                    />
                  </div>
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
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem
            onClick={() => {
              handleOpen();
              closeDrawer();
            }}
          >
            <ListItemPrefix>
              <span>
                <FaSearch className='text-[1.75rem] cursor-pointer' />
              </span>
            </ListItemPrefix>
            Search
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
