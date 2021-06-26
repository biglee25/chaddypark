import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckpzqrd16959901w561z47ak4/master'
);

export async function getStaticProps({ params }) {
  const { teams } = await graphcms.request(
    `
    query TeamPageQuery($slug: String!) {
        teams {
          name,
        }
      }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      teams,
      title,
      slug,
    },
  };
}

export async function getStaticPaths() {
  const { teams } = await graphcms.request(`
    {
      teams {
        title,
        slug
      }
    }
  `);

  return {
    paths: teams.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default ({ slug }) => (
  <React.Fragment>
    <h1>{team.title}</h1>
  </React.Fragment>
);

// export async function getStaticPaths() {
//   const posts = await getAllPostsWithSlug()
//   return {
//     paths: posts.map(({ slug }) => ({
//       params: { slug },
//     })),
//     fallback: true,
//   }
// }