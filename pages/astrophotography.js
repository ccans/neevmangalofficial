
import React, { useState } from 'react';

import Head from 'next/head'

function astrophotography() {


    return (
        <div>
            <Head>
                <title> Astrophotography | Neev Mangal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="blogBg astrophot-bg" style={{backgroundColor: "black"}}>
                <div className='astrophot-txt'> Astrophotography—A Sample </div>
                <div className='astrophot-subtxt'> Jupiter </div>
                <div className='astrophot-phot'>
                    <img src="/JupiterI.jpg" className='astrophot-phot-phot' />
                    <img src="/JupiterG.jpg" className='astrophot-phot-phot' />
                    <img src="/JupiterS.jpg" className='astrophot-phot-phot' />
                    <img src="/JupiterC.jpg" className='astrophot-phot-phot' />
                </div>
                <div className='astrophot-sub-subtxt'>From a tiny spec with only a few layers to a brilliant behemoth rife with atmospheric activity, perhaps no target demonstrates how far I've come in astrophotography as Jupiter does.</div>
                <div className='astrophot-subtxt'> Saturn </div>
                <div className='astrophot-phot'>
                    <img src="/SaturnI.jpg" className='astrophot-phot-phot' />
                    <img src="/SaturnG.jpg" className='astrophot-phot-phot' />
                    <img src="/SaturnC.jpg" className='astrophot-phot-phot' />
                </div>
                <div className='astrophot-sub-subtxt'>Saturn is unmistakable in appearance and unmatched in beauty. Truly otherworldly, I always think of the moment one of my young neighbors saw it for the first time through my telescope. He could barely beleive his eyes,and excitedly ran over to his family to ensure that each of them saw it, one by one. Seeing Saturn for the first time through a telescope is not a moment you forget. </div>

                <div className='astrophot-subtxt'> Mars </div>
                <div className='astrophot-phot'>
                <img src="/MarsI.jpg" className='astrophot-phot-phot' />

                <img src="/MarsC.jpg" className='astrophot-phot-phot' />
                </div>
                <div className='astrophot-subtxt'> The Orion Nebula </div>
                <div className='astrophot-phot'>
                <img src="/nebulao.jpg" className='astrophot-phot-phot' />
                <img src="/nebulai.jpg" className='astrophot-phot-phot' />
                <img src="/nebulac.jpg" className='astrophot-phot-phot' />

                </div>
                <div className='astrophot-subtxt'> The Moon </div>
                <div className='astrophot-phot'>
                    <img src="/moon1.png" className='astrophot-phot-photlong' />

                    <img src="/moon2.jpg" className='astrophot-phot-photlong' />
                </div>

                <div className='astrophot-phot'>                    <img src="/moon3.jpg" className='astrophot-phot-photlong' /></div>
                {/* <div className='astrophot-subtxt'> Methods </div>
                <div className='astrophot-phot'>

                </div>
                <div className='astrophot-subtxt'> Featured </div>
                <div className='astrophot-phot'>

                </div> */}
            </main>

            <footer className="fixed bottom-0 w-screen text-center text-gray-300">
                Programmed by Neev Mangal
            </footer>
        </div>
    )
}

export default astrophotography