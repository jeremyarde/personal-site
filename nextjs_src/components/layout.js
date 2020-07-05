import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Jeremy";
export const siteTitle = "Next.js Sample Website";

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
        <title>This is my title</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {/* <img
              src="/images/face.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            /> */}
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
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
          <hr></hr>Jeremy footer
        </footer>
      </div>
    </div>
  );
}
