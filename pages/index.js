/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Feedback from "./Feedback";

export default function Home() {
  return (
    <>
      <Head>

      {/* Font styles */}
      
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <Feedback />
    </>
  )
}
