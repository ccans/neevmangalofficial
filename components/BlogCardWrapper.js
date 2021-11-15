import BlogCard from "./BlogCard"

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'


function BlogCardWrapper({id}) {

    const controls = useAnimation();
    const {ref, inView} = useInView();
    const [onLoadCheck, toggle] = useState(false);

    useEffect(() => {
        if(!onLoadCheck) {
            if(inView) {
                controls.start("visible");
                toggle();
            } 
        } else if(inView) {
            controls.start("visibleNodel");
        }
        // if(!inView) {
        //     controls.start("hidden");
        // }
    }, [controls, inView])

    return (
        <motion.div ref={ref} className="p-1 w-auto md:h-40 h-80 flex justify-center" initial="hidden" animate={controls} variants={{
            hidden: {
                translateY: -200,
                scale: .8,
                opacity: 0
            },
            visible: {
                translateY: 0,
                scale:1,
                opacity: 1,
                transition: {
                    delay: (.7 + (id * .1))
                }
            },
            visibleNodel: {
                translateY: 0,
                scale:1,
                opacity: 1,
                transition: {
                    delay: 1
                }
            }

        }}>
                <BlogCard />
        </motion.div>
    )
}

export default BlogCardWrapper
