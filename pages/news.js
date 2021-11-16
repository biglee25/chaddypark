import Container from '../components/container'
import MoreStories from '../components/more-stories'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'

import Layout from '../components/layout'


export default function Index({ posts, preview }) {
  const morePosts = posts.slice(0)
  return (
    <>
      <Head>
        <title>Chadderton Park FC - Chaddy Park Football Club</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Chadderton Park Football Club, Chadderton, Chaddy Park Oldham, junior soccer chaddy fold, boundary park, clayton playing fields, manchester FA, charter standard club of the year"/>
        <meta name="keywords" content="chadderton, chaddy park football, soccer club, standard charter, charter standard, boundary park, clayton playing fields, oldham athletic, mini soccer, rochdale, league, bury league, junior football"/>
      </Head>
        <Layout>
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || []
  return {
    props: { posts, preview },
  }
}
