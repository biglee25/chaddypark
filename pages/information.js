import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Container from '../components/container'

import { GraphQLClient } from 'graphql-request';

import Layout from '../components/layout';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { aboutUs } = await graphcms.request(
    `
    query MyQuery {
      aboutUs(where: {slug: "constitution"}) {
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
      aboutUs
    },
  };
}


export default ({aboutUs}) => (
  <Layout>
    <Container>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none">Information</h1>

      <Tabs className="mt-5 md:mt-12">
        <TabList className="cursor-pointer text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mx-auto">
            <Tab className="px-5 py-2 bg-black w-full flex items-center justify-center">Constitution</Tab>
            <Tab className="px-5 py-2 bg-black w-full flex items-center justify-center">Code of Conduct</Tab>
            <Tab className="px-5 py-2 bg-black w-full flex items-center justify-center">Child Protection</Tab>
            <Tab className="px-5 py-2 bg-black w-full flex items-center justify-center">Equal Opportunities</Tab>
            <Tab className="px-5 py-2 bg-black w-full flex items-center justify-center">Complaints Procedure</Tab>
            <Tab className="px-5 py-2 bg-black w-full flex items-center justify-center">Goal Post Safety Guidelines</Tab>
            <Tab className="px-5 py-2 bg-black w-full flex items-center justify-center">Charter Standard</Tab>
            <Tab className="px-5 py-2 bg-black w-full flex items-center justify-center">GDPR</Tab>
          </div>
        </TabList>

        <TabPanel>
          <h2>{aboutUs.title}</h2>
          <h2>{aboutUs.subtitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: aboutUs.content.html }} className="pb-12 md:pr-12" />

        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 7</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 8</h2>
        </TabPanel>
      </Tabs>

    </Container>
    </Layout>

);
