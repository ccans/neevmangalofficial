import React, { useState } from 'react';

import Head from 'next/head'
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Coverpage from '../components/Coverpage';


function blog() {


    return (
        <div>
            <Head>
                <title>Blog | Neev Mangal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

            </main>

            <footer className="fixed bottom-0 w-screen text-center text-gray-300">
                Programmed by Neev Mangal
            </footer>
        </div>
    )
}

export default blog
