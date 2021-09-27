import { GraphQLClient } from 'graphql-request';
import Container from '../components/container';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from '../components/layout';

export async function getStaticProps() {
  const graphcms = new GraphQLClient((process.env.GRAPHCMS_PROJECT_API))
  
  const { information } = await graphcms.request(
    `
    query MyQuery {
      information(where: {slug: "info"}) {
        id
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
  <>
  <Layout>
    <Container>
    <Tabs>
    <TabList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 text-white text-center justify-center text-xs cursor-pointer">
      <Tab className="m-2 p-2 bg-gray-700 hover:bg-black rounded-lg flex flex-col justify-center">Constitution</Tab>
      <Tab className="m-2 p-2 bg-gray-700 hover:bg-black rounded-lg flex flex-col justify-center">Code of Conduct</Tab>
      <Tab className="m-2 p-2 bg-gray-700 hover:bg-black rounded-lg flex flex-col justify-center">Child Protection</Tab>
      <Tab className="m-2 p-2 bg-gray-700 hover:bg-black rounded-lg flex flex-col justify-center">Equal Opportunities</Tab>
      <Tab className="m-2 p-2 bg-gray-700 hover:bg-black rounded-lg flex flex-col justify-center">Complaints Procedure</Tab>
      <Tab className="m-2 p-2 bg-gray-700 hover:bg-black rounded-lg flex flex-col justify-center">Goalpost Safety</Tab>
      <Tab className="m-2 p-2 bg-gray-700 hover:bg-black rounded-lg flex flex-col justify-center">Charter Standard</Tab>
      <Tab className="m-2 p-2 bg-gray-700 hover:bg-black rounded-lg flex flex-col justify-center">GDPR</Tab>
    </TabList>

    <TabPanel>
      <div className="my-6 rounded-lg md:p-5">
        <div dangerouslySetInnerHTML={{ __html: information.constitution.html }} className="m-auto p-5 md:p-12 bg-white" />
      </div>
    </TabPanel>
    <TabPanel>
      <div className="my-6 rounded-lg md:p-5">
        <div dangerouslySetInnerHTML={{ __html: information.conduct.html }} className="m-auto p-5 md:p-12 bg-white" />
      </div>
    </TabPanel>
    <TabPanel>
      <div className="my-6 rounded-lg md:p-5">
        <div dangerouslySetInnerHTML={{ __html: information.protection.html }} className="m-auto p-5 md:p-12 bg-white" />
      </div>
    </TabPanel>
    <TabPanel>
      <div className="my-6 rounded-lg md:p-5">
        <div dangerouslySetInnerHTML={{ __html: information.equal.html }} className="m-auto p-5 md:p-12 bg-white" />
      </div>
    </TabPanel>
    <TabPanel>
      <div className="my-6 rounded-lg md:p-5">
        <div dangerouslySetInnerHTML={{ __html: information.complaints.html }} className="m-auto p-5 md:p-12 bg-white" />
      </div>
    </TabPanel>
    <TabPanel>
      <div className="my-6 rounded-lg md:p-5">
        <div dangerouslySetInnerHTML={{ __html: information.safety.html }} className="m-auto p-5 md:p-12 bg-white" />
      </div>
    </TabPanel>
    <TabPanel>
      <div className="my-6 rounded-lg md:p-5">
        <div dangerouslySetInnerHTML={{ __html: information.charter.html }} className="m-auto p-5 md:p-12 bg-white" />
      </div>
    </TabPanel>
    <TabPanel>
      <div className="my-6 rounded-lg md:p-5">
        <div dangerouslySetInnerHTML={{ __html: information.gdpr.html }} className="m-auto p-5 md:p-12 bg-white" />
      </div>
    </TabPanel>
  </Tabs>
    </Container>
  </Layout>
  </>
);
