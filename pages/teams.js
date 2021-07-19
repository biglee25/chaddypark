
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/layout';
import Container from '../components/container';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { teams } = await graphcms.request(
    `
      { 
        teams {
          slug
          title
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
        <div className="w-full md:w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-12 m-auto cursor-pointer">
          {teams.map((team) => (
            <Link href={`/teams/${encodeURIComponent(team.slug)}`}>
              <div className="bg-primaryyellow hover:bg-yellow-400 p-5 h-32 flex flex-col justify-center">
                <div key={team.id}>
                    <a>{team.title}</a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
  
 