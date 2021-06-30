import '../styles/globals.css'
import Layout from "../components/Layout"
import React, { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [aboutMe, aboutMeToggle] = useState(false);

  return (
    <Layout aboutMe={aboutMe} aboutMeToggle={aboutMeToggle}> <Component {...pageProps} /> </Layout>
  )
}

export default MyApp
