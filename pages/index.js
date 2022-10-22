import React, { useState } from 'react';
import Particles from 'react-particles-js';
import MainStripe from "../components/MainStripe";
import BlogCardContainer from '../components/BlogCardContainer';
import Head from 'next/head'
import { motion, AnimatePresence } from "framer-motion"
import IndexBackgorund from '../components/IndexBackgorund';
import IndexBackgroundMobile from '../components/IndexBackgroundMobile';
import IndexBackgroundSocials from '../components/IndexBackgroundSocials';

export default function Home({aboutMe}) {

  return (
      <div>
        <Head>
          <title> Home | Neev Mangal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='overflow-hidden'>
          <div className="fixed w-full h-auto" >
          </div>
            <div className="bg-white h-auto md:h-screen white flex md:flex-row flex-col">
              <IndexBackgorund />
              <IndexBackgroundSocials />              
            </div>
            <div className="indexMobile">
              <IndexBackgroundMobile />
            </div>
        </main>
      </div>
  )
}
