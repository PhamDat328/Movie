import { IMovie } from "@/interfaces/movie";
import { IParamsMovieByCategory } from "@/interfaces/params";
import requestAPI from "./axiosInstance";

const url = {
  movie: "/movie/",
};

interface IGetPopularResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const movieApi = {
  getPopular: (params: IParamsMovieByCategory): Promise<IGetPopularResponse> =>
    requestAPI.get(`${url.movie}${params.filterMovies}`),
};

export default movieApi;
