import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "./index.module.css";
import Link from "next/link";
import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={styles.headingMd}>
       */}
      <section>
        <p>
          Hello, I am a technologist focused on creating simple solutions to
          everyday problems.
        </p>
        <p>My current areas of interest include natural
          language processing (NLP),{" "}
          low resource machine leaning
          and the{" "}
          <a href="https://www.rust-lang.org/" target="_blank">
            Rust programming language
          </a>
          .
        </p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Recent Posts</h2>
        <ul className={styles.list}>
          {allPostsData.slice(0, 5).map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
