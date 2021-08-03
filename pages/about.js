
import { GraphQLClient } from 'graphql-request';
import Container from '../components/container';

import Image from 'next/image'
import Layout from '../components/layout';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { page } = await graphcms.request(
    `
    query MyQuery {
      page(where: {slug: "about"}) {
        id
        title
        subtitle
        heroImage {
          url
          width
          height
        }
        content1 {
          html
        }
        image1 {
          url
          width
          height
        }
        image2 {
          url
          width
          height
        }
        content2 {
          html
        }
        content3 {
          html
        }
        image3 {
          url
          width
          height
        }
        image4 {
          url
          width
          height
        }
        image5 {
          url
          width
          height
        }
        content4 {
          html
        }
        content5 {
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
    <Layout>
    <Container>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none">{page.title}</h1>
        <h2>{page.subtitle}</h2>
          <Image
            src={page.heroImage.url}
            width={page.heroImage.width}
            height={page.heroImage.height}
            layout="responsive"
          />
    </Container>
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 md:py-12">
        <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: page.content1.html }} className="pb-12 md:pr-12" />
        </div>
        <div className="p-0 md:p-12 my-auto">
          <Image
            src={page.image1.url}
            width={page.image1.width}
            height={page.image1.height}
            layout="responsive"
          />
          <p className="text-center p-5 font-semibold bg-black text-white">
            Top Left: Jonathan Broughton, Andy Weaver, Billy Clynes, Darren Sutcliffe, David McCann, Jason Bowes
            Front Left: Not Sure, David O’Neill, Ross Wild, Phil Wakeman, Martin Taylor.
          </p>
        </div> 
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 md:py-12 order-last md:order-first">
        <div className="p-0 md:p-12 my-auto">
          <Image
            src={page.image2.url}
            width={page.image2.width}
            height={page.image2.height}
            layout="responsive"
          />
          <p className="text-center p-5 font-semibold bg-black text-white">
            The above picture was a club fun day with Jack Halliwell and his oringinal team meeting up for one final game together.
          </p>
          </div>
          <div className="flex items-center justify-center order-first md:order-last">
            <div dangerouslySetInnerHTML={{ __html: page.content2.html }} className="pb-12 md:pl-12" />
          </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 md:py-12">
        <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: page.content3.html }} className="pb-12 md:pr-12" />
        </div>
        <div className="p-0 md:p-12 my-auto">
          <Image
            src={page.image3.url}
            width={page.image3.width}
            height={page.image3.height}
            layout="responsive"
          />
          <p className="text-center p-5 font-semibold bg-black text-white">
          Andrew Pietkiewicz, Paul Birley, Barry Dickson, Jonathan Haughton, Ken Massey, Leon Schofield, Scott Mckenna stood up
          Stephen Massey and John Mather on the ground
          </p>
        </div> 
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 md:py-12 order-last md:order-first">
        <div className="p-0 md:p-12 my-auto">
          <div className="pb-5">
            <Image
              src={page.image4.url}
              width={page.image4.width}
              height={page.image4.height}
              layout="responsive"
            />
          </div>
          <div className="pt-5">
            <Image
              src={page.image5.url}
              width={page.image5.width}
              height={page.image5.height}
              layout="responsive"
            />
          </div>
          <p className="text-center p-5 font-semibold bg-black text-white">
          Some early success. Look what can be achieved when players and coaches work together.
          </p>
          </div>
          <div className="flex items-center justify-center order-first md:order-last">
            <div dangerouslySetInnerHTML={{ __html: page.content4.html }} className="pb-12 md:pl-12" />
          </div>
      </div>
    </Container>
    <Container>
      <div className="mx-auto text-center bg-gray-700 text-white pt-12 px-5 md:px-12">
        <div className="bg-white text-gray-700">
          <h1 className="px-2 py-12">Our Past Achievments</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: page.content5.html }} className="py-12 md:px-5 md:pl-12" />
      </div>
    </Container>
    </Layout>
  )
}
