import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "JEREMY ARDE";
export const siteTitle = "Some title you got here";

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
        {home ? (
          <>
            {/* <img
              src="/images/face.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            /> */}
            {/* <div> */}
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <Link href="/posts">Posts</Link>
            {/* </div> */}
          </>
        ) : (
          <>
            {/* <Link href="/">
              <a>
                <img
                  src="/images/face.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link> */}
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
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
            class="fa fa-twitter fa-2x"
          ></a>
          |
          <a
            href="https://github.com/jeremyaRD/"
            target="_blank"
            class="fa fa-github fa-2x"
          ></a>
          |<a href="jere.arde@gmail.com">jere.arde@gmail.com</a>
        </footer>
      </div>
    </div>
  );
}
