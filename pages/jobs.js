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
      page(where: {slug: "jobs"}) {
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
      </div>

    </Container>
  </Layout>
  </>
);