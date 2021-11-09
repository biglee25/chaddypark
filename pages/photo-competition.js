
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/layout';
import Container from '../components/container';

import Head from 'next/head'
import Image from 'next/image'

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { photos } = await graphcms.request(
    `
    query MyQuery {
      photos {
        image {
          id
          url
          width
          height
        }
        headline
      }
    }
    `
  );

  return {
    props: {
      photos,
    },
  };
}

export default function Teams({ photos }) {
  return (
    <>
    <Head>
      <title>Chadderton Park FC - Teams</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Chadderton Park Football Club, Chadderton, Chaddy Park Oldham, junior soccer chaddy fold, boundary park, clayton playing fields, manchester FA, charter standard club of the year"/>
      <meta name="keywords" content="chadderton, chaddy park football, soccer club, standard charter, charter standard, boundary park, clayton playing fields, oldham athletic, mini soccer, rochdale, league, bury league, junior football"/>
    </Head>
    <Layout>
      <Container>
      <h1 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight text-center">Photo Competition</h1>
        <p className="text-center">Send us a Photo with the Chaddy Park scarf and we will post it on this page</p>
        <p className="text-center">There are many prizes to be won</p>
        <div className="w-full md:w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:p-12 m-auto">
          {photos.map((photo) => (
              <div className="shadow-xl flex flex-col justify-between">
                <img
                  src={photo.image.url}
                  width={photo.image.width}
                  height="550px"
                  className="p-5"
                />
               <div className="py-5 text-black items-stretch my-auto" key={photo.id}>
                  {photo.headline}
                </div>
              </div>
          ))}
        </div>
      </Container>
    </Layout>
    </>
  )
}
  
 