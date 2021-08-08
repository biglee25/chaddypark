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
        sponsor {
          html
        }
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
        profile1 {
            html
        }
        profile2 {
            html
        }
        profile3 {
            html
        }
        profile4 {
            html
        }
        profile5 {
            html
        }
        profile6 {
            html
        }
        profile7 {
            html
        }
        profile8 {
            html
        }
        gallery1 {
          url
          width
          height
      } 
      gallery2 {
          url
          width
          height
      } 
      gallery3 {
          url
          width
          height
      } 
      gallery4 {
          url
          width
          height
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
        sponsor {
          html
        }
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
        profile1 {
            html
        }
        profile2 {
            html
        }
        profile3 {
            html
        }
        profile4 {
            html
        }
        profile5 {
            html
        }
        profile6 {
            html
        }
        profile7 {
            html
        }
        profile8 {
            html
        }
        gallery1 {
            url
            width
            height
        } 
        gallery2 {
            url
            width
            height
        } 
        gallery3 {
            url
            width
            height
        } 
        gallery4 {
            url
            width
            height
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
  <Layout>
    <Container>
      <div className="text-center">
        <div className="bg-gray-800 text-white flex flex-col items-center justify-center my-12 py-5">
          <h1>{team.title}</h1>
          <h2>{team.heading}</h2>
        </div>
        <Image
            src={team.image.url}
            width={team.image.width}
            height={team.image.height}
            layout="responsive"
          />
          <div className="bg-primaryyellow my-12 rounded-lg p-5">
          <div dangerouslySetInnerHTML={{ __html: team.content.html }} className="m-auto py-12" />
          </div>
      </div>
      <h1 className="text-center pb-12">{team.title} Coaches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center bg-gray-100 p-5 rounded-lg">
        <div className="flex items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: team.profile.html }} className="m-auto pt-12 text-black" />
        </div>
        <div>
        <img
            src={team.profileImage?.url}
            width={team.profileImage?.width}
            height={team.profileImage?.height}
            className="m-auto pt-12 text-black flex flex-col items-center justify-center"
          />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: team.profile1?.html }} className="m-auto text-black flex flex-col items-center justify-center" />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: team.profile2?.html }} className="m-auto text-black flex flex-col items-center justify-center" />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: team.profile3?.html }} className="m-auto text-black flex flex-col items-center justify-center" />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: team.profile4?.html }} className="m-auto text-black flex flex-col items-center justify-center" />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: team.profile5?.html }} className="m-auto text-black flex flex-col items-center justify-center" />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: team.profile6?.html }} className="m-auto text-black flex flex-col items-center justify-center" />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: team.profile7?.html }} className="m-auto text-black flex flex-col items-center justify-center" />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: team.profile8?.html }} className="m-auto text-black flex flex-col items-center justify-center" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
        <img
        src={team.gallery1?.url}
        width={team.gallery1?.width}
        height={team.gallery1?.height}

        />
        <img
        src={team.gallery2?.url}
        width={team.gallery2?.width}
        height={team.gallery2?.height}
        />
        <img
        src={team.gallery3?.url}
        width={team.gallery3?.width}
        height={team.gallery3?.height}
        />
        <img
        src={team.gallery4?.url}
        width={team.gallery4?.width}
        height={team.gallery4?.height}
        />
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: team.sponsor?.html }} className="m-auto text-black flex flex-col items-center justify-center" />
      </div>
    </Container>
    <div className="w-full m-auto text-center mt-12">
    <Link href="/teams" className="text-black">
      <button className="bg-gray-800 text-white hover:bg-gray-600 w-full md:w-56 px-24 md:px-12 py-5">
        Back to Teams
      </button>
      </Link>
    </div>
  </Layout>
);
