import { GraphQLClient } from 'graphql-request';
import Container from '../components/container';

import Image from 'next/image'
import Layout from '../components/layout';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { page } = await graphcms.request(
    `
    query MyQuery {
      page(where: {slug: "community"}) {
        id
        title
        subtitle
        heroImage {
          url
          width
          height
        }
        content1 {
          html
        }
        title1
        image1 {
          url
          width
          height
        }
        title2
        image2 {
          url
          width
          height
        }
        content2 {
          html
        }
        content3 {
          html
        }
        title3
        image3 {
          url
          width
          height
        }
        title4
        image4 {
          url
          width
          height
        }
        title5
        image5 {
          url
          width
          height
        }
        title6
        image6 {
          url
          width
          height
        }
        content4 {
          html
        }
        content5 {
          html
        }
        teamTitle1
        teamImage1 {
            url
            width
            height
        }
        profileImage1 {
          width
          url
          height
        }
        profile1 {
          html
        }
        profileImage2 {
          width
          url
          height
        }
        profile2 {
          html
        }
        profileImage3 {
          width
          url
          height
        }
        profile3 {
          html
        }
        title1
      }
    }

      
    
        
    
    `
  );

  return {
    props: {
      page
    },
  };
}


export default ({ page }) => (
  <Layout>
    <Container>
      <div className="text-center">
      <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-none text-center">{page.title}</h1>
          <h2>{page.subtitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
              src={page.heroImage.url}
              width={page.heroImage.width}
              height={page.heroImage.height}
              layout="responsive"
            />
        <div className="bg-gray-200 rounded-lg p-5 text-center">
            <div dangerouslySetInnerHTML={{ __html: page.content1.html }} className="m-auto py-12" />
        </div>
        </div>
        <div className="bg-white my-12 rounded-lg p-5">
            <div dangerouslySetInnerHTML={{ __html: page.content2.html }} className="text-center mx-auto py-12 flex flex-col items-center justify-center" />
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
          <div>
          <h2 className="text-center bg-black p-2 text-white">{page.title1}</h2>
            <img
                src={page.image1.url}
                width="100%"
                height={page.image1.height}
            />
          </div>
          <div>
          <h2 className="text-center bg-black p-2 text-white">{page.title2}</h2>
            <img
                src={page.image2.url}
                width="100%"
                height={page.image2.height}
            />
          </div>
          <div>
          <h2 className="text-center bg-black p-2 text-white">{page.title3}</h2>
            <img
              src={page.image3.url}
              width="100%"
              height={page.image3.height}
            />
          </div>
          <div>
          <h2 className="text-center bg-black p-2 text-white">{page.title4}</h2>
            <img
              src={page.image4.url}
              width="100%"
              height={page.image4.height}
            />
          </div>
          <div>
          <h2 className="text-center bg-black p-2 text-white">{page.title5}</h2>
            <img
              src={page.image5.url}
              width="100%"
              height={page.image5.height}
            />
          </div>
          <div>
          <h2 className="text-center bg-black p-2 text-white">{page.title6}</h2>
            <img
              src={page.image6.url}
              width="100%"
              height={page.image6.height}
            />
          </div>
      </div>
      <h1 className="text-center pb-5 md:pb-12">Contacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center bg-gray-100 p-5 rounded-lg">
        <div className="flex items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: page.profile1.html }} className="m-auto py-12 text-black" />
        </div>
        <div className="m-auto py-2">
        <img
            src={page.profileImage1.url}
            width={page.profileImage1.width}
            height={page.profileImage1.height}
          />
        </div>
        <div className="flex items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: page.profile2.html }} className="m-auto py-12 text-black" />
        </div>
        <div className="m-auto py-2">
        <img
          src={page.profileImage2.url}
          width={page.profileImage2.width}
          height={page.profileImage2.height}
        />
        </div>
    </div>

    </Container>
  </Layout>
);
