import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageCustom = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
  // defaultSEO?: SEOConfigProps;
  AuthRequire: boolean;
};

export type AppPropsCustom = AppProps & {
  Component: NextPageCustom;
};

export interface IMessage {
  message: string;
  statusCode: number;
}

export interface IMetaData {
  page: string;
  take: string;
  totalCount: number;
}
