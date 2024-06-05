import React from 'react';
import {
  Drawer,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Card,
  Select,
  Option,
} from '@material-tailwind/react';
import { RiMenu3Line } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { IGenre, ILanguage } from '@/interfaces/movie';
import { useGetGenres } from '@/hooks/apis/movies/useGetGenres';
import { useGetLanguage } from '@/hooks/apis/movies/useGetLanguage';
import SortMenu from './SortMenu';
import { FaFilter } from 'react-icons/fa6';
import { IoFilterOutline } from 'react-icons/io5';
export function FilterDrawer() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
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
    <div className='lg:hidden block'>
      <div
        onClick={openDrawer}
        className='flex gap-2 items-center py-2 px-6 ml-6 rounded-md border border-[#555] cursor-pointer'
      >
        <IoFilterOutline /> Filter
      </div>
      <Drawer open={open} onClose={closeDrawer} placement='left'>
        <Card className=' w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
          <div className=''>
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
      </Drawer>
    </div>
  );
}
