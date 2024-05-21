import React, { useContext } from 'react';
import Socials from '../Socials';
import { IMovieDetail } from '@/interfaces/movie';
import MovieContext from '@/contexts/MovieContext';

const MovieBasicInfo = () => {
  const context = useContext(MovieContext);
  const {
    keywords,
    spoken_languages: spokenLanguages,
    budget,
    revenue,
    status,
  }: IMovieDetail = context.movie;
  return (
    <div className='w-[20%]'>
      <Socials />
      <div className='flex flex-col gap-4'>
        <div className='mt-8 ml-4'>
          <p className='font-semibold'>Status</p>
          <p>{status}</p>
        </div>
        <div className='ml-4'>
          <p className='font-semibold'>Original Language</p>
          <p>{spokenLanguages && spokenLanguages[0]?.name}</p>
        </div>
        <div className='ml-4'>
          <p className='font-semibold'>Budget</p>
          <p>
            {budget?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        </div>
        <div className='ml-4'>
          <p className='font-semibold'>Revenue</p>
          <p>
            {revenue?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        </div>
      </div>

      <div className='mt-6 ml-4'>
        <h4 className='font-medium mb-2 text-xl'>Keywords</h4>
        <div className='flex flex-wrap gap-2'>
          {keywords?.keywords?.slice(0, 10).map((keyword) => (
            <div
              key={keyword.id}
              className='bg-[#dddede] transition-all duration-300 hover:bg-[#c2c1c1] cursor-pointer text-xs rounded-md p-2'
            >
              {keyword.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieBasicInfo;
