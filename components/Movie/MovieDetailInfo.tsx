import MovieMainInfo from './MovieMainInfo';
import MovieBasicInfo from './MovieBasicInfo';

const MovieDetailInfo = () => {
  return (
    <div className='w-[1320px] mx-auto flex mt-6 gap-4'>
      <MovieMainInfo />

      <MovieBasicInfo />
    </div>
  );
};

export default MovieDetailInfo;
