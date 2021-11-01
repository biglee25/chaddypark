
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
      teams (orderBy: order_ASC) {
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
      <title>Chadderton Park FC - Teams</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Chadderton Park Football Club, Chadderton, Chaddy Park Oldham, junior soccer chaddy fold, boundary park, clayton playing fields, manchester FA, charter standard club of the year"/>
      <meta name="keywords" content="chadderton, chaddy park football, soccer club, standard charter, charter standard, boundary park, clayton playing fields, oldham athletic, mini soccer, rochdale, league, bury league, junior football"/>
    </Head>
    <Layout>
      <Container>
        <div className="w-full md:w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-4 text-center md:p-12 m-auto cursor-pointer">
          {teams.map((team) => (
            <Link href={`/teams/${encodeURIComponent(team.slug)}`}>
              <a>
              <div className="shadow-xl flex flex-col justify-between min-h-full">
                <div className="py-5 bg-gray-800 hover:bg-black text-white items-stretch" key={team.id}>
                  {team.title}
                </div>
                <Image
                  src={team.image.url}
                  width={team.image.width}
                  height="450px"
                />
              </div>
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
    </>
  )
}
  
 