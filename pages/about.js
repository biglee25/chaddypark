
import { GraphQLClient } from 'graphql-request';
import Container from '../components/container';

import Image from 'next/image'

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { page } = await graphcms.request(
    `
    query MyQuery {
      page(where: {slug: "about"}) {
        id
        title
        subtitle
        content {
          html
        }
        heroImage {
          height
          url
          width
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

export default function About({ page }) {
  return (
    <Container>
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">{page.title}</h1>
          <h2 className="text-center md:text-left">{page.subtitle}</h2>
          <Image
            src={page.heroImage.url}
            width={page.heroImage.width}
            height={page.heroImage.height}
            layout="responsive"
          />
          <div dangerouslySetInnerHTML={{ __html: page.content.html }} className="m-auto mt-12" />
        </div>
    </Container>
  )
}
  
 