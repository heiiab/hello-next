import Head from 'next/head';
import type { NextPage, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = (): JSX.Element => {
  const { t } = useTranslation('home');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <h1>{t('title')}</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['home'])),
  },
});

export default Home;
