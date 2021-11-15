import BlogCardWrapper from "./BlogCardWrapper"
import TextElement from "./TextElement"

// in the future, this should dynamically create blogcards and put them on the page instead of just having a static amount
// Make sure to get the "loading" animation (make a loading blogcard) when needed and the pop-up animation too
import "@fontsource/bebas-neue";
import React, { useEffect, useState } from 'react';

function BlogCardContainer() {

    const [showBlog, toggleShowBlog] = useState(false);
    const [nothing, toggleNothing] = useState(false);
    const elements = [<BlogCardWrapper id="1" />, <BlogCardWrapper id="2" />, <BlogCardWrapper id="3" />];
    const textElements = [<TextElement text="Blog" address="blog" toggleShowBlog={toggleShowBlog} />, <TextElement text="About Me" address="aboutme" toggleShowBlog={toggleNothing}/>, <TextElement text="Projects" address="projects" toggleShowBlog={toggleNothing}/>, <TextElement text="Uploads" address="projects" toggleShowBlog={toggleNothing}/>];
    
    return (
        <div className="flex flex-col flex-grow h-auto transition-all overflow-hidden" style={{boxShadow: "0 8px 6px -6px black", transitionDuration: "1000ms"}}>
            <div className= {showBlog ? "h-0 opacity-0" : "h-full opacity-100"} style={{transitionDuration: "1000ms"}}>    
                {textElements}   
            </div>
            <div className= {showBlog ? "h-full pt-12" : "hidden h-0"}>
                {elements}
            </div> 
        </div>
    )
}

export default BlogCardContainer
