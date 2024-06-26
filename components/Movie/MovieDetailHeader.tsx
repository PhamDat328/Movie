import RoutesConfig from '@/constants/url';
import MovieContext from '@/contexts/MovieContext';
import { IMovieDetail } from '@/interfaces/movie';
import { voteColor } from '@/utils/common';
import dayjs from 'dayjs';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaBookmark, FaHeart, FaList, FaPlay } from 'react-icons/fa';
import { GoDot } from 'react-icons/go';
import Socials from '../Socials';

const MovieDetailHeader = () => {
  const context = useContext(MovieContext);

  const {
    backdrop_path: backdrop,
    genres,
    title,
    runtime,
    overview,
    release_date: releaseDate,
    poster_path: poster,
    vote_average: voteAverage,
  }: IMovieDetail = context.movie;
  return (
    <div className='relative w-full h-[550px]'>
      <div
        style={{
          position: 'absolute',
          height: '100%',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundImage:
            'linear-gradient(to right, rgba(52.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(52.5, 31.5, 31.5, 0.84) 50%, rgba(52.5, 31.5, 31.5, 0.84) 100%)',
        }}
      ></div>
      <Image
        src={`${RoutesConfig.backdrop}${backdrop}`}
        alt='backdrop'
        fill
        sizes='100vw'
        priority
        objectFit='cover'
      />

      <div className='z-[100] container absolute translate-x-[50%] right-[50%] top-0 hidden md:flex gap-8 text-white'>
        <div className='relative h-[450px] w-[300px] lg:mt-8 rounded-md'>
          <Image
            src={`${RoutesConfig.poster}${poster}`}
            alt='poster'
            priority
            fill
            sizes='(max-width: 576px) 100vw, (max-width: 1440px) 50vw'
            objectFit='contain'
            style={{ borderRadius: '10px' }}
          />
        </div>
        <div className='w-[80%] mt-10'>
          <div className='flex gap-2 text-2xl sm:text-4xl'>
            <h1 className='font-semibold sm:tracking-wide'>{title}</h1>
            <p className='text-[#d0d0d0] font-light'>
              ({releaseDate?.split('-')[0]})
            </p>
          </div>

          <div className='flex gap-2 items-center'>
            <p>{dayjs(releaseDate).format('DD/MM/YYYY')}</p>
            <GoDot />
            <div className='w-fit'>
              {genres?.map(({ name, id }) => {
                if (genres.indexOf({ name, id }) === genres.length - 1)
                  return <span key={id}>{name}</span>;
                return <span key={id}>{name}, </span>;
              })}
            </div>
            <GoDot />
            <p>{runtime} mins</p>
          </div>

          <div className='mt-6 flex gap-4 items-center flex-wrap'>
            <div
              className={`ring-2 ring-offset-1 w-[60px] h-[60px] rounded-full bg-[#113b11] text-sm flex justify-center items-center text-white font-medium 
              ${voteAverage && voteAverage >= 7.5 ? 'ring-green-500' : voteAverage && voteAverage > 5 ? 'ring-[#f9cd3c]' : 'ring-red-500'}`}
            >
              <span>{Math.floor((voteAverage ?? 0) * 10) + '%'}</span>
            </div>

            <div className='font-semibold'>
              User <br /> Score
            </div>

            <ul className='flex text-4xl'>
              <li
                className='!mx-0 w-9 h-9 bg-tmdb-dark-blue'
                title='Exploding head'
              >
                😂
              </li>
              <li
                className='!mx-0 w-9 h-9 bg-tmdb-dark-blue'
                title='Smiling face with heart eyes'
              >
                😍
              </li>
              <li
                className='!mx-0 w-9 h-9 bg-tmdb-dark-blue'
                title='Grinning face'
              >
                🤧
              </li>
            </ul>

            <div className='cursor-pointer ml-4 p-2 px-4 bg-[#10304c] rounded-xl'>
              <p>
                What&apos;s your{' '}
                <b className='border-b-[3px] border-[#00c8ff]'>Vibe</b>?
              </p>
            </div>
          </div>

          <div className='flex gap-6 mt-6 items-center'>
            <div className='rounded-full cursor-pointer flex items-center justify-center bg-[#10304c] w-[50px] h-[50px]'>
              <FaList className='text-white' />
            </div>
            <div className='rounded-full cursor-pointer flex items-center justify-center bg-[#10304c] w-[50px] h-[50px]'>
              <FaHeart className='text-white' />
            </div>
            <div className='rounded-full cursor-pointer flex items-center justify-center bg-[#10304c] w-[50px] h-[50px]'>
              <FaBookmark className='text-white' />
            </div>
            <div className='flex text-white gap-2 items-center cursor-pointer hover:text-[#737272]'>
              <FaPlay className='' />
              <p className='font-semibold text-lg'>Play Trailer</p>
            </div>
          </div>

          <div>
            <p className='mt-6 font-semibold text-2xl tracking-wide'>
              Overview
            </p>
            <p>{overview}</p>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='z-[100] container absolute translate-x-[50%] md:hidden right-[50%] top-[5%] flex-wrap flex text-white'>
        <div className='grid sm:px-4 px-2 sm-gap-4 gap-4 grid-cols-12'>
          <div className='relative col-span-4 md:col-span-6 h-[150px] w-[125px] md:h-[250px] md:w-[225px] rounded-md'>
            <Image
              src={`${RoutesConfig.poster}${poster}`}
              alt='poster'
              priority
              fill
              sizes='(max-width: 576px) 100vw, (max-width: 1440px) 50vw'
              objectFit='cover'
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className='flex ml-2 gap-2 col-span-8 md:col-span-6 flex-wrap'>
            <h1 className='font-semibold text-2xl sm:text-4xl sm:tracking-wide'>
              {title}
            </h1>
            <div className='flex gap-2 items-center flex-wrap'>
              <p>{dayjs(releaseDate).format('DD/MM/YYYY')}</p>
              <div className='line-clamp-1'>
                {genres?.map(({ name, id }) => {
                  if (genres.indexOf({ name, id }) === genres.length - 1)
                    return <span key={id}>{name}</span>;
                  return <span key={id}>{name + ', '}</span>;
                })}
              </div>
              <p>{runtime} mins</p>
            </div>
          </div>
        </div>

        <div className='w-full px-3'>
          <div className='mt-6 flex gap-3 items-center justify-between'>
            <div
              className={`ring-2 ring-offset-1 w-[50px] h-[50px] rounded-full bg-[#113b11] text-sm flex justify-center items-center text-white font-medium 
              ${voteAverage ?? 0 >= 7.5 ? 'ring-green-500' : voteAverage ?? 0 > 5 ? 'ring-[#f9cd3c]' : 'ring-red-500'}`}
            >
              <span>{Math.floor((voteAverage ?? 0) * 10) + '%'}</span>
            </div>

            <div className='font-semibold'>
              User <br /> Score
            </div>

            <ul className='flex text-3xl'>
              <li
                className='!mx-0 w-9 h-9 bg-tmdb-dark-blue'
                title='Exploding head'
              >
                😂
              </li>
              <li
                className='!mx-0 w-9 h-9 bg-tmdb-dark-blue'
                title='Smiling face with heart eyes'
              >
                😍
              </li>
              <li
                className='!mx-0 w-9 h-9 bg-tmdb-dark-blue'
                title='Grinning face'
              >
                🤧
              </li>
            </ul>

            <div className='cursor-pointer p-2 px-2 bg-[#10304c] rounded-xl'>
              <p>
                What&apos;s your{' '}
                <b className='border-b-[3px] border-[#00c8ff]'>Vibe</b>?
              </p>
            </div>
          </div>

          <div className='flex gap-4 mt-4 items-center'>
            <div className='rounded-full cursor-pointer flex items-center justify-center bg-[#10304c] w-[45px] h-[45px]'>
              <FaList className='text-white' />
            </div>
            <div className='rounded-full cursor-pointer flex items-center justify-center bg-[#10304c] w-[45px] h-[45px]'>
              <FaHeart className='text-white' />
            </div>
            <div className='rounded-full cursor-pointer flex items-center justify-center bg-[#10304c] w-[45px] h-[45px]'>
              <FaBookmark className='text-white' />
            </div>
            <div className='flex text-white gap-2 items-center cursor-pointer hover:text-[#737272]'>
              <FaPlay className='' />
              <p className='font-semibold text-lg'>Play Trailer</p>
            </div>
          </div>

          <div>
            <h3 className='mt-4 font-semibold text-xl tracking-wide'>
              Overview
            </h3>
            <p className='line-clamp-6'>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailHeader;
