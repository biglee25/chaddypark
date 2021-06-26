import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckpzqrd16959901w561z47ak4/master'
);

export async function getStaticProps({ params }) {
  const { pages } = await graphcms.request(
    `
    query ProductPageQuery($slug: String!) {
      pages(where: { slug: $slug }) {
        title
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths(slug) {
  const { pages } = await graphcms.request(`
    {
      pages {
        title
        slug
      }
    }
  `);

  return {
    paths: pages.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default ({ page }) => (
  <React.Fragment>
    <h1>{page.title}</h1>
  </React.Fragment>
);
