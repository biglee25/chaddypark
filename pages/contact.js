
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
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 text-center my-12 uppercase">
          {contacts.map((contact) => (
                <div className="w-full font-bold bg-gray-300">
                <Image
                  src={contact.profileImage.url}
                  width="250px"
                  height="250px"
                  className="rounded-full"
                />
                <h2>{contact.name}</h2>
                <p>{contact.title}</p>
                <h2>{contact.telephone}</h2>
                  <div dangerouslySetInnerHTML={{ __html: contact.email.html }} className="m-auto py-12 text-black" />
              </div>
          ))}
        </div>
      </Container>
    </Layout>
    </>
  )
}
  
 