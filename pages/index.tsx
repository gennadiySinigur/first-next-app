import type { NextPage } from 'next';
import Head from 'next/head';

import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  };
};

const Home = ({allPostsData }: {
  allPostsData: {
    date: string,
    title: string,
    id: string
  }[]
} ) => {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <p>
            Hello, I'm Gennadiy. I'm a Frontend Developer. Now I'm working with
            React.js, Next.js and TypeScript.
          </p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
            ))}
          </ul>
        </section>
      </Layout>
  )
}

export default Home;
