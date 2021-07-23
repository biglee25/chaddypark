import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

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
          <h1 className="text-center bg-black text-white py-5 mb-5 font-thin">The FA Grassroots National Club of the Year 2019</h1>
          <div className="block md:flex">
            <iframe src="https://www.youtube.com/embed/Y0OlBZFxX8s" className="w-full md:w-8/12 rounded-b-lg h-96 mx-auto p-2"></iframe>
            <iframe src="https://www.youtube.com/embed/7UMsvMITjg4" className="w-full md:w-8/12 rounded-b-lg h-96 mx-auto p-2"></iframe>
          </div>
        </Container>
        <Container>
          <div className="grid md:grid-cols-3 gap-4 text-center my-12 uppercase">
            <div className="bg-teams-bg bg-center bg-cover bg-no-repeat rounded-lg">
              <Link href="/teams">
                <a>
                  <Card>
                    <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                      Football Teams
                    </div>
                  </Card>
                </a>
              </Link>
            </div>
              <div className="bg-disablity-bg bg-center bg-cover bg-no-repeat rounded-lg">
              <Link href="/teams">
                <a>
                  <Card>
                  <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                      Pan Disabilty Football
                    </div>
                  </Card>
                </a>
              </Link>
            </div>
            <div className="bg-adultfun-bg bg-center bg-cover bg-no-repeat rounded-lg">
              <Link href="/teams">
                <a>
                  <Card>
                    <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                      Adult Fun
                    </div>
                  </Card>
                </a>
              </Link>
            </div>
            <div className="bg-steppers-bg bg-center bg-cover bg-no-repeat rounded-lg">
              <Link href="/teams">
                <a>
                  <Card>
                    <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                      Steppers / Walkers Group
                    </div>
                  </Card>
                </a>
              </Link>
            </div>
            <div className="bg-community-bg bg-center bg-cover bg-no-repeat rounded-lg">
              <Link href="/teams">
                <a>
                  <Card>
                    <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                      Community Engagement
                    </div>
                  </Card>
                </a>
              </Link>
            </div>
            <div className="bg-voluntaryjobs-bg bg-center bg-cover bg-no-repeat rounded-lg">
              <Link href="/teams">
                <a>
                  <Card>
                    <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                      Volutary Jobs Available
                    </div>
                  </Card>
                </a>
              </Link>
            </div>
          </div>
          <h1 className="text-center bg-black text-white p-5 mb-5 rounded-t-lg font-thin">Latest News</h1>

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
