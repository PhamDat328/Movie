import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import { Footer } from './Footer';
import { Roboto } from 'next/font/google';
import { SearchProvider } from '@/contexts/SearchContext';
import { MovieProvider } from '@/contexts/MovieContext';
import { MenuProvider } from '@/contexts/MenuContext';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${roboto.variable} font-sans`}>
      <SearchProvider>
        <MenuProvider>
          <Header />
          <MovieProvider>
            <main className=''>{children}</main>
          </MovieProvider>
        </MenuProvider>
        <br />
        <Footer />
      </SearchProvider>
    </div>
  );
};

export default DefaultLayout;
