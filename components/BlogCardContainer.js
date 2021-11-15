import BlogCardWrapper from "./BlogCardWrapper"
import TextElement from "./TextElement"
import { motion, useAnimation } from "framer-motion"

// in the future, this should dynamically create blogcards and put them on the page instead of just having a static amount
// Make sure to get the "loading" animation (make a loading blogcard) when needed and the pop-up animation too
import "@fontsource/bebas-neue";
import React, { useEffect, useState } from 'react';

function BlogCardContainer() {

    const [showBlog, toggleShowBlog] = useState(false);
    const [nothing, toggleNothing] = useState(false);
    const elements = [<BlogCardWrapper id="1" />, <BlogCardWrapper id="2" />, <BlogCardWrapper id="3" />];
    const textElements = [<TextElement text="Blog" address="" toggleShowBlog={toggleShowBlog} />, <TextElement text="About Me" address="aboutme" toggleShowBlog={toggleNothing}/>, <TextElement text="Projects" address="projects" toggleShowBlog={toggleNothing}/>, <TextElement text="Uploads" address="projects" toggleShowBlog={toggleNothing}/>];
    const controls = useAnimation();
    const blogControls = useAnimation();

    useEffect(() => {
            if(showBlog) {
                controls.start("hidden");
                blogControls.start("visible");
            }
        }, [showBlog])

    return (
        <div className="flex flex-col flex-grow h-auto transition-all overflow-hidden" style={{boxShadow: "0 8px 6px -6px black", transitionDuration: "1000ms"}}>
            <motion.div style={{transitionDuration: "500ms"}} initial="visible"  animate={controls} variants={{
            hidden: {
                opacity: 0,
                height: "0px"
            },
            visible: {
                opacity: 1,
                height: "100%"
            }
        }}>    
                {textElements}   
            </motion.div>
            <motion.div style={{transitionDuration: "500ms"}} initial="hidden"  animate={blogControls} variants={{
            hidden: {
                opacity: 0,
                height: "0px",
                display: "none"
            },
            visible: {
                opacity: 1,
                display: "block"
            }
        }}>  
            <div className="w-full h-0 pt-12"> </div>
                {elements}
            </motion.div> 
        </div>
    )
}

export default BlogCardContainer
