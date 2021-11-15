import React, { useState } from 'react';

import Head from 'next/head'
import Wave from '../components/Wave';
import BlogStripe from '../components/BlogStripe';
import BlogBox from '../components/BlogBox';

function blog() {


    return (
        <div>
            <Head>
                <title>About Me | Neev Mangal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="blogBg">
                <BlogStripe />
                <Wave />
                <BlogBox />
            </main>

            <footer className="fixed bottom-0 w-screen text-center text-gray-300">
                Programmed by Neev Mangal
            </footer>
        </div>
    )
}

export default blog
