import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'


import Image from 'next/image'

import Card from '../components/card'


export default function Index({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(0)
  return (
    <>
      <Head>
        <title>Chadderton Park FC - Chaddy Park Football Club</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Chadderton Park Football Club, Chadderton, Chaddy Park Oldham, junior soccer chaddy fold, boundary park, clayton playing fields, manchester FA, charter standard club of the year"/>
        <meta name="keywords" content="chadderton, chaddy park football, soccer club, standard charter, charter standard, boundary park, clayton playing fields, oldham athletic, mini soccer, rochdale, league, bury league, junior football"/>
      </Head>
      <Hero/>
      <Layout preview={preview}>
        <Container>
          <div className="text-center my-12">
            <Image
              src="/images/fa-logo.svg"
              alt="FA Grassroots"
              width={100}
              height={100}
            />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none text-center">The FA Grassroots National Club of the Year 2019</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <h2 className="bg-gray-200 px-4">Chadderton Park doesn’t just pride themselves on inclusivity; it defines the club’s entire ethos.</h2>
              <p className="p-4">We hold no trials, welcome players who have been told they aren’t good enough elsewhere and believe fun must come before the desire to win. That explains why we have now grown to over 90 different teams, covering children, seniors, disability squads and cerebral palsy initiatives.</p>
            </div>
            <div>
              <h2 className="bg-gray-200 px-4">A community focused club, helping local charities across the borough.</h2>
              <p className="p-4">A football club is more than the name suggests - it can be the heart of a community. Through charity drives, links to local schools and an inherently positive playing environment, Chadderton Park can be truly proud of making a difference.</p>
            </div>
          </div>
        </Container>
        <Container>
          <div className="text-center flex flex-col items-center bg-gray-200 p-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none text-center">Existing Member?</h1>
          <p className="p-4">Please login in to your account by clicking the button below</p>
            <a href="https://app.loveadmin.com/ThirdpartyRegistration.aspx?clubID=be660d4259db9b3bfa51c2459dd109a8" target="_blank">
                <button className="bg-black text-white hover:bg-white hover:text-black shadow-lg w-full md:w-56 p-5 my-8">Click Here to Login</button>
            </a>
          </div>
        </Container>
        <Container>
          <Card />
        </Container>
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
