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
        heading
        content {
          html
        }
        image {
          height
          url
          width
        }
        profile {
            html
        }
        profileImage {
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
        heading
        content {
          html
        }
        image {
          height
          url
          width
        }
        profile {
            html
        }
        profileImage {
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
        <h1 className="text-center mt-12">{team.title}</h1>
        <h2 className="font-bold text-center pb-5">{team.heading}</h2>
        <Image
            src={team.image.url}
            width={team.image.width}
            height={team.image.height}
          />
          <div className="bg-yellow-200 my-12 rounded-lg p-5">
          <div dangerouslySetInnerHTML={{ __html: team.content.html }} className="m-auto py-12" />

          </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center bg-gray-100 p-5 rounded-lg">
        <div className="flex items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: team.profile.html }} className="m-auto pt-12 text-black" />
        </div>
        <div>
        <Image
            src={team.profileImage.url}
            width={team.profileImage.width}
            height={team.profileImage.height}
          />
        </div>
      </div>
    </Container>
    <div className="w-full m-auto text-center mt-12">
    <Link href="/teams" className="text-black">
      <button className="bg-primaryyellow hover:bg-yellow-400 w-full md:w-56 px-24 md:px-12 py-5">
        Back to Teams
      </button>
      </Link>
    </div>
  </Layout>

  </>
);

