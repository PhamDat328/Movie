import { IParamsMovieByCategory } from '@/interfaces/params';
import movieApi from '@/services/apis/movie';
import { useQuery } from '@tanstack/react-query';

const useGetPopularMovies = (params: IParamsMovieByCategory) => {
  const { data, isLoading } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: () => movieApi.getPopular(params),
  });

  return { data, isLoading };
};

export default useGetPopularMovies;
