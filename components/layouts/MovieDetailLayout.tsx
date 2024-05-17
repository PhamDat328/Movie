import RoutesConfig from '@/constants/url';
import { IMovieDetail } from '@/interfaces/movie';
import Image from 'next/image';
import React from 'react';
import { GoDot } from 'react-icons/go';
import { FaList, FaHeart, FaBookmark, FaPlay, FaStar } from 'react-icons/fa6';
import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import Socials from '../Socials';

const MovieDetailLayout = ({ movie }: { movie: IMovieDetail }) => {
  const [activeTab, setActiveTab] = React.useState('poster');
  const data = [
    {
      key: 'poster',
      label: 'Poster',
      value: 'poster',
      url: RoutesConfig.posterList,
      width: 220,
      height: 330,
      desc: movie.images?.posters,
    },
    {
      key: 'backdrop',
      label: 'Backdrop',
      value: 'backdrop',
      width: 533,
      height: 300,
      url: RoutesConfig.backdropList,
      desc: movie.images?.backdrops,
    },
  ];

  return (
    <>
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
          src={`${RoutesConfig.backdrop}${movie.backdrop_path}`}
          alt='backdrop'
          fill
          // priority
          style={{
            objectFit: 'cover',
          }}
        />
        <div className='z-[100] w-[1280px] h-[500px] absolute translate-x-[50%] right-[50%] top-[5%] flex gap-8 text-white'>
          <div className='w-[25%]'>
            <Image
              src={`${RoutesConfig.poster}${movie.poster_path}`}
              alt='poster'
              width={300}
              height={450}
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className='w-[75%]'>
            <div className='flex gap-2 text-4xl'>
              <h1 className=' font-semibold tracking-wide'>{movie.title}</h1>
              <p className='text-[#d0d0d0] font-light'>
                ({movie.release_date.split('-')[0]})
              </p>
            </div>

            <div className='flex gap-2 items-center'>
              <p>{movie.release_date.split('-').reverse().join('/')}</p>
              <GoDot />
              <div>
                {movie.genres.map((genre) => {
                  if (movie.genres.indexOf(genre) === movie.genres.length - 1) {
                    return <span key={genre.id}>{genre.name}</span>;
                  }
                  return <span key={genre.id}>{genre.name}, </span>;
                })}
              </div>
              <GoDot />
              <p>{movie.runtime} mins</p>
            </div>

            <div className='mt-6 flex gap-4 items-center'>
              <div
                className={`ring-2 ring-offset-1 w-[60px] h-[60px] rounded-full bg-[#113b11] text-sm flex justify-center items-center text-white font-medium ${
                  movie.vote_average > 7
                    ? 'ring-green-700'
                    : movie.vote_average > 5
                      ? 'ring-yellow-500'
                      : 'ring-red-500'
                }`}
              >
                <span>{Math.floor(movie.vote_average * 10) + '%'}</span>
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
                  What's your{' '}
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
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[1320px] mx-auto flex mt-6 gap-4'>
        <div className='w-[80%]'>
          <h3 className='font-semibold text-2xl tracking-wide'>
            Top Billed Cast
          </h3>

          <div className='flex relative gap-4 mt-4 overflow-x-scroll '>
            {movie.credits.cast.slice(0, 10).map((cast, index) => (
              <div
                key={cast.id + index.toString()}
                className='flex flex-col items-center shadow-md mb-4 rounded-lg'
              >
                <div className='h-[175px] w-[138px]'>
                  <Image
                    src={`${RoutesConfig.face}${cast.profile_path}`}
                    alt={cast.name}
                    width={138}
                    height={175}
                  />
                </div>
                <div>
                  <p className='mt-2 font-semibold'>{cast.name}</p>
                  <p className='text-[#737272]'>{cast.character}</p>
                </div>
              </div>
            ))}

            <div
              className='absolute top-0 right-0 h-[100%] pointer-events-none w-[60px]'
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%)',
              }}
            />
          </div>

          <p className='text-xl font-semibold my-4 cursor-pointer w-fit hover:text-[#9b9a9a]'>
            Full Cast & Crew
          </p>
          <hr />

          <div className='flex mt-4 flex-col gap-4'>
            <h3 className='text-xl font-semibold'>
              Reviews{' '}
              <span className='text-[#6c6c6c]'>
                {movie.reviews.results.length}
              </span>
            </h3>
            {movie.reviews?.results.slice(0, 1).map((review) => (
              <div
                key={review.id}
                className='flex flex-col gap-4 border border-[#bebebe] p-4 rounded-md'
              >
                <div className='flex gap-8'>
                  <div className='w-[50px] h-[50px] rounded-full bg-[#27550e] flex items-center justify-center'>
                    <span className='font-medium text-white text-3xl'>
                      {review.author
                        .split(' ')
                        .map((word) => word[0].toUpperCase())}
                    </span>
                  </div>
                  <div>
                    <p className='font-semibold text-xl'>
                      A review by {review.author}
                    </p>
                    <div className='flex gap-2'>
                      <div className='bg-[#27550e] px-2 text-white flex items-center justify-center gap-2 rounded-sm'>
                        <FaStar />
                        <span>{review.author_details.rating * 10}%</span>
                      </div>
                      <p>
                        Written by <b>{review.author}</b> on{' '}
                        <b>
                          {review.created_at
                            .split('T')[0]
                            .split('-')
                            .reverse()
                            .join('/')}
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <p className='text-left'>
                    {review.content.length < 500
                      ? review.content
                      : review.content.slice(0, 500) + '...'}
                  </p>
                  {review.content.length > 500 ? (
                    <button className='text-[#cdae3d]'>Read more</button>
                  ) : null}
                </div>
              </div>
            ))}
            <p className='text-xl font-semibold my-2 cursor-pointer w-fit hover:text-[#9b9a9a]'>
              Read All Reviews
            </p>
            <hr />
          </div>

          <Tabs value={activeTab}>
            <TabsHeader
              className='rounded-none border-b border-blue-gray-50 bg-transparent p-0'
              indicatorProps={{
                className:
                  'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? 'text-gray-900' : ''}
                >
                  {label}
                </Tab>
              ))}
              <Tab
                key={'video'}
                value={'video'}
                onClick={() => setActiveTab('video')}
                className={activeTab === 'video' ? 'text-gray-900' : ''}
              >
                {'Video'}
              </Tab>
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc, url, width, height }) => (
                <TabPanel
                  className='flex overflow-x-scroll'
                  key={value}
                  value={value}
                >
                  {desc?.slice(0, 10).map((item) => {
                    return (
                      <div key={item.file_path}>
                        <Image
                          style={{ maxWidth: 'unset', maxHeight: 'unset' }}
                          src={`${url}${item.file_path}`}
                          alt={item.file_path}
                          width={width}
                          height={height}
                          className='rounded-lg'
                        />
                      </div>
                    );
                  })}
                </TabPanel>
              ))}
              <TabPanel
                className='flex overflow-x-scroll'
                key={'video'}
                value={'video'}
              >
                {movie.videos.results?.slice(0, 10).map((item) => {
                  return (
                    <iframe
                      key={item.key}
                      width='853'
                      height='400'
                      src={`https://www.youtube.com/embed/${item.key}`}
                      allowFullScreen
                      title='MADAME WEB - Behind-the-Scenes Gag Reel'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    ></iframe>
                  );
                })}
              </TabPanel>
            </TabsBody>
          </Tabs>

          <div className='relative rounded-md mt-10'>
            <Image
              width={1280}
              height={400}
              alt='collection'
              src={`${RoutesConfig.backdropCollection}${movie.belongs_to_collection?.backdrop_path}`}
            />
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

            <div className='left-[32px] absolute z-[200] top-[50%] text-white translate-y-[-50%]'>
              <p className='font-semibold text-2xl'>
                Part of the {movie.belongs_to_collection?.name}
              </p>
              <p>Includes ....</p>
              <Button>VIEW THE COLLECTION</Button>
            </div>
          </div>
        </div>

        <div className='w-[20%]'>
          <Socials />
          <div className='flex flex-col gap-4'>
            <div className='mt-8 ml-4'>
              <p className='font-semibold'>Status</p>
              <p>{movie.status}</p>
            </div>
            <div className='ml-4'>
              <p className='font-semibold'>Original Language</p>
              <p>{movie.spoken_languages[0].name}</p>
            </div>
            <div className='ml-4'>
              <p className='font-semibold'>Budget</p>
              <p>
                {movie.budget.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
            </div>
            <div className='ml-4'>
              <p className='font-semibold'>Revenue</p>
              <p>
                {movie.revenue.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
            </div>
          </div>

          <div className='mt-6 ml-4'>
            <h4 className='font-medium mb-2 text-xl'>Keywords</h4>
            <div className='flex flex-wrap gap-2'>
              {movie.keywords.keywords.slice(0, 10).map((keyword) => (
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
      </div>
    </>
  );
};

export default MovieDetailLayout;
