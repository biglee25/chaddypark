import { GraphQLClient } from 'graphql-request';
import Container from '../components/container';

import Layout from '../components/layout';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { member } = await graphcms.request(
    `
    query MyQuery {
      member(where: {slug: "member"}) {
        title
        content {
         html
       }
        content2 {
         html
       }
        content3 {
         html
       }
      }
    }

      
    
        
    
    `
  );

  return {
    props: {
      member
    },
  };
}


export default ({ member }) => (
  <>
  <Layout>
    <Container>
        <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-none text-center pb-5">{member.title}</h1>
        <div className="bg-white">
        <div className="flex flex-col justify-center mx-auto text-center">
          <div dangerouslySetInnerHTML={{ __html: member.content?.html }} className="m-auto p-5 md:p-12 bg-white" />
        </div>
        <div className="flex flex-col justify-center mx-auto text-center">
          <div dangerouslySetInnerHTML={{ __html: member.content2?.html }} className="m-auto p-5 md:p-12 bg-white" />
        </div>
        <div className="flex flex-col justify-center mx-auto text-center">
          <div dangerouslySetInnerHTML={{ __html: member.content3?.html }} className="m-auto p-5 md:p-12 bg-white" />
        </div>
      </div>
    </Container>
  </Layout>
  </>
);
