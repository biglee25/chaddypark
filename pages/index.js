import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'

import Card from '../components/card'


export default function Index({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      <Hero/>
      <Layout preview={preview}>
        <Head>
          <title>Chadderton Park Sports Club</title>
        </Head>
        <Container>
          <h1 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight text-center">The FA Grassroots National Club of the Year 2019</h1>
          <div className="block md:flex">
            <iframe src="https://www.youtube.com/embed/Y0OlBZFxX8s" className="w-full md:w-8/12 rounded-b-lg h-96 mx-auto p-2" loading="lazy" />
            <iframe src="https://www.youtube.com/embed/7UMsvMITjg4" className="w-full md:w-8/12 rounded-b-lg h-96 mx-auto p-2" loading="lazy" />
          </div>
        </Container>
        <Container>
          <Card />
        </Container>
        <Container>
          <h1 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight text-center">Latest News</h1>

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
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
