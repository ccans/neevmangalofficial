import BlogCard from "./BlogCard"

import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'


function BlogCardWrapper({id}) {

    const controls = useAnimation();
    const {ref, inView} = useInView();

    useEffect(() => {
        if(inView) {
            controls.start("visible");
        }
        // if(!inView) {
        //     controls.start("hidden");
        // }
    }, [controls, inView])

    return (
        <motion.div ref={ref} className="p-1 w-auto md:h-1/4 h-80 flex justify-center" initial="hidden" animate={controls} variants={{
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
                    delay: .7 + (id*.1)
                }
            }

        }}>
                <BlogCard />
        </motion.div>
    )
}

export default BlogCardWrapper
