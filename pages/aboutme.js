import React from 'react';

import Head from 'next/head'
import BlogStripe from '../components/BlogStripe';
import DnaHelix from '../components/DnaHelix';

function aboutme() {


    return (
        <div>
            <Head>
                <title>About Me | Neev Mangal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="aboutme-page">
                <div className="aboutme-helix">
                    <DnaHelix />
                </div>
                <div className="aboutme-content">
                    <BlogStripe />
                </div>
            </main>

            <footer className="fixed bottom-0 w-screen text-center text-gray-500 none md:block">
                Programmed by Neev Mangal
            </footer>
        </div>
    )
}

export default aboutme
