import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Button } from 'semantic-ui-react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adrian Javorski
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
        <h1 className={styles.title}>
          Adrian Javorski
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Software Engineer based in Orange County, California</code>
        </p>
        <div className={styles.grid}>
        <ul>
            <Link href="/about">
              <Button primary>About Me</Button>
            </Link>
            <Link href="/contact">
              <Button primary>Contact Information</Button>
            </Link>
            <Link href="/projects">
              <Button primary>Projects</Button>
            </Link>
            <Link href="/resume">
              <Button primary>Resume</Button>
            </Link>
        </ul>
        </div>
      </main>

      <footer className={styles.footer}>
          ©2020 by Adrian Javorski
      </footer>
    </div>
  )
}
