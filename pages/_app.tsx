import DefaultLayout from '@/components/layouts/DefaultLayout';
import { AppPropsCustom } from '@/interfaces/common';
import '@/styles/globals.css';
import { DefaultSEOConfig, SEOConfigProps } from '@/utils/NextSeoConfig';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 1000,
    },
  },
});

type AppOwnProps = { defaultSEO: SEOConfigProps };

export default function App({
  Component,
  pageProps,
  defaultSEO,
}: AppPropsCustom & AppOwnProps) {
  const Layout = Component.Layout ?? DefaultLayout;

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Layout>
          <DefaultSEOConfig {...defaultSEO} />
          <Component {...pageProps} />
        </Layout>
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
