import '../styles/globals.css'
import Layout from "../components/Layout"
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {

  const [aboutMe, aboutMeToggle] = useState(false);

  return (

        <Layout aboutMe={aboutMe} aboutMeToggle={aboutMeToggle} router={router}> <Component {...pageProps} /> </Layout>
        
  )
}

export default MyApp
