import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </>
  )
}
