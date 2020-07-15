import Head from "next/head";
import styles from "./layout.module.css";
// import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Jeremy Arde";
export const siteTitle = "Jeremy Arde";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jeremyarde" />
        <meta name="twitter:creator" content="@jeremyarde" />
        <meta property="og:url" content="https://jeremyrd.dev" />
        <meta property="og:title" content="Jeremy Arde - Ramblings" />
        <meta property="og:image" content="public\images\face.jpg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <h2 className={styles.headingXl}>
          <Link href="/">
            <a className={styles.colorInherit}>{name}</a>
          </Link>{" "}
        </h2>
        <nav>
          <Link href="/posts">
            <a className={styles.nav}>Posts</a>
          </Link>
          {/* <Link href="/tags">
            <a className={styles.nav}>Tags</a>
          </Link> */}
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <div>
        <footer>
          <hr></hr>
          <a
            href="https://twitter.com/jeremyarde"
            target="_blank"
            className="fa fa-twitter"
          ></a>
          |
          <a
            href="https://github.com/jeremyaRD/"
            target="_blank"
            className="fa fa-github"
          ></a>
          |<a href="jere.arde@gmail.com">jere.arde@gmail.com</a>
        </footer>
      </div>
    </div>
  );
}
