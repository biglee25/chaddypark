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
      page(where: {slug: "about"}) {
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
        content2 {
          html
        }
        image2 {
          url
          width
          height
        }
        content3 {
          html
        }
        image3 {
          url
          width
          height
        }
        content4 {
          html
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
        content5 {
          html
        }
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
      <div>
        <div className="mb-8 text-6xl md:text-6xl font-bold text-center">
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
          <div className="rounded-lg p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            <div dangerouslySetInnerHTML={{ __html: page.content1.html }} className="p-12 bg-gray-200" />
            <div className="flex flex-col justify-center">
            <Image
              src={page.image1.url}
              width={page.image1.width}
              height={page.image1.height}
              layout="responsive"
            />

            </div>
          </div>
          <div className="rounded-lg p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            <div className="flex flex-col justify-center">
              <Image
                src={page.image2.url}
                width={page.image2.width}
                height={page.image2.height}
                layout="responsive"
              />
            </div>
          <div dangerouslySetInnerHTML={{ __html: page.content2.html }} className="p-12 flex flex-col justify-center bg-gray-200" />
          </div>
          <div className="rounded-lg p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            <div dangerouslySetInnerHTML={{ __html: page.content3.html }} className="p-12 flex flex-col justify-center bg-gray-200" />
              <div className="flex flex-col justify-center">
                <Image
                  src={page.image3.url}
                  width={page.image3.width}
                  height={page.image3.height}
                  layout="responsive"
                />
              </div>
          </div>
          <div className="rounded-lg p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center py-4">
                <Image
                  src={page.image4.url}
                  width={page.image4.width}
                  height={page.image4.height}
                  layout="responsive"
                />
              </div>
              <div className="flex flex-col justify-center py-4">
                <Image
                  src={page.image5.url}
                  width={page.image5.width}
                  height={page.image5.height}
                  layout="responsive"
                />
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: page.content4.html }} className="p-12 flex flex-col justify-center bg-gray-200" />
          </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: page.content5.html }} className="m-auto w-3/4 bg-gray-700 text-white p-12 flex flex-col items-center" />
    </Container>
  </Layout>
  </>
);
