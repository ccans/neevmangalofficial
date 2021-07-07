import { motion } from "framer-motion"
import "@fontsource/rajdhani";

function BlogStripe() {
    return (
        <div className="pt-16 md:pl-20 pl-12"  >
            <motion.div className="text-white  mt-10" initial="hidden" animate="visible" variants={{
                hidden: {
                    translateY: 200,
                    opacity: 0
                },
                visible: {
                    translateY: 0,
                    opacity: 1,
                    transition: {
                        delay: .1,
                        duration: .7
                    }
                }

            }}>
                <h1 className="lg:text-8xl md:text-6xl text-4xl" style={{fontFamily: "Blog-Title-Font", maxWidth: "70%"}}> 
                Welcome to my mind. </h1>
            </motion.div>
            <motion.div className="text-white mt-10" initial="hidden" animate="visible" variants={{
                hidden: {
                    translateY: 200,
                    opacity: 0
                },
                visible: {
                    translateY: 0,
                    opacity: 1,
                    transition: {
                        delay: .5,
                        duration: .7
                    }
                }

            }}>
                <h3  className="lg:text-3xl md:text-2xl text-xl" style={{fontFamily: "Rajdhani", maxWidth: "75%"}}> No, I'm not going to tell you how transitioning to 5 seconds of screen time a day changed my life or any superficial unnatainnable lifestyle nonsense that most blogs are for. I write exclusively about my thoughts on everything, and, to a lesser extent, my hobbies. 
 
</h3>


            </motion.div>
            <motion.div className="text-white mt-10" initial="hidden" animate="visible" variants={{
                hidden: {
                    translateY: 200,
                    opacity: 0
                },
                visible: {
                    translateY: 0,
                    opacity: 1,
                    transition: {
                        delay: .8,
                        duration: .7
                    }
                }

            }}>
            <h4 className="lg:text-xl md:text-lg text-md font-semibold mt-4 text-gray-300" style={{fontFamily: "Rajdhani", maxWidth: "75%"}}> Ataraxia <em>(ancient greek)</em>: the lack of agitation that comes from understanding the ways of the universe, accepting fate, knowing what one can control and, therefore focusing only on the things one can actually change. </h4>

            </motion.div>
            
        </div>
    )
}

export default BlogStripe
