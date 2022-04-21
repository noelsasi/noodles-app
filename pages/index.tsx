import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { IBrand, Reducers } from '../constants';
import { fetchBrands } from '../redux/actions';

const Home: NextPage = () => {
  const noodles: IBrand[] = useSelector(({ noodle }: Reducers) => noodle.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <div>
      <Head>
        <title>Noodles App</title>
        <meta name="description" content="Noodles app challenge by YouKraft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-12 px-12">
        <section>
          {noodles.length > 0
            ? noodles.map((item: IBrand, index: number) => {
                return (
                  <Link key={index} href={`/${item.Country}`}>
                    <a>
                      <Card item={item} />
                    </a>
                  </Link>
                );
              })
            : 'Loading..'}
        </section>
      </main>
    </div>
  );
};

export default Home;
