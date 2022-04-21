import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { IBrand, IImage, Reducers } from '../constants';

function CountryPage() {
  const router = useRouter();
  const { country } = router.query;
  const { list, images }: { list: IBrand[]; images: IImage[] } = useSelector(
    ({ noodle }: Reducers) => noodle
  );
  const countryData = list.filter((x) => x.Country === country);

  return (
    <div>
      <div>
        <Head>
          <title>Noodles App - Country Page</title>
          <meta
            name="description"
            content="Noodles app challenge by YouKraft"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="bg-blue py-24 ">
            <h1 className="text-center text-xl text-white font-bold">
              Country
            </h1>
            <h1 className="text-center text-6xl text-white font-bold">
              {country}
            </h1>
          </div>
          <div className="mt-6 mx-6">
            {countryData.map((item, index) => (
              <Link href={`/brand/${item.Brand}/${index}`} key={index}>
                <a>
                  <Card item={item} image={images[index]} />
                </a>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CountryPage;
