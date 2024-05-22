import {
  IFilterType,
  IGenre,
  IGetMovieResponse,
  ILanguage,
  IMovieDetail,
} from '@/interfaces/movie';
import { IParamsMovieByCategory } from '@/interfaces/params';
import axiosInstant from './axiosInstance';

const url = {
  discover: '/discover/movie',
  movie: '/movie',
  searchMovie: '/search/movie',
  genre: '/genre/movie/list',
  language: '/configuration/languages',
};
const queryString = {
  append_to_response:
    'append_to_response=credits,keywords,reviews,images,videos',
};

const movieApi = {
  getMovieByCategory: (
    params: IParamsMovieByCategory,
    pageParam: number
  ): Promise<IGetMovieResponse> => {
    return axiosInstant.get(
      `${url.movie}/${params.filterMovies}?page=${pageParam}`
    );
  },

  getMovieDetail: (id: string): Promise<IMovieDetail> =>
    axiosInstant.get(`${url.movie}/${id}?${queryString.append_to_response}`),

  getMovieBySearch: async (query: string): Promise<IGetMovieResponse> =>
    axiosInstant.get(`${url.searchMovie}?query=${query}`),

  getDiscoverMovie: (
    params: IFilterType,
    pageParam: number
  ): Promise<IGetMovieResponse> => {
    const { sortBy, language, genre } = params;
    let discoverUrl = `${url.discover}?page=${pageParam}${sortBy ? `&sort_by=${sortBy}` : ''}${language ? `&with_original_language=${language}` : ''}${genre ? `&with_genres=${genre}` : ''}`;
    return axiosInstant.get(discoverUrl);
  },

  getGenres: (): Promise<{ genres: IGenre[] }> => axiosInstant.get(url.genre),

  getLanguages: (): Promise<ILanguage[]> => axiosInstant.get(url.language),
};

export default movieApi;
