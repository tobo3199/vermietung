import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/navbar'
import Startseite from '../components/startseite'
import Karten from '../components/cards'
import Startseite2 from '../components/startseite2'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Startseite></Startseite>


    </Layout>
  )
}