import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from "framer-motion"

function TextElement({text, address, toggleShowBlog}) {

    const item = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        
    }

    return (
        <Link href={"/" + address}> 
            <motion.h1 initial="hidden" animate="visible" transition={{duration: .5 }} variants={item} onClick={() => toggleShowBlog(true)} className="transition-all cursor-pointer h-1/4 tracking-wide text-center w-full dark:text-white hover:bg-black hover:text-white text-6xl md:text-9xl" style={{fontFamily: "Bebas Neue", lineHeight: "inherit", display: "flex", alignItems: "center", justifyContent: "center"}}> {text} </motion.h1> 
        </Link>
    )
}

export default TextElement
