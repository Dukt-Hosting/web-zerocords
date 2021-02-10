import Head from 'next/head'
import styles from '../../styles/Dashboard.module.css'
import NavBar from '../../components/NavBar.js'
import SideBar from '../../components/SideBar.js'
import { Container } from 'react-bootstrap'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [ session, loading ] = useSession()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {!session && <meta httpEquiv="refresh" content="0;url=/api/auth/signin/discord" />}
      </Head>

      <NavBar brand="ZeroCords"></NavBar>

      <main className={styles.main}>
        <SideBar activekey="/dashboard"></SideBar>
        <main className={styles.submain}>

          <h1>
            Helloooo there! {' '}<br/>
            {session}
          </h1>
        </main>
      </main>
    </div>
  )
}
