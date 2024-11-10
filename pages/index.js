// pages/index.js
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Framer Motion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Home Page</h1>
      </main>

      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
}
