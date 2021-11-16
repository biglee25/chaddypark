
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/layout';
import Container from '../components/container';

import Image from 'next/image'

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { contacts } = await graphcms.request(
    `
    query MyQuery  {
      contacts (orderBy: order_ASC) {
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
      <h1 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight text-center">Commitee Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center mt-24">
          {contacts.map((contact) => (
                <div className="container font-bold bg-white shadow-lg h-96 border-b-4 border-primarygreen">
                  <img
                    src={contact.profileImage.url}
                    width="150px"
                    height="150px"
                    className="rounded-full transform -translate-y-6 mx-auto shadow-lg border-4 border-white"
                  />
                    <h2 className="uppercase font-extrabold">{contact.name}</h2>
                    <p className="font-normal">{contact.title}</p>
                    <h2 className="text-base font-extrabold">{contact.telephone}</h2>
                  <div dangerouslySetInnerHTML={{ __html: contact.email.html }} className="m-auto font-normal" />
              </div>
          ))}
        </div>
      </Container>
    </Layout>
    </>
  )
}
  
 