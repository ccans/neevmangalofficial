import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useRef } from 'react';

function IndexBackgroundMobile() {
    const copiedText = useRef(null);

    async function textCopied() {
        copiedText.current.style.opacity = "1";
        await timeout(1000);
        copiedText.current.style.opacity = "0";
      }

      function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
      }

  return (
    <div className='mobile-index'> 
    <motion.a
        style={{
          fontSize: "45px", opacity: "0.7", fontFamily: "JetBrains Mono, Arial, Helvetica, sans-serif"
        }}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: .8,
                transition: {
                    delay: .1,
                    duration: .7
                }
            }

        }}
      >
        Neev Mangal
      </motion.a>
      <Link href="/aboutme">
      <motion.a
        className='mobile-index-text undl-animate'
        style={{
          fontSize: "35px", opacity: "0.5", fontFamily: "JetBrains Mono, Arial, Helvetica, sans-serif"
        }}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0,
            },
            visible: {
                opacity: .5,
                transition: {
                    delay: .3,
                    duration: .7
                }
            }

        }}
      >
         
        About
        
      </motion.a>
      </Link>
      <Link href="/projects">
      <motion.a
      className='mobile-index-text undl-animate'
        style={{
          fontSize: "35px", opacity: "0.5", fontFamily: "JetBrains Mono, Arial, Helvetica, sans-serif"
        }}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: .5,
                transition: {
                    delay: .5,
                    duration: .7
                }
            }

        }}
      >
         
        Projects
        
      </motion.a>
      </Link>
      <Link href="/astrophotography">
      <motion.a
      className='mobile-index-text undl-animate'
        style={{
          fontSize: "35px", opacity: "0.5", fontFamily: "JetBrains Mono, Arial, Helvetica, sans-serif"
        }}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: .5,
                transition: {
                    delay: .7,
                    duration: .7
                }
            }

        }}
      >
        
        Astrophotography
        
      </motion.a>
      </Link>
      <Link href="/writing">
      <motion.a
      className='mobile-index-text undl-animate'
        style={{
          fontSize: "35px", opacity: "0.5", fontFamily: "JetBrains Mono, Arial, Helvetica, sans-serif"
        }}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: .5,
                transition: {
                    delay: .9,
                    duration: .7
                }
            }

        }}
      >
        
        Writing
        
      </motion.a>
      </Link>

         <motion.div className='socialsMobile'
         initial="hidden" animate="visible" variants={{
            hidden: {
                marginBottom: "-100px"
            },
            visible: {
                marginBottom: "0px",
                transition: {
                    delay: 1,
                    duration: .5
                }
            }

        }}
         
         >
          <a href="https://github.com/ccans/neevmangalofficial"> <img className="icon" src="https://img.icons8.com/ios-glyphs/30/808080/github.png"/> </a>
          <a  href="https://www.linkedin.com/in/neev-mangal-b72186219/"> <img className="iconTwo" src="https://img.icons8.com/ios-filled/50/808080/linkedin-2--v1.png"/> </a>
          <a onClick={() => {navigator.clipboard.writeText("neevmangal.com"); textCopied()}}> <img className="icon" src="https://img.icons8.com/ios-glyphs/100/808080/share--v1.png"/> </a>
          <a className="iconText" ref={copiedText} style={{opacity: "0"}}> copied! </a>
        </motion.div>
    </div>
  )
}

export default IndexBackgroundMobile