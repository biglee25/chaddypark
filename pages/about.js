
import { GraphQLClient } from 'graphql-request';
import Container from '../components/container';

import Image from 'next/image'
import Layout from '../components/layout';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { aboutUs } = await graphcms.request(
    `
    query MyQuery {
      aboutUs(where: {slug: "about"}) {
        id
        title
        subtitle
        heroImage {
          url
          width
          height
        }
        content {
          html
        }
        gridone {
          url
          width
          height
        }
        gridtwo {
          url
          width
          height
        }
        extraContent {
          html
        }
      }
    }
    
        
    
    `
  );

  return {
    props: {
      aboutUs
    },
  };
}

export default function About({ aboutUs }) {
  return (
    <Layout>
    <Container>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none">{aboutUs.title}</h1>
          <h2>{aboutUs.subtitle}</h2>
            <Image
              src={aboutUs.heroImage.url}
              width={aboutUs.heroImage.width}
              height={aboutUs.heroImage.height}
              layout="responsive"
            />
    </Container>
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 md:py-12">
      <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: aboutUs.content.html }} className="pb-12 md:pr-12" />
          </div>
          <Image
            src={aboutUs.gridone.url}
            width={aboutUs.gridone.width}
            height={aboutUs.gridone.height}
            layout="responsive"
          />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 md:py-12">
      <Image
            src={aboutUs.gridtwo.url}
            width={aboutUs.gridtwo.width}
            height={aboutUs.gridtwo.height}
            layout="responsive"
          />
          <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: aboutUs.extraContent.html }} className="pb-12 md:pl-12" />
          </div>
      </div>
    </Container>
    </Layout>
  )
}
