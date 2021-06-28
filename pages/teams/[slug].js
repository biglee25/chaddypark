import { GraphQLClient } from 'graphql-request'

import Container from '../../components/container'

import Link from 'next/link'
import Layout from '../../components/layout'



const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))

export async function getStaticProps({ params }) {
  const { team } = await graphcms.request(
    `
    query TeamPageQuery($slug: String!) {
      team(where: { slug: $slug }) {
        slug
        title
        content {
          html
        }
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      team,
    },
  };
}

export async function getStaticPaths() {
  const { teams } = await graphcms.request(`
    {
      teams {
        slug
        title
        content {
          html
        }
      }
    }
  `);

  return {
    paths: teams.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}


export default ({ team }) => (
  <>
  <Layout>
    <Container>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-center mt-12 pb-5">{team.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: team.content.html }} className="m-auto" />
      </div>
    </Container>
    <div className="w-full m-auto text-center mt-12">
      <button className="bg-primaryyellow hover:bg-yellow-400 px-12 py-5">
        <Link href="/teams" className="text-black">Back to Teams</Link>
      </button>
    </div>
  </Layout>

  </>
);

