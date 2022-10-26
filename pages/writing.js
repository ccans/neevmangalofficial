import React, { useState } from 'react';
import WritingCard from '../components/WritingCard';
import Head from 'next/head'


export default function Home({aboutMe}) {


  return (
      <div>
        <Head>
          <title> Writing | Neev Mangal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        
        <main>
          <div className="fixed w-full h-auto" >
          </div>
            <div className="flex flex-row justify-center px-30 flex-col-mobile" style={{minHeight: "100vh"}}> 
                <WritingCard address="blog/patriotism" backgroundCol="#ffffff" title="False Idols and Fake Patriots" subttl="American Patriotism in the Modern Day" img="https://www.maxpixel.net/static/photo/1x/Eagle-Patriotic-Usa-America-Freedom-Symbol-Flag-5461544.jpg" />
                <WritingCard address="blog/fourjuly" backgroundCol="#ffffff" title="An American Philippic" subttl="Rhetorical Analysis of Frederick Douglas&#39; “The Meaning of July Fourth for the Slave”" img="https://nmaahc.si.edu/sites/default/files/images/blog/frederick_douglass_portrait.jpg" />
                <WritingCard address="blog/odyssey" backgroundCol="#ffffff" title="The Delicate Dance of Foil, Fate, and Fortune" subttl="Character Analysis of The Odyssey" img="http://www.sacred-texts.com/cla/homer/ody/img/homer.jpg" />

            </div>
        </main>
      </div>
  )
}
