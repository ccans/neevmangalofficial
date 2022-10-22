import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useRef } from 'react';
function IndexBackgroundSocials() {

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
    <motion.div className='socialsPC'
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
        <a className="iconText" ref={copiedText} style={{opacity: "0"}}> copied! </a>
        <a onClick={() => {navigator.clipboard.writeText("neevmangal.com"); textCopied()}}> <img className="icon" src="https://img.icons8.com/ios-glyphs/100/808080/share--v1.png"/> </a>
          <a href="https://github.com/ccans/neevmangalofficial"> <img className="icon" src="https://img.icons8.com/ios-glyphs/30/808080/github.png"/> </a>
          <a  href="https://www.linkedin.com/in/neev-mangal-b72186219/"> <img className="iconTwo" src="https://img.icons8.com/ios-filled/50/808080/linkedin-2--v1.png"/> </a>
          
        </motion.div>
  )
}

export default IndexBackgroundSocials