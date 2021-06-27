import { GraphQLClient } from 'graphql-request'

import Container from '../../components/container'

import PostBody from '../../components/post-body'
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
          text
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
          text
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
    <h1 className="text-6xl font-bold text-center mt-12">{team.title}</h1>
    <p className="text-sm text-center">{team.content.text}</p>
    </Container>
  </Layout>
  </>
);