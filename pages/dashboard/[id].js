/**
 * Next.JS imports
 */
import Head from 'next/head'
import { useRouter } from 'next/router'

/**
 * JS and CSS imports
 */
import styles from '../../styles/Dashboard.module.css'

/**
 * Component imports
 */
import { Container } from 'react-bootstrap'
import NavBar from '../../components/NavBar.js'
import SideBar from '../../components/SideBar.js'

export default function Home() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar brand="ZeroCords"></NavBar>

            <main className={styles.main}>
                <SideBar activekey="/dashboard"></SideBar>
                <main className={styles.submain}>

                    <h1>
                        Helloooo there!
                        You tried to goto the {id} route!
                    </h1>
                </main>
            </main>
        </div>
    )
}
