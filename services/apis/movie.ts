import { IGetMovieResponse, IMovieDetail } from '@/interfaces/movie';
import { IParamsMovie, IParamsMovieByCategory } from '@/interfaces/params';
import axiosInstant from './axiosInstance';

const url = {
  discover: '/discover/movie',
  movie: '/movie',
  searchMovie: '/search/movie',
};
const queryString = {
  append_to_response:
    'append_to_response=credits,keywords,reviews,images,videos',
};

const movieApi = {
  getMovieByCategory: (params: IParamsMovie): Promise<IGetMovieResponse> =>
    axiosInstant.get(`${url.movie}/${params.filterMovies}`),

  getMovieDetail: (id: string): Promise<IMovieDetail> =>
    axiosInstant.get(`${url.movie}/${id}?${queryString.append_to_response}`),

  getMovieBySearch: async (query: string): Promise<IGetMovieResponse> =>
    axiosInstant.get(`${url.searchMovie}?query=${query}`),

  getDiscoverMovie: (params: string): Promise<IGetMovieResponse> =>
    axiosInstant.get(`${url.discover}?sort_by=${params}`),
};

export default movieApi;
