
import { GraphQLClient } from 'graphql-request';
import Container from '../components/container';

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
        <div className="=">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.content.html }} className="m-auto" />
        </div>

    </Container>
  )
}
  
 