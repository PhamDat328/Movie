import DefaultLayout from '@/components/layouts/DefaultLayout';
import { AppPropsCustom } from '@/interfaces/common';
import '@/styles/globals.css';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 1000, // 5s
    },
  },
});

export default function App({ Component, pageProps }: AppPropsCustom) {
  const Layout = Component.Layout ?? DefaultLayout;
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
