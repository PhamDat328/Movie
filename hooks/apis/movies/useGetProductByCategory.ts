import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import { IParamsMovieByCategory } from '@/interfaces/params';
import movieApi from '@/services/apis/movie';
import { useQuery } from '@tanstack/react-query';

const useGetPopularMovies = (params: IParamsMovieByCategory) => {
  let key = '';
  switch (params.filterMovies) {
    case 'popular':
      key = TYPE_QUERY_KEYS.GET_POPULAR;
      break;
    case 'top_rated':
      key = TYPE_QUERY_KEYS.GET_TOP_RATED;
      break;
    case 'upcoming':
      key = TYPE_QUERY_KEYS.GET_UPCOMING;
      break;
    case 'now_playing':
      key = TYPE_QUERY_KEYS.GET_NOW_PLAYING;
      break;
  }
  const { data, isLoading } = useQuery({
    queryKey: [key, params],
    queryFn: () => movieApi.getPopular(params),
  });

  return { data: data, isLoading };
};

export default useGetPopularMovies;
