import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Head from 'next/head'
import { motion, AnimatePresence } from "framer-motion"

export default function Home({aboutMe}) {


  return (
      <div>
        <Head>
          <title> Projects | Neev Mangal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        
        <main>
          <div className="fixed w-full h-auto" >
          </div>
            <div className="flex flex-row justify-center px-30 bg-white" style={{paddingTop: "68px"}}> 
                <ProjectCard address="blog/ai-camp" backgroundCol="#Ab2330" title="Artificial Intelligence" img="https://img.icons8.com/external-itim2101-fill-itim2101/128/undefined/external-ai-computer-and-laptop-itim2101-fill-itim2101.png" />
            </div>
        </main>
      </div>
  )
}
