import '@/styles/global.less';

import React from 'react';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Head>
        <title>NextJS App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
