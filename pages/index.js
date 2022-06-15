import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

const s = {
  container: "flex flex-col items-center justify-center h-screen",
  title: "text-4xl font-bold text-center",
  subtitle: "text-xl font-bold text-center",
  button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded flex flex-row items-center", 
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Setsail</title>
        <meta name="description" content="Setsail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.container}>
        <h1 className={s.title}>Setsail Interview Project</h1>
        <p className={s.subtitle}>By Nicolas Partridge</p>
        <Link href="/pricing"><div className={s.button}>Enter <ArrowNarrowRightIcon className='w-6 ml-2'/></div></Link>
      </div>
    </div>
  )
}
