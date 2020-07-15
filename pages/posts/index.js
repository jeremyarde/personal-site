import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import styles from "./index.module.css";

import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";

const pageTitle = "Posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>
          {siteTitle} {" - Posts "}
        </title>
      </Head>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingXLg}>{pageTitle}</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
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
