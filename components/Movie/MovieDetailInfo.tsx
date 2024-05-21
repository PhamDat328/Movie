import { IMovieDetail } from '@/interfaces/movie';
import MovieMainInfo from './MovieMainInfo';

const MovieDetailInfo = ({ movie }: { movie: IMovieDetail }) => {
  return (
    <div className='w-[1320px] mx-auto flex mt-6 gap-4'>
      <MovieMainInfo movie={movie} />

      <MovieDetailInfo movie={movie} />
    </div>
  );
};

export default MovieDetailInfo;
