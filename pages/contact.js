
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/layout';
import Container from '../components/container';

import Image from 'next/image'

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { contacts } = await graphcms.request(
    `
    query MyQuery {
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

export default function Contacts({ contacts }) {
  return (
    <Layout>
      <Container>
        <h1 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight text-center">Chadderton Sports Club Commitee</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:p-12 m-auto">
          {contacts.map((contact) => (
            <div className="rounded-xl bg-gray-100 shadow-xl pb-5 my-12 px-5">
              <div className="mx-auto relative -inset-y-12">
                <Image
                  src={contact.profileImage.url}
                  width={contact.profileImage.width}
                  height={contact.profileImage.height}
                  className="rounded-full"
                />
              </div>
                <h2 className=" bg-primaryyellow text-black rounded-t-lg shadow-md py-5">{contact.name}</h2>
                <h2 className="font-bold pb-5">{contact.title}</h2>
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
  
 