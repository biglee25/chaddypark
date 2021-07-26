
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

export default function Contacts({ contacts }) {
  return (
    <Layout>
      <Container>
        <h1 className="text-center bg-black text-white p-5 mb-5">CHADDERTON SPORTS CLUB COMMITTEE</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-12 m-auto">
          {contacts.map((contact) => (
            <div className="h-24">
                <Image
                  src={contact.profileImage.url}
                  width={contact.profileImage.width}
                  height={contact.profileImage.height}
                  layout="responsive"
                />
                <h2>{contact.name}</h2>
                <p className="font-semibold pb-5">{contact.title}</p>
                <p className="pb-5">{contact.telephone}</p>
                <div className="flex items-center justify-center">
                  <div dangerouslySetInnerHTML={{ __html: contact.email.html }} />
                </div>
            </div>
      ))}
        </div>
      </Container>
    </Layout>
  )
}
  
 