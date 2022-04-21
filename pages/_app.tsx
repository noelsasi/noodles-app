import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import { wrapper } from '../redux/store';
import { Provider, useStore } from 'react-redux';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <div className='font-poppins'>
          <Layout>
            <div className="md:w-10/12 lg:w-5/12 mx-auto">
              <Component {...pageProps} />
            </div>
          </Layout>
        </div>
      </Provider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
