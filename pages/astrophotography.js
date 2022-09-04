
import React, { useState } from 'react';

import Head from 'next/head'

function astrophotography() {


    return (
        <div>
            <Head>
                <title> Astrophotography | Neev Mangal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="blogBg astrophot-bg">
                <div className='astrophot-txt'> Astrophotography </div>
            </main>

            <footer className="fixed bottom-0 w-screen text-center text-gray-300">
                Programmed by Neev Mangal
            </footer>
        </div>
    )
}

export default astrophotography