
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/layout';
import Container from '../components/container';

import Head from 'next/head'
import Image from 'next/image'

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { teams } = await graphcms.request(
    `
    query MyQuery {
      teams {
        slug
        title
        image {
          id
          url
          width
          height
        }
      }
    }
    `
  );

  return {
    props: {
      teams,
    },
  };
}

export default function Teams({ teams }) {
  return (
    <>
    <Head>
      <title>Chadderton Park FC - Videos</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Chadderton Park Football Club, Chadderton, Chaddy Park Oldham, junior soccer chaddy fold, boundary park, clayton playing fields, manchester FA, charter standard club of the year"/>
      <meta name="keywords" content="chadderton, chaddy park football, soccer club, standard charter, charter standard, boundary park, clayton playing fields, oldham athletic, mini soccer, rochdale, league, bury league, junior football"/>
    </Head>
    <Layout>
      <Container>
      <h1 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight text-center">Club Videos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center m-auto cursor-pointer">
          <div>
            <iframe src="https://www.youtube.com/embed/Y0OlBZFxX8s"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="The FA Grassroots National Club of the Year 2019"
                    loading="lazy">
            </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/7UMsvMITjg4"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Cerebral Palsy Football"
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/B7vsiWlKI_I"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Cerebral Palsy Football"
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/52l-tlYirbs"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Cerebral Palsy Football"
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/HtSMxsz4_Gs"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Cerebral Palsy Football"
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/MHaHbXlFCuM"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Cerebral Palsy Football"
                    loading="lazy">
              </iframe>
          </div>
        </div>
      </Container>
    </Layout>
    </>
  )
}
  
 