export default function About() {
  return(
    <h1>about page</h1>
  )
}
// import Link from 'next/link';
// import { GraphQLClient } from 'graphql-request';

// export async function getStaticProps() {
//   const graphcms = new GraphQLClient(
//     'https://api-eu-central-1.graphcms.com/v2/ckpzqrd16959901w561z47ak4/master'
//   );

//   const { pages } = await graphcms.request(
//     `
//       { 
//         pages {
//           title
//           subtitle
//         }
//       }
//     `
//   );

//   return {
//     props: {
//       pages,
//     },
//   };
// }

// export default ({ pages }) =>
//   pages.map(({ slug, title, subtitle }) => (
//     <>
//       <p>{title}</p>
//       <p>{subtitle}</p>
//       </>
//   ));