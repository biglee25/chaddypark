
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/layout';
import Container from '../components/container';

import Image from 'next/image'

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { contacts } = await graphcms.request(
    `
    query MyQuery {
      contacts {
        profileImage {
          url
          width
          height
        }
        name
        title
        telephone
        email {
          html
        }
      }
    }
    `
  );

  return {
    props: {
      contacts,
    },
  };
}

export default function Teams({ contacts }) {
  return (
    <>
    <Layout>
      <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center mt-24">
          {contacts.map((contact) => (
                <div className="container font-bold bg-gray-100 shadow-lg">
                  <img
                    src={contact.profileImage.url}
                    width="150px"
                    height="150px"
                    className="rounded-full transform -translate-y-6 mx-auto shadow-lg border-4 border-white"
                  />
                    <h2 className="uppercase">{contact.name}</h2>
                    <p className="bg-black text-white mx-12 p-2">{contact.title}</p>
                    <h2>{contact.telephone}</h2>
                  <div dangerouslySetInnerHTML={{ __html: contact.email.html }} className="m-auto py-4 bg-gray-900 text-white rounded-b-lg" />
              </div>
          ))}
        </div>
      </Container>
    </Layout>
    </>
  )
}
  
 