import dynamic from 'next/dynamic';

export const Header = dynamic(import('./Menu'));
export const SearchBar = dynamic(import('./SearchBar'));
export const UserInteract = dynamic(import('./UserInteract'));
