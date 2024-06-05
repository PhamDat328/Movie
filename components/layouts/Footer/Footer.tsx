import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import logo from '@/assets/images/luxe-black.png';
import Socials from '@/components/Socials';

const LINKS = [
  {
    title: 'Product',
    items: ['Overview', 'Features', 'Solutions', 'Tutorials'],
  },
  {
    title: 'Company',
    items: ['About us', 'Careers', 'Press', 'News'],
  },
  {
    title: 'Resource',
    items: ['Blog', 'Newsletter', 'Events', 'Help center'],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='relative w-full mt-12 border border-t-2 pt-10'>
      <div className='mx-auto container max-w-7xl px-8'>
        <div className='grid grid-cols-1 justify-between gap-4 md:grid-cols-2'>
          <Image src={logo} alt='logo' width={180} height={180} />
          <div className='grid grid-cols-3 justify-between gap-4'>
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography
                  variant='lead'
                  color='black'
                  className='mb-3 font-medium'
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <p key={link}>
                    <Typography
                      as='a'
                      href='#'
                      color='gray'
                      className='py-1.5 font-normal transition-colors hover:text-blue-gray-900'
                    >
                      {link}
                    </Typography>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className='mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between'>
          <Typography
            variant='small'
            className='mb-4 text-center font-normal text-blue-gray-900 md:mb-0'
          >
            &copy; {currentYear}{' '}
            <a href='https://material-tailwind.com/'>Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
