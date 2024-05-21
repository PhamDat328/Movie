import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import { Footer } from './Footer';
import { Roboto } from 'next/font/google';
import { SearchProvider } from '@/contexts/SearchContext';

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
        <Header />
        <main className=''>{children}</main>
        <br />
        <Footer />
      </SearchProvider>
    </div>
  );
};

export default DefaultLayout;
