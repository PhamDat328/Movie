import React from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
} from '@material-tailwind/react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import {
  FaChevronDown,
  FaChevronRight,
  FaInbox,
  FaShoppingBag,
  FaUser,
  FaUserCircle,
} from 'react-icons/fa';
import { IoPower, IoSettings } from 'react-icons/io5';

export function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className='h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
      <div className='p-2'>
        <Input
          crossOrigin={'true'}
          icon={<FaMagnifyingGlass className='h-5 w-5' />}
          label='Search'
        />
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <FaChevronDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? 'rotate-180' : ''}`}
            />
          }
        >
          <ListItem className='p-0' selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className='border-b-0 p-3'
            >
              <ListItemPrefix>
                <FaUser className='h-5 w-5' />
              </ListItemPrefix>
              <Typography color='blue-gray' className='mr-auto font-normal'>
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className='py-1'>
            <List className='p-0'>
              <ListItem>
                <ListItemPrefix>
                  <FaChevronRight strokeWidth={3} className='h-3 w-5' />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FaChevronRight strokeWidth={3} className='h-3 w-5' />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FaChevronRight strokeWidth={3} className='h-3 w-5' />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <FaChevronDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? 'rotate-180' : ''}`}
            />
          }
        >
          <ListItem className='p-0' selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className='border-b-0 p-3'
            >
              <ListItemPrefix>
                <FaShoppingBag className='h-5 w-5' />
              </ListItemPrefix>
              <Typography color='blue-gray' className='mr-auto font-normal'>
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className='py-1'>
            <List className='p-0'>
              <ListItem>
                <ListItemPrefix>
                  <FaChevronRight strokeWidth={3} className='h-3 w-5' />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FaChevronRight strokeWidth={3} className='h-3 w-5' />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className='my-2 border-blue-gray-50' />
        <ListItem>
          <ListItemPrefix>
            <FaInbox className='h-5 w-5' />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value='14'
              size='sm'
              variant='ghost'
              color='blue-gray'
              className='rounded-full'
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <FaUserCircle className='h-5 w-5' />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <IoSettings className='h-5 w-5' />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <IoPower className='h-5 w-5' />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
