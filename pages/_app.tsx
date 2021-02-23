import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>MoveIt</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
