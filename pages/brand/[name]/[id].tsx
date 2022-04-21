import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../../components/Card';
import { IBrand, IImage, Reducers } from '../../../constants';

function BrandPage() {
  const router = useRouter();
  const { name } = router.query;
  const { list, images }: { list: IBrand[]; images: IImage[] } = useSelector(
    ({ noodle }: Reducers) => noodle
  );
  const brandData = list.filter((x) => x.Brand === name);

  return (
    <div>
      <div>
        <Head>
          <title>Noodles App - Brand Page</title>
          <meta
            name="description"
            content="Noodles app challenge by YouKraft"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="bg-yellow py-24 ">
          <h1 className="text-center text-xl text-black font-bold">
              Brand
            </h1>
            <h1 className="text-center text-6xl text-black font-bold">
              {name}
            </h1>
          </div>
          <div className="mt-6 mx-6">
            {brandData.map((item, index) => (
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

export default BrandPage;
