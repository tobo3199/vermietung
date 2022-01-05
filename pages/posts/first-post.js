import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Karten from '../../components/cards'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Karten></Karten>


        </Layout>
    )
}