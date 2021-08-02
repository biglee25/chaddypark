import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Container from '../components/container'

import { GraphQLClient } from 'graphql-request';

import Layout from '../components/layout';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { information } = await graphcms.request(
    `
      query MyQuery {
        information(where: {slug: "info"}) {
          constitution {
            html
          }
          conduct {
            html
          }
          protection {
            html
          }
          equal {
            html
          }
          complaints {
            html
          }
          safety {
            html
          }
          charter {
            html
          }
          gdpr {
            html
          }
          }
        }
      
  
    `
   
  );

  return {
    props: {
      information
    },
  };
}


export default ({ information }) => (
  <Layout>
    <Container>
       <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none">Information</h1>
      <Tabs>
        <TabList className="cursor-pointer text-center overflow-y-scroll my-2 md:my-12">
          <div className="text-black flex flex-wrap mb-2">
            <Tab className="bg-gray-300 py-1 px-2 m-1 rounded-lg active:bg-black">Constitution</Tab>
            <Tab className="bg-gray-300 py-1 px-2 m-1 rounded-lg">Code of Conduct</Tab>
            <Tab className="bg-gray-300 py-1 px-2 m-1 rounded-lg">Child Protection</Tab>
            <Tab className="bg-gray-300 py-1 px-2 m-1 rounded-lg">Equal Opportunities</Tab>
            <Tab className="bg-gray-300 py-1 px-2 m-1 rounded-lg">Complaints Procedure</Tab>
            <Tab className="bg-gray-300 py-1 px-2 m-1 rounded-lg">Goal Post Safety Guidelines</Tab>
            <Tab className="bg-gray-300 py-1 px-2 m-1 rounded-lg">Charter Standard</Tab>
            <Tab className="bg-gray-300 py-1 px-2 m-1 rounded-lg">GDPR</Tab>
          </div>
        </TabList>

        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: information.constitution.html }} className="pb-12 md:pr-12" />
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: information.conduct.html }} className="pb-12 md:pr-12" />
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: information.protection.html }} className="pb-12 md:pr-12" />
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: information.equal.html }} className="pb-12 md:pr-12" />
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: information.complaints.html }} className="pb-12 md:pr-12" />
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: information.safety.html }} className="pb-12 md:pr-12" />
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: information.charter.html }} className="pb-12 md:pr-12" />
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: information.gdpr.html }} className="pb-12 md:pr-12" />
        </TabPanel>
      </Tabs>

    </Container>
    </Layout>

);
