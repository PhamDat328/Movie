import dynamic from 'next/dynamic';

export const Header = dynamic(() => import('./Menu'));
export const UserInteract = dynamic(() => import('./UserInteract'));
