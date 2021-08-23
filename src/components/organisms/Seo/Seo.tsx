import Head from 'next/head';
import type { VFC } from 'react';
import type { SeoProps } from 'src/types/seoprops';
import { GA_TRACKING_ID } from 'src/utils/gtag';

export const Seo: VFC<SeoProps> = (props) => {
  return (
    <Head>
      {GA_TRACKING_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line @typescript-eslint/naming-convention
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });`,
            }}
          />
        </>
      )}
      <meta charSet="utf-8" />
      <meta name="pinterest" content="nopin" />
      <title>{props.title}</title>
      <meta name="theme-color" content="#263238" />
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={props.image.url} />
      <meta property="og:url" content={props.url} />
      <meta property="og:site_name" content={props.title} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="A/B Checker" />
      <meta name="twitter:url" content={props.image.url} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image.url} />
      <link rel="canonical" href={props.url} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
    </Head>
  );
};
