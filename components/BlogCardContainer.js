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
    const elements = [<BlogCardWrapper id="1" />, <BlogCardWrapper id="2" />, <BlogCardWrapper id="3" />];

    const textElements = [<TextElement text="Blog" address="" toggleShowBlog={toggleShowBlog} />, <TextElement text="About Me" address="aboutme" toggleShowBlog={toggleNothing}/>, <TextElement text="Projects" address="projects" toggleShowBlog={toggleNothing}/>, <TextElement text="Personal Brand" address="personalbrand" toggleShowBlog={toggleNothing}/>];
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
            blogControls.start("hiddenDisp");
            controls.start("visible");
        }
    }, [showBlog])

    return (
        <div className="flex flex-col flex-grow h-auto transition-all md:overflow-hidden" style={{boxShadow: "0 8px 6px -6px black", transitionDuration: "1000ms"}}>
            <motion.div style={{transitionDuration: "500ms"}} initial="visible"  
            animate={controls} 
            variants={{
            hidden: {
                height: "0px",
                opacity: 0
            },
            visible: {
                height: "100%",
                opacity: 1,
                transition: {
                    delayChildren: 0.5
                  }
            }
        }}>    
                {textElements}   
            </motion.div>
            <motion.div style={{transitionDuration: "500ms", position: "relative"}} initial="hidden"  animate={blogControls} variants={{
            hidden: {
                opacity: 0,
                height: "0px",
                display: "none"
            },
            hiddenDisp: {
                opacity: 0,
                height: "0px"
            },
            visible: {
                opacity: 1,
                display: "block"
            },
            visibleFull: {
                opacity: 1,
                height: "100%",
                display: "block"
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
