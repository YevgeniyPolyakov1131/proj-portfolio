import Head from 'next/head'
import Portfolio from '../components/portfolio'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mon portfolio</title>
        <meta name="description" content="Voici vous pouvez trouver mes projets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>		
		    <Portfolio></Portfolio>        
      </main>	  
    </div>

  )
}
