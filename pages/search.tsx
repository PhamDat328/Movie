import MovieCard from '@/components/Movie/MovieCard';
import { Pagination } from '@/components/Search/Pagination';
import { Sidebar } from '@/components/Search/SideBar';
import {
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_TITLE,
} from '@/constants/common';
import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import useGetMovieBySearch from '@/hooks/apis/movies/useGetMovieBySearch';
import { IMovie } from '@/interfaces/movie';
import movieApi from '@/services/apis/movie';
import SEOConfig from '@/utils/NextSeoConfig';
import { Spinner } from '@material-tailwind/react';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';

const Search = () => {
  const router = useRouter();
  let query = router.asPath.split('?query=')[1];

  const { data: movies, isLoading } = useGetMovieBySearch(query as string);
  let page: number = 1;
  let totalPages: number = 1;
  let results: IMovie[] = [];
  if (movies) {
    page = movies.page;
    totalPages = movies.total_pages;
    results = movies.results;
  }

  return (
    <>
      <SEOConfig
        title={`${query} | ${DEFAULT_SITE_TITLE}`}
        description={DEFAULT_SITE_DESCRIPTION}
      />
      <div className='grid grid-cols-7 justify-center'>
        <div className='col-span-1 xl:block hidden'>
          <Sidebar />
        </div>
        <div className='xl:col-span-6 col-span-7 flex flex-col items-center mt-10'>
          <div className='flex gap-4 justify-center flex-wrap'>
            {isLoading ? (
              <Spinner className='h-16 w-16 text-gray-900/50' />
            ) : results.length === 0 ? (
              <div>There are no movies that matched your query.</div>
            ) : (
              results.map((movie) => (
                <div key={movie.id}>
                  <MovieCard movie={movie} key={movie.id} />
                </div>
              ))
            )}
          </div>
          {results.length !== 0 ? (
            <Pagination page={page} totalPage={totalPages} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_MOVIE_BY_SEARCH, context.query.query],
    queryFn: () => movieApi.getMovieBySearch(context.query.query),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Search;
