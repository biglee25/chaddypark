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
        extraContent {
          html
        }
        leagueTable {
          html
        }
        matchReport {
          html
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
        profileImage1 {
          height
          url
          width
        }
        profile2 {
            html
        }
        profileImage2 {
          height
          url
          width
        }
        profile3 {
            html
        }
        profileImage3 {
          height
          url
          width
        }
        profile4 {
            html
        }
        profileImage4 {
          height
          url
          width
        }
        profile5 {
            html
        }
        profileImage5 {
          height
          url
          width
        }
        profile6 {
            html
        }
        profileImage6 {
          height
          url
          width
        }
        profile7 {
            html
        }
        profileImage7 {
          height
          url
          width
        }
        profile8 {
            html
        }
        profileImage8 {
          height
          url
          width
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
        extraContent {
          html
        }
        leagueTable {
          html
        }
        matchReport {
          html
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
        profileImage1 {
          height
          url
          width
        }
        profile2 {
            html
        }
        profileImage2 {
          height
          url
          width
        }
        profile3 {
            html
        }
        profileImage3 {
          height
          url
          width
        }
        profile4 {
            html
        }
        profileImage4 {
          height
          url
          width
        }
        profile5 {
            html
        }
        profileImage5 {
          height
          url
          width
        }
        profile6 {
            html
        }
        profileImage6 {
          height
          url
          width
        }
        profile7 {
            html
        }
        profileImage7 {
          height
          url
          width
        }
        profile8 {
            html
        }
        profileImage8 {
          height
          url
          width
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
      <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-none">{team.title}</h1>
          <h2>{team.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
          <Image
              src={team.image.url}
              width={team.image.width}
              height={team.image.height}
              layout="responsive"
            />
            <div className="bg-gray-200 rounded-lg p-5 text-center">
            <div dangerouslySetInnerHTML={{ __html: team.content.html }} className="m-auto py-12" />
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col justify-center mx-auto text-center">
            <div dangerouslySetInnerHTML={{ __html: team.extraContent?.html }} className="mx-auto py-12 md:text-2xl" />
        </div>
        <div className="flex flex-col justify-center mx-auto text-center">
            <div dangerouslySetInnerHTML={{ __html: team.leagueTable?.html }} className="text-left mx-auto py-12 md:text-2xl" />
        </div>
        <div className="bg-gray-100 flex flex-col justify-center mx-auto text-center">
            <div dangerouslySetInnerHTML={{ __html: team.matchReport?.html }} className="mx-auto py-12" />
        </div>
        <h1 className="text-center pb-12 font-black">{team.title} Coaches</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center py-5 md:py-12 rounded-lg">
          <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: team.profile.html }} className="m-auto md:mr-auto text-black" />
          </div>
          <img
              src={team.profileImage?.url}
              width={team.profileImage?.width}
              height={team.profileImage?.height}
              className="m-auto text-black flex flex-col items-center justify-center"
            />
          <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: team.profile1?.html }} className="m-auto text-black" />
          </div>
          <img
              src={team.profileImage1?.url}
              width={team.profileImage1?.width}
              height={team.profileImage1?.height}
              className="m-auto text-black flex flex-col items-center justify-center"
            />
          <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: team.profile2?.html }} className="m-auto text-black" />
          </div>
          <img
              src={team.profileImage2?.url}
              width={team.profileImage2?.width}
              height={team.profileImage2?.height}
              className="m-auto text-black flex flex-col items-center justify-center"
            />
          <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: team.profile3?.html }} className="m-auto text-black" />
          </div>
          <img
              src={team.profileImage3?.url}
              width={team.profileImage3?.width}
              height={team.profileImage3?.height}
              className="m-auto text-black flex flex-col items-center justify-center"
            />
          <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: team.profile4?.html }} className="m-auto text-black" />
          </div>
          <img
              src={team.profileImage4?.url}
              width={team.profileImage4?.width}
              height={team.profileImage4?.height}
              className="m-auto text-black flex flex-col items-center justify-center"
            />
          <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: team.profile5?.html }} className="m-auto text-black" />
          </div>
          <img
              src={team.profileImage5?.url}
              width={team.profileImage5?.width}
              height={team.profileImage5?.height}
              className="m-auto text-black flex flex-col items-center justify-center"
            />
          <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: team.profile6?.html }} className="m-auto text-black" />
          </div>
          <img
              src={team.profileImage6?.url}
              width={team.profileImage6?.width}
              height={team.profileImage6?.height}
              className="m-auto text-black flex flex-col items-center justify-center"
            />
          <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: team.profile7?.html }} className="m-auto text-black" />
          </div>
          <img
              src={team.profileImage7?.url}
              width={team.profileImage7?.width}
              height={team.profileImage7?.height}
              className="m-auto text-black flex flex-col items-center justify-center"
            />
          <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: team.profile8?.html }} className="m-auto text-black" />
          </div>
          <img
              src={team.profileImage8?.url}
              width={team.profileImage8?.width}
              height={team.profileImage8?.height}
              className="m-auto text-black flex flex-col items-center justify-center"
            />
          <div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 items-stretch">
          <img
          src={team.gallery1?.url}
          width="100%"
          height="100%"
          />
          <img
          src={team.gallery2?.url}
          width="100%"
          height="100%"
          />
          <img
          src={team.gallery3?.url}
          width="100%"
          height="100%"
          />
          <img
          src={team.gallery4?.url}
          width="100%"
          height="100%"
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
