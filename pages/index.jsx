import next from 'next'
import styles from '../styles/Test.module.css'

import Nav from '../components/Nav'
import Banner from '../components/Banner'
export default function Home() {
  return (
    <div >
      <h1 className={styles.c_h1}>Home</h1>
      <Nav />
      <Banner />
    </div>
  )
}
