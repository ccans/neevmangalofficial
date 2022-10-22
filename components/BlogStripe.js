import { motion } from "framer-motion"
import "@fontsource/rajdhani";

function BlogStripe() {
    return (
        <div className="pt-16 md:pl-20 min-h-screen"  >
            <motion.div className="mt-10" initial="hidden" animate="visible" variants={{
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
                <h1 className="lg:text-8xl md:text-6xl md:pl-0 pl-12 text-4xl" style={{fontFamily: "Blog-Title-Font", maxWidth: "70%"}}> 
                Magnum Opus </h1>
            </motion.div>

            <motion.div className="overflow-auto mt-10" initial="hidden" animate="visible" variants={{
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
            <h4 className="lg:text-xl md:float-left md:text-lg text-md mt-4 text-gray-300 m-auto md:text-left text-center text-black" style={{fontFamily: "monospace", maxWidth: "75%"}}> Hi! My name is Neev Mangal and I’m a junior at Wayzata High School in Plymouth, Minnesota, where I have lived for seven years. I’ve had a wide array of interests throughout the years—solving Rubik’s Cubes, playing tennis, and capturing astrophotography—to name some. Throughout my high school life, however, the three passions that I’ve focused on are robotics, debate, and research. I captain both my school’s robotics and debate teams and compete in both. My research work spans from detecting exoplanets for the American Association of Variable Star Observers (AAVSO) to geospatial analysis of the planet to help identify ocean plastics under a professor at the University of Minnesota. In my spare time, I enjoy listening to music, writing blog pieces, and programming
<br /> <br />
Programming has been a large part of my life for a long time. Almost nine years after I learned my first programming language—javascript—I decided to bring together everything I’d learned  since then (everything from programming robotics discord bots to machine learning algorithms that identify ingredients in food) into one personal website.
<br /> <br />
When you funnel everything you’ve learned into one work, that work becomes more than just a project. It becomes a physical symbol of a burning passion—a <strong> magnum opus. </strong> <br /> <br /> Everything about me in one place to become the quintessential answer to a commonly posed question:
<br /> <br />
<em> “So, what are you up to these days?” </em>
<br /> <br />
<strong> Well, take a look at my website! </strong>
 </h4>

            </motion.div>


            <motion.div className="mt-10" initial="hidden" animate="visible" variants={{
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

            </motion.div>
            
            
        </div>
    )
}

export default BlogStripe
