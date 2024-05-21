import RoutesConfig from '@/constants/url';
import { IMovieDetail } from '@/interfaces/movie';
import { voteColor } from '@/utils/common';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { FaBookmark, FaHeart, FaList, FaPlay } from 'react-icons/fa';
import { GoDot } from 'react-icons/go';

const MovieDetailHeader = ({ movie }: { movie: IMovieDetail }) => {
  const {
    backdrop_path: backdrop,
    genres,
    title,
    runtime,
    overview,
    release_date: releaseDate,
    poster_path: poster,
    vote_average: voteAverage,
  } = movie;
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
        sizes='(max-width: 576px) 100vw, (max-width: 1440px) 50vw'
        priority
        style={{
          objectFit: 'cover',
        }}
      />
      <div className='z-[100] w-[1280px] h-[500px] absolute translate-x-[50%] right-[50%] top-[5%] flex gap-8 text-white'>
        <div className='w-[25%]'>
          <Image
            src={`${RoutesConfig.poster}${poster}`}
            alt='poster'
            width={300}
            height={450}
            style={{ borderRadius: '10px' }}
          />
        </div>
        <div className='w-[75%]'>
          <div className='flex gap-2 text-4xl'>
            <h1 className=' font-semibold tracking-wide'>{title}</h1>
            <p className='text-[#d0d0d0] font-light'>
              ({releaseDate.split('-')[0]})
            </p>
          </div>

          <div className='flex gap-2 items-center'>
            <p>{dayjs(releaseDate).format('DD/MM/YYYY')}</p>
            <GoDot />
            <div>
              {genres.map((genre) => {
                if (genres.indexOf(genre) === genres.length - 1) {
                  return <span key={genre.id}>{genre.name}</span>;
                }
                return <span key={genre.id}>{genre.name}, </span>;
              })}
            </div>
            <GoDot />
            <p>{runtime} mins</p>
          </div>

          <div className='mt-6 flex gap-4 items-center'>
            <div
              className={`ring-2 ring-offset-1 w-[60px] h-[60px] rounded-full bg-[#113b11] text-sm flex justify-center items-center text-white font-medium ${voteColor(
                voteAverage
              )}`}
            >
              <span>{Math.floor(voteAverage * 10) + '%'}</span>
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
            <h3 className='mt-6 font-semibold text-2xl tracking-wide'>
              Overview
            </h3>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailHeader;
