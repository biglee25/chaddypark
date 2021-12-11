
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
      <h1 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-none text-center">Club Videos</h1>
        <h2 className="text-center py-4">Check out our <a href="https://www.youtube.com/user/silkysim/videos" target="_blank"><span className="text-red-500">Youtube</span></a> channel for more videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center m-auto cursor-pointer">
          <div>
            <iframe src="https://www.youtube.com/embed/Y0OlBZFxX8s"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
            </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/7UMsvMITjg4"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/B7vsiWlKI_I"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/52l-tlYirbs"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/HtSMxsz4_Gs"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/MHaHbXlFCuM"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/zTgVFo31WrE"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/ZmFV5PQGivs"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/jIljEYRatdE"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/uTZ2y9dAtdA"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/CXG8klP9iWg"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/3ycYNmTA994"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/fTd67r4VVN4"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/2UgDbXdYeFE"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/0MW2gMtdrdc"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/CiT-4V3IZFQ"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/CU9eBfaajzI"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/PeLn8GgEuF4"
                    className="w-full h-96 mx-auto shadow-lg bg-black"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
              </iframe>
          </div>
        </div>
      </Container>
    </Layout>
    </>
  )
}
  
 