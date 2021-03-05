import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head';
import Layout from '../../components/layout'

const Profile = () => (
  <Image 
    src = '/images/profile.jpg'
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

export default function FirstPost() {
    return(
      <>
        <Layout>

        <title>Create Next App</title>

        <h1 className={styles.title}>First Post</h1>
        <h2 className={styles.title}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <Profile />
        </Layout>
      </>  
    ); 
  }
  