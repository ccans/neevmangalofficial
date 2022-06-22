import React, { useState } from 'react';
import Particles from 'react-particles-js';
import MainStripe from "../components/MainStripe";
import BlogCardContainer from '../components/BlogCardContainer';
import Head from 'next/head'
import { motion, AnimatePresence } from "framer-motion"

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
            <div className="bg-design bg-white h-auto md:h-screen white flex md:flex-row flex-col">
              <MainStripe />
              <BlogCardContainer />
            </div>
        </main>
      </div>
  )
}
