import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"

function WritingCard({backgroundCol, title, subttl, img, address}) {
  return (
    <Link href={"/" + address}>
      <motion.div style={{width: "40vw", cursor: "pointer", minWidth: "300px", height: "auto", maxHeight: "80vh", maxWidth: "40vw", margin: "50px", paddingBottom: "20px", backgroundColor: backgroundCol, fontFamily: "Roboto', sans-serif"}} 
      className="font-light text-4xl justify-center items-center text-center flex flex-col rounded-lg shadow-xl flex-grow border-4 border-black hover:-translate-y-1 hover:shadow-2xl hover:border-6"
      
      initial="hidden" animate="visible" variants={{
        hidden: {
            marginTop: "150px"
        },
        visible: {
            marginTop: "50px",
            transition: {
                delay: .1,
                duration: .4
            }
        }

    }}
      
      > 
        <img style={{flexGrow: "2", height: "60%",  flexGrow: "2",
    width: "100%",
    overflow: "hidden",
    maxHeight: "50%",
    borderBottom: "4px solid black"
      
      
      }} src={img} />
        <div style={{paddingLeft: "10px", paddingRight: "10px", flexGrow: "1", fontWeight: "700", marginTop: "100px", alignItems: "flex-end", display: "flex"}} className='flex-grow text-black'> {title} </div>  
        <div style={{paddingLeft: "10px", paddingRight: "10px",flexGrow: "1", fontSize: "22px"}} className='flex-grow text-black'> <i>{subttl}</i> </div> 
      </motion.div>
    </Link> 
  )
}
4
export default WritingCard