
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

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

export default ({ teams }) =>
  teams.map(({ slug, title }) => (
    <Link key={slug} href={`/teams/${slug}`}>
      <div className="grid grid-cols-1 gap-4 h-72 w-1/2 m-auto">
        <div className="flex items-center justify-center bg-yellow-200  border-l-8 border-green-400 shadow-md m-2">
          <a>{title}</a>
        </div>  
      </div>
    </Link>
  ));