import '../styles/globals.css'
import Layout from "../components/Layout"
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {

  // The site is dark-only.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', 'dark');
    root.classList.add('dark');
  }, []);

  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
