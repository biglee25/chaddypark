import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'

import Card from '../components/card'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


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
          <h1 className="text-center bg-black text-white py-5 mb-5">The FA Grassroots National Club of the Year 2019</h1>
          <div className="block md:flex">
            <iframe src="https://www.youtube.com/embed/Y0OlBZFxX8s" className="w-full md:w-8/12 rounded-b-lg h-96 mx-auto p-2"></iframe>
            <iframe src="https://www.youtube.com/embed/7UMsvMITjg4" className="w-full md:w-8/12 rounded-b-lg h-96 mx-auto p-2"></iframe>
          </div>
        </Container>
        <Container>
          <Card />
        </Container>
        <Container>
          <h1 className="text-center bg-black text-white p-5 mb-5">Latest News</h1>

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
