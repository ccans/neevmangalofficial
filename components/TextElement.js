import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function TextElement({text, address, toggleShowBlog}) {
    return (
        <Link href={"/" + address}> 
            <h1 onClick={() => toggleShowBlog(true)} className="cursor-pointer h-1/4 tracking-wide text-center w-full dark:text-white hover:bg-black hover:text-white" style={{fontFamily: "Bebas Neue", fontSize: "15vh"}}> {text} </h1> 
        </Link>
    )
}

export default TextElement
