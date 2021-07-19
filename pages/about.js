
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
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">{aboutUs.title}</h1>
          <h2 className="text-center md:text-left">{aboutUs.subtitle}</h2>
          <Image
            src={aboutUs.heroImage.url}
            width={aboutUs.heroImage.width}
            height={aboutUs.heroImage.height}
            layout="responsive"
          />
          <div dangerouslySetInnerHTML={{ __html: aboutUs.content.html }} className="m-auto mt-12" />
        </div>
    </Container>
    </Layout>
  )
}
  
 