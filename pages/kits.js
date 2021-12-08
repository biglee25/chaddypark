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
        page(where: {slug: "kits"}) {
          title
          subtitle
          image1 {
            url
            width
            height
          }
          content1 {
            html
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
          content4 {
            html
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
    <title>Chadderton Park FC Cerebral Palsy Football - Chaddy Park - Chaddy Fold</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content="Chadderton Park Football Club, Chadderton, Chaddy Park Oldham, junior soccer chaddy fold, boundary park, clayton playing fields, manchester FA, charter standard club of the year"/>
    <meta name="keywords" content="chadderton, chaddy park football, soccer club, standard charter, charter standard, boundary park, clayton playing fields, oldham athletic, mini soccer, rochdale, league, bury league, junior football"/>
    <meta name="keywords" content="Cerebral Palsy Football, disablity"/>
  </Head>
  <Layout>
    <Container>
      <div className="text-center">
        <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-none text-center">{page.title}</h1>
        <h2>{page.subtitle}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 text-center">
        <Image
            src={page.image1.url}
            width={page.image1.width}
            height={page.image1.height}
            layout="responsive"
        />
        <div className="bg-gray-100 rounded-lg p-5 text-center my-auto">
            <div dangerouslySetInnerHTML={{ __html: page.content1.html }} />
        </div>
        <div className="bg-gray-100 rounded-lg p-5 text-center my-auto">
            <div dangerouslySetInnerHTML={{ __html: page.content2.html }} className="m-auto py-12" />
        </div>
        <Image
            src={page.image2.url}
            width={page.image2.width}
            height={page.image2.height}
            layout="responsive"
        />
      </div>
      <div className="bg-gray-200 rounded-lg p-5 text-center">
            <div dangerouslySetInnerHTML={{ __html: page.content3.html }} className="m-auto py-12" />
        </div>
      <div className="bg-gray-200 rounded-lg p-5 text-center">
            <div dangerouslySetInnerHTML={{ __html: page.content4.html }} className="m-auto py-12 adjust" />
        </div>
        <div className="bg-gray-100 rounded-lg p-5 text-center">
            <div dangerouslySetInnerHTML={{ __html: page.content5.html }} className="m-auto py-12" />
        </div>        
    </Container>
  </Layout>
  </>
);
