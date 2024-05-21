import { IMovieDetail } from '@/interfaces/movie';
import MovieDetailHeader from '../Movie/MovieDetailHeader';
import MovieDetailInfo from '../Movie/MovieDetailInfo';

const MovieDetailLayout = ({ movie }: { movie: IMovieDetail }) => {
  return (
    <>
      <MovieDetailHeader movie={movie} />

      <MovieDetailInfo movie={movie} />
    </>
  );
};

export default MovieDetailLayout;
