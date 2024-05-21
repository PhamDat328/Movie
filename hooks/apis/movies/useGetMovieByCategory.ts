import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import { IParamsMovieByCategory } from '@/interfaces/params';
import movieApi from '@/services/apis/movie';
import { useQuery } from '@tanstack/react-query';
import format from '@/utils/format';
import { useMemo } from 'react';
import { IMovie } from '@/interfaces/movie';

const useGetMovieByCategory = (params: IParamsMovieByCategory) => {
  const { data, ...rest } = useQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_MOVIE_BY_CATEGORY, params],
    queryFn: () => movieApi.getMovieByCategory(params),
  });

  const formatData = useMemo(
    () =>
      data?.results.map((item: IMovie) => {
        return {
          ...item,
          slug: `${format.convertTitleToSlug(item.title || '')}-${item.id}`,
        };
      }),
    [data?.results]
  );

  return { data: formatData, ...rest };
};

export default useGetMovieByCategory;
