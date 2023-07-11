import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Jeral</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <meta name="keywords" content="jeral, pineda, curso, next.js" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>
          Ir a <a href="/about">About</a>
        </h1>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  );
}
