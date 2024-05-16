import { IMovie } from '@/interfaces/movie';
import { IParamsMovieByCategory } from '@/interfaces/params';
import requestAPI from './axiosInstance';

const url = {
  movie: '/movie/',
};

interface IGetPopularResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const movieApi = {
  getPopular: async (params: IParamsMovieByCategory): Promise<IMovie[]> => {
    const { data } = await requestAPI(
      `${url.movie}${params.filterMovies}`,
      {},
      'get'
    );

    return data.results;
  },
};

export default movieApi;
