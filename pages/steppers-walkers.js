import { GraphQLClient } from 'graphql-request';
import Container from '../components/container';

import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { page } = await graphcms.request(
    `
    query MyQuery {
      page(where: {slug: "steppers"}) {
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
        image1 {
          url
          width
          height
        }
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
        image3 {
          url
          width
          height
        }
        image4 {
          url
          width
          height
        }
        image5 {
          url
          width
          height
        }
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
  <>
  <Head>
  <title>Chadderton Park FC Steppers Promoting Mental Health Awareness</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content="Chadderton Park Football Club, Chadderton, Chaddy Park Oldham, junior soccer chaddy fold, boundary park, clayton playing fields, manchester FA, charter standard club of the year"/>
    <meta name="keywords" content="chadderton, chaddy park football, soccer club, standard charter, charter standard, boundary park, clayton playing fields, oldham athletic, mini soccer, rochdale, league, bury league, junior football"/>
    <meta name="keywords" content="Mental Health Awareness, steppers, walking, walkers"/>
  </Head>
  <Layout>
    <Container>
      <div className="text-center">
        <div className="bg-gray-800 text-white flex flex-col items-center justify-center my-12 py-5">
          <h1>{page.title}</h1>
          <h2>{page.subtitle}</h2>
        </div>
        <Image
            src={page.heroImage.url}
            width={page.heroImage.width}
            height={page.heroImage.height}
            layout="responsive"
          />
          <h1 className="text-black">{page.title1}</h1>
        <div className="bg-primaryyellow my-12 rounded-lg p-5">
            <div dangerouslySetInnerHTML={{ __html: page.content1.html }} className="m-auto py-12" />
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
          <div>
            <Image
                src={page.image1.url}
                width={page.image1.width}
                height={page.image1.height}
                layout="responsive"
            />
          </div>
          <div>
            <Image
                src={page.image2.url}
                width={page.image2.width}
                height={page.image2.height}
                layout="responsive"
            />
          </div>
        <Image
            src={page.image3.url}
            width={page.image3.width}
            height={page.image3.height}
            layout="responsive"
        />
        <Image
            src={page.image4.url}
            width={page.image4.width}
            height={page.image4.height}
            layout="responsive"
        />
        <Image
            src={page.image5.url}
            width={page.image5.width}
            height={page.image5.height}
            layout="responsive"
        />
        <Image
            src={page.image6.url}
            width={page.image6.width}
            height={page.image6.height}
            layout="responsive"
        />
      </div>
      <h1 className="text-center pb-5 md:pb-12">Contacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center bg-gray-100 p-5 rounded-lg">
        <div className="flex items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: page.profile1.html }} className="m-auto py-12 text-black" />
        </div>
        <div className="my-auto">
        <Image
            src={page.profileImage1.url}
            width={page.profileImage1.width}
            height={page.profileImage1.height}
          />
        </div>
        <div className="flex items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: page.profile2.html }} className="m-auto py-12 text-black" />
        </div>
        <div className="my-auto">
        <Image
            src={page.profileImage2.url}
            width={page.profileImage2.width}
            height={page.profileImage2.height}
          />
        </div>
        <div className="flex items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: page.profile3.html }} className="m-auto py-12 text-black" />
        </div>
        <div className="my-auto">
        <Image
            src={page.profileImage3.url}
            width={page.profileImage3.width}
            height={page.profileImage3.height}
          />
        </div>
    </div>

    </Container>
  </Layout>
  </>
);
