import React from 'react';
import Head from 'next/head'
import PlasmidMap from '../components/PlasmidMap';

export default function Home({aboutMe}) {

  return (
      <div>
        <Head>
          <title> Home | Neev Mangal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='overflow-hidden'>
          <PlasmidMap />
        </main>
      </div>
  )
}
