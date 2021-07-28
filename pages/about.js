
import { GraphQLClient } from 'graphql-request';
import Container from '../components/container';

import Image from 'next/image'
import Layout from '../components/layout';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { aboutUs } = await graphcms.request(
    `
    query MyQuery {
      aboutUs(where: {slug: "about"}) {
        id
        title
        subtitle
        heroImage {
          url
          width
          height
        }
        content {
          html
        }
        gridone {
          url
          width
          height
        }
        gridtwo {
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
        gridthree {
          url
          width
          height
        }
        gridfour {
          url
          width
          height
        }
        gridfive {
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
      aboutUs
    },
  };
}

export default function About({ aboutUs }) {
  return (
    <Layout>
    <Container>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none">{aboutUs.title}</h1>
          <h2>{aboutUs.subtitle}</h2>
            <Image
              src={aboutUs.heroImage.url}
              width={aboutUs.heroImage.width}
              height={aboutUs.heroImage.height}
              layout="responsive"
            />
    </Container>
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 md:py-12">
        <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: aboutUs.content.html }} className="pb-12 md:pr-12" />
        </div>
        <div className="p-0 md:p-12 my-auto">
          <Image
            src={aboutUs.gridone.url}
            width={aboutUs.gridone.width}
            height={aboutUs.gridone.height}
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
            src={aboutUs.gridtwo.url}
            width={aboutUs.gridtwo.width}
            height={aboutUs.gridtwo.height}
            layout="responsive"
          />
          <p className="text-center p-5 font-semibold bg-black text-white">
            The above picture was a club fun day with Jack Halliwell and his oringinal team meeting up for one final game together.
          </p>
          </div>
          <div className="flex items-center justify-center order-first md:order-last">
            <div dangerouslySetInnerHTML={{ __html: aboutUs.content2.html }} className="pb-12 md:pl-12" />
          </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 md:py-12">
        <div className="flex items-center justify-center">
            <div dangerouslySetInnerHTML={{ __html: aboutUs.content3.html }} className="pb-12 md:pr-12" />
        </div>
        <div className="p-0 md:p-12 my-auto">
          <Image
            src={aboutUs.gridthree.url}
            width={aboutUs.gridthree.width}
            height={aboutUs.gridthree.height}
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
            src={aboutUs.gridfour.url}
            width={aboutUs.gridfour.width}
            height={aboutUs.gridfour.height}
            layout="responsive"
          />
          </div>
          <div className="pt-5">
          <Image
            src={aboutUs.gridfive.url}
            width={aboutUs.gridfive.width}
            height={aboutUs.gridfive.height}
            layout="responsive"
          />
          </div>
          <p className="text-center p-5 font-semibold bg-black text-white">
          Some early success. Look what can be achieved when players and coaches work together.
          </p>
          </div>
          <div className="flex items-center justify-center order-first md:order-last">
            <div dangerouslySetInnerHTML={{ __html: aboutUs.content4.html }} className="pb-12 md:pl-12" />
          </div>
      </div>
    </Container>
    <Container>
      <div className="mx-auto text-center">
        <div dangerouslySetInnerHTML={{ __html: aboutUs.content5.html }} className="pb-12 md:pl-12" />
      </div>
    </Container>
    </Layout>
  )
}
