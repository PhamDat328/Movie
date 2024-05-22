import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import { IParamsMovieByCategory } from '@/interfaces/params';
import movieApi from '@/services/apis/movie';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import format from '@/utils/format';
import { useCallback } from 'react';
import { IGetMovieResponse, IMovie } from '@/interfaces/movie';

const useGetMovieByCategory = (params: IParamsMovieByCategory) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_MOVIE_BY_CATEGORY, params],
    queryFn: ({ pageParam }) => movieApi.getMovieByCategory(params, pageParam),
    initialPageParam: 10,
    getNextPageParam: (lastPage) => lastPage.page + 1,
    select: useCallback((data: InfiniteData<IGetMovieResponse, number>) => {
      return data.pages
        ?.flatMap((page) => page)
        .map((item: IGetMovieResponse) => {
          return {
            page: item.page,
            results: item?.results.map((movie: IMovie) => {
              return {
                ...movie,
                slug: `${format.convertTitleToSlug(movie.title || '')}-${movie.id}`,
              };
            }),
            total_pages: item.total_pages,
            total_results: item.total_results,
          };
        });
    }, []),
  });

  return { data, ...rest };
};

export default useGetMovieByCategory;
