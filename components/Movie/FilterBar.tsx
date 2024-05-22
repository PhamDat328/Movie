import React from 'react';
import {
  Button,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';
import { useGetGenres } from '@/hooks/apis/movies/useGetGenres';
import { IGenre, ILanguage } from '@/interfaces/movie';
import { QueryClient } from '@tanstack/react-query';
import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';
import { useGetLanguage } from '@/hooks/apis/movies/useGetLanguage';
import { useRouter } from 'next/router';
const FilterBar = () => {
  const router = useRouter();

  let genres: IGenre[] = [];
  let languages: ILanguage[] = [];
  const { data: gen } = useGetGenres();
  const { data: lang } = useGetLanguage();
  if (gen) genres = gen.genres;
  if (lang) languages = lang;

  const handleGenreChange = (val: string) => {
    const url = new URL(router.asPath, window.location.origin);
    const params = new URLSearchParams(url.search);

    params.set('with_genres', val);
    url.search = params.toString();

    router.push(url.toString());
  };

  return (
    <Card className=' w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
      <div className='mb-2 p-4'>
        <Typography variant='h5' color='blue-gray'>
          Filter bar
        </Typography>
      </div>
      <List>
        <div>
          <ListItem>
            <ListItemPrefix>🏠</ListItemPrefix>
            Genres
          </ListItem>
          <div className='ml-4 mt-4 flex flex-wrap gap-1'>
            {genres.map(({ name, id }) => (
              <Button
                onClick={() => handleGenreChange(id.toString())}
                variant='outlined'
                key={name}
                className='p-2 mb-1'
              >
                {name}
              </Button>
            ))}
          </div>
        </div>

        <div className='mt-6'>
          <ListItem>
            <ListItemPrefix>🛒</ListItemPrefix>
            Languages
          </ListItem>
          <div className='w-60'>
            <Select
              label='Select Language'
              value={''}
              onChange={(val) => {
                const url = new URL(router.asPath, window.location.origin);
                const params = new URLSearchParams(url.search);

                if (val !== undefined) {
                  params.set('with_original_language', val);
                }
                url.search = params.toString();

                router.push(url.toString());
              }}
            >
              {languages.map(({ english_name: engName, iso_639_1 }) => (
                <Option value={iso_639_1} key={iso_639_1}>
                  {engName}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </List>
    </Card>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  const prefetchGenres = queryClient.prefetchQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_GENRES],
    queryFn: () => movieApi.getGenres(),
  });
  const prefetchLanguages = queryClient.prefetchQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_GENRES],
    queryFn: () => movieApi.getGenres(),
  });

  Promise.all([prefetchGenres, prefetchLanguages]);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(queryClient)),
    },
  };
};

export default FilterBar;
