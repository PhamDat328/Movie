import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button } from '@material-tailwind/react';
import { IconButton } from '@material-tailwind/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <IconButton variant='text'>
        <i className='fas fa-heart' />
      </IconButton>
    </>
  );
}
