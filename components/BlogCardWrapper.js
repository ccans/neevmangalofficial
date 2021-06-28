import BlogCard from "./BlogCard"
import { motion } from "framer-motion"

function BlogCardWrapper({id}) {
    return (
        <motion.div className="p-1 w-auto h-1/4 flex justify-center"initial="hidden" animate="visible" variants={{
            hidden: {
                translateY: -100,
                scale: .8,
                opacity: 0
            },
            visible: {
                translateY: 0,
                scale:1,
                opacity: 1,
                transition: {
                    delay: id*.2
                }
            }

        }}>
                <BlogCard />
        </motion.div>
    )
}

export default BlogCardWrapper
