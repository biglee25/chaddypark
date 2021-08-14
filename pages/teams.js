
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/layout';
import Container from '../components/container';

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
    <Layout>
      <Container>
        <div className="w-full md:w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-4 text-center md:p-12 m-auto cursor-pointer">
          {teams.map((team) => (
            <Link href={`/teams/${encodeURIComponent(team.slug)}`}>
              <a>
              <div className="shadow-xl flex flex-col justify-between min-h-full">
                <div className="py-5 bg-primaryyellow hover:bg-black text-black hover:text-white" key={team.id}>
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
  )
}
  
 