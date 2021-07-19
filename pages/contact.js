
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/layout';
import Container from '../components/container';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { contacts } = await graphcms.request(
    `
    { 
      contacts {
        title
      }
    }
  `  );

  return {
    props: {
      contacts,
    },
  };
}

export default function Contacts({ contacts }) {
  return (
    <Layout>
      <Container>
        <div className="w-full md:w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-12 m-auto">
          {contacts.map((contact) => (
              <div className="bg-primaryyellow p-5 h-32 flex flex-col justify-center">
                    {contact.title}
              </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
  
 