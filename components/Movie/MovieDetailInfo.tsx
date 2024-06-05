import MovieMainInfo from './MovieMainInfo';
import MovieBasicInfo from './MovieBasicInfo';

const MovieDetailInfo = () => {
  return (
    <div className='w-full sm:px-10 px-4 grid grid-cols-12 mt-6 gap-4'>
      <MovieMainInfo />
      <MovieBasicInfo />
    </div>
  );
};

export default MovieDetailInfo;
