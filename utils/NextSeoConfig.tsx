import React from 'react';
import { DefaultSeo, NextSeo } from 'next-seo';

const DEFAULT = {
  LOGO: 'https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_960_720.png',
  FAVICON: `https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_960_720.png`,
};

export interface SEOConfigProps {
  title?: string;
  description?: string;
  keyword?: string;
  gaScript?: string;
  facebook?: string;
  linkInstagram?: string;
  linkTwitter?: string;
  favicon?: string;
  logo?: string;
}

const SEOConfig = ({
  title,
  description,
  logo,
  favicon,
  keyword,
  facebook,
}: SEOConfigProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      }}
      openGraph={{
        title,
        description,
        type: 'website',
        locale: 'en',
        // url: ``,
        siteName: '@LuxeMovie',
        images: [
          {
            url: logo ?? DEFAULT.LOGO,
            width: 1200,
            height: 600,
            alt: 'Logo',
          },
        ],
      }}
      twitter={{
        handle: '@LuxeMovie',
        site: '@site',
        cardType: 'summary',
      }}
      facebook={{
        appId: facebook ?? '',
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: favicon ?? DEFAULT.FAVICON,
        },
      ]}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: keyword || '',
        },
      ]}
    />
  );
};

export const DefaultSEOConfig = ({
  title,
  description,
  logo,
  favicon,
  keyword,
  facebook,
}: SEOConfigProps) => {
  return (
    <DefaultSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        type: 'website',
        locale: 'en',
        siteName: 'LuxeMovie',
        images: [
          {
            url: logo ?? DEFAULT.LOGO,
            width: 1200,
            height: 600,
            alt: 'Logo',
          },
        ],
      }}
      twitter={{
        handle: '@LuxeMovie',
        site: '@site',
        cardType: 'summary',
      }}
      facebook={{
        appId: facebook ?? '',
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: favicon ?? DEFAULT.FAVICON,
        },
      ]}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: keyword || '',
        },
      ]}
    />
  );
};

export default SEOConfig;
