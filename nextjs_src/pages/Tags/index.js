// import Layout from "../../components/layout";
import Layout from "../../components/layout";
// import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
// import utilStyles from "../../styles/utils.module.css";
import utilStyles from "../../styles/utils.module.css";
import { getTagData } from "../../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allTagsData = getTagData();
  return {
    props: {
      allTagsData,
    },
  };
}

export default function Posts({ allTagsData }) {
  return (
    <Layout>
      <Head>
        <title>Jeremy Arde - Tags</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Tags</h2>
        <ul className={utilStyles.list}>
          {allTagsData.map(({ id }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/tags/[id]" as={`/tags/${id}`}>
                <a>{id}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
