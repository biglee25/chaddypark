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
      photos(orderBy: updatedAt_DESC) {
        image {
          id
          url
          width
          height
        }
        headline
        content
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
      <h1 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-none text-center">Photo Competition</h1>
        <p className="text-center">Send us a Photo with the Chaddy Park scarf and we will post it on this page</p>
        <p className="text-center">There are many prizes to be won</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center pt-8 md:p-12 m-auto">
          {photos.map((photo) => (
              <div className="shadow-xl flex flex-col justify-between">
                <Image
                  src={photo.image.url}
                  width={photo.image.width}
                  height={photo.image.height}
                />
               <div className="py-5 text-black tracking-tighter leading-tight text-center items-stretch my-auto px-2">
                 <h2>{photo.headline}</h2> 
                  {photo.content}
                </div>
              </div>
          ))}
        </div>
      </Container>
    </Layout>
    </>
  )
}
  
 