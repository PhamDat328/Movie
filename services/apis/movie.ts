import { IMovie } from '@/interfaces/movie';
import { IParamsMovieByCategory } from '@/interfaces/params';
import requestAPI from './axiosInstance';

const url = {
  popular: '/movie/popular',
};

interface IGetPopularResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const movieApi = {
  getPopular: async (
    params: IParamsMovieByCategory
  ): Promise<IGetPopularResponse> => {
    const { data } = await requestAPI(url.popular, { params }, 'get');
    console.log(data);

    return data;
  },
};

export default movieApi;
