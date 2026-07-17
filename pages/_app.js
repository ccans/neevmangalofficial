import '../styles/globals.css'
import Layout from "../components/Layout"
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {

  const [theme, setTheme] = useState('dark');

  // Load the saved theme once on mount.
  useEffect(() => {
    let saved = 'dark';
    try { saved = localStorage.getItem('theme') || 'dark'; } catch (e) {}
    setTheme(saved);
  }, []);

  // Apply the theme to <html>: a data-theme attribute drives our CSS variables,
  // and the `dark` class drives Tailwind's dark: variants.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <Layout theme={theme} toggleTheme={toggleTheme} router={router}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
