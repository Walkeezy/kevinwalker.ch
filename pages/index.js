import { Head } from './components/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head title="Kevin Walker – Frontend engineer"></Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kevin Walker</h1>
        <p className={styles.description}>
          Frontend engineer, working at{' '}
          <a href="https://smartive.ch" target="_blank" rel="noopener noreferrer">
            smartive.ch
          </a>
        </p>
        <div className={styles.contact}>
          <a href="mailto:mail@kevinwalker.ch" target="_blank" rel="noopener noreferrer">
            mail@kevinwalker.ch
          </a>
          &middot;
          <a
            href="https://www.linkedin.com/in/kevin-walkeezy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  )
}
