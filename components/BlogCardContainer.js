import BlogCardWrapper from "./BlogCardWrapper"
import TextElement from "./TextElement"
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion"

// in the future, this should dynamically create blogcards and put them on the page instead of just having a static amount
// Make sure to get the "loading" animation (make a loading blogcard) when needed and the pop-up animation too
import "@fontsource/bebas-neue";
import React, { useEffect, useState } from 'react';

function BlogCardContainer() {

    const [showBlog, toggleShowBlog] = useState(false);
    const [nothing, toggleNothing] = useState(false);
    const elements = [<BlogCardWrapper key="1" />, <BlogCardWrapper key="2" />, <BlogCardWrapper key="3" />];
// <TextElement text="Blog" address="" toggleShowBlog={toggleShowBlog} key="1"/>, 
    const textElements = [<TextElement text="About Me" address="aboutme" key="2" toggleShowBlog={toggleNothing}/>, <TextElement key="3" text="Projects" address="projects" toggleShowBlog={toggleNothing}/>, <TextElement key="4" text="Astrophotography" address="astrophotography" toggleShowBlog={toggleNothing}/>];
    const controls = useAnimation();
    const blogControls = useAnimation();

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    useEffect(() => {
        if(showBlog) {
            controls.start("hidden");
            blogControls.start("visible");
            setTimeout(function(){
                blogControls.start("visibleFull");
            }, 1);
        } else {
            blogControls.start("hidden");
            controls.start("visible");
        }
    }, [showBlog])

    return (
        <div className="bgSpecial w-full md:w-auto h-full absolute md:relative md:flex flex-row flex-grow md:h-auto transition-all md:overflow-hidden" style={{boxShadow: "0 8px 6px -6px black"}}>
            <motion.div style={{transitionDuration: "500ms", width: "100%"}} className="h-full" initial="visible"  
            animate={controls} 
            variants={{
            hidden: {
                marginLeft: "-100%"
            },
            visible: {
                marginLeft: "0px",
                transition: {
                    delayChildren: 0.5
                  }
            }
        }}>    
                {textElements}   
            </motion.div>
            <motion.div className="overflow-hidden" style={{transitionDuration: "300ms", position: "relative", width: "100%"}} initial="hidden"  animate={blogControls} variants={{
            hidden: {
                width: "0px"
            },
            visible: {
                width: "0px"
            },
            visibleFull: {
                width: "100%"
            }
        }}>  
            <div className="w-full pl-10" style={{fontFamily: "Bebas Neue", fontSize: "75px"}}> BLOG </div> 
            <div onClick={() => toggleShowBlog(false)} className="cursor-pointer absolute bottom-2 left-10">
                <img src="https://img.icons8.com/ios-glyphs/60/000000/long-arrow-left.png"/> 
            </div> 
            {elements}
            
            </motion.div> 
        </div>
    )
}

export default BlogCardContainer
