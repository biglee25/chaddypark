import { GraphQLClient } from 'graphql-request'

import Container from '../../components/container'

import Link from 'next/link'
import Image from 'next/image'
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
        image {
          height
          url
          width
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
        image {
          height
          url
          width
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
        <Image
            src={team.image.url}
            width={team.image.width}
            height={team.image.height}
          />
        <div dangerouslySetInnerHTML={{ __html: team.content.html }} className="m-auto pt-12" />
      </div>
    </Container>
    <div className="w-full m-auto text-center mt-12">
    <Link href="/teams" className="text-black">
      <button className="bg-primaryyellow hover:bg-yellow-400 px-12 py-5">
        Back to Teams
      </button>
      </Link>
    </div>
  </Layout>

  </>
);

