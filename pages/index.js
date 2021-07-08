import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import Link from 'next/link'

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
          <div className="grid md:grid-cols-3 gap-12 text-center my-12 uppercase">
            <Link href="/teams">
              <a>
                <Card className="bg-hero-bg bg-cover bg-no-repeat bg-center w-full">Football Teams</Card>
              </a>
            </Link>
            <Link href="/teams">
              <a>
                <Card>Pan Disablility Football</Card>
              </a>
            </Link>
            <Link href="/teams">
              <a>
                <Card>Adult Fun Football</Card>
              </a>
            </Link>
            <Link href="/teams">
              <a>
                <Card>Steppers / walking group</Card>
              </a>
            </Link>
            <Link href="/teams">
              <a>
                <Card>Community Engagement</Card>
              </a>
            </Link>
            <Link href="/teams">
              <a>
                <Card>Voluntary Jobs Available</Card>
              </a>
            </Link>
          </div>
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
