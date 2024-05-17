import { IMovie, IMovieDetail } from '@/interfaces/movie';
import { IParamsMovieByCategory } from '@/interfaces/params';
import axiosInstant from './axiosInstance';

const url = {
  movie: '/movie/',
};
const query = {
  append_to_response:
    '?append_to_response=credits,keywords,reviews,images,videos',
};

interface IGetPopularResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const movieApi = {
  getMovieByCategory: (
    params: IParamsMovieByCategory
  ): Promise<IGetPopularResponse> =>
    axiosInstant.get(`${url.movie}${params.filterMovies}`),

  getMovieDetail: (id: string): Promise<IMovieDetail> =>
    axiosInstant.get(`${url.movie}${id}${query.append_to_response}`),
};

export default movieApi;
