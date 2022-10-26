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
            <h4 className="lg:text-xl md:float-left md:text-lg text-md mt-4 text-gray-300 m-auto md:text-left text-center text-black" style={{fontFamily: "monospace", maxWidth: "75%"}}> Hi! My name is Neev Mangal and I’m a senior at Wayzata High School in Plymouth, Minnesota, where I have lived for seven years. I’ve had a wide array of interests throughout the years—solving Rubik’s Cubes, playing tennis, and capturing astrophotography—to name some. Throughout my high school life, however, I have discovered a love for robotics, debate, and research. I captain both my school’s robotics and debate teams and enjoy both activities thoroughly (luckily, one has a Fall season while the other occurs during the Winter/Spring). My research work spans from detecting exoplanets for the American Association of Variable Star Observers (AAVSO) to geospatial analysis of the planet to help identify ocean plastics under a professor at the University of Minnesota.
<br /> <br />
In my spare time, I enjoy listening to music, writing (political and apolitical) blog pieces, and programming. Programming has been a large part of my life for a long time, so I decided to bring everything I’d learned together into a personal websiten—a <strong> magnum opus. </strong>
<br /> <br />
My writing and astrophotography are my favorite parts of this website. I also have a few project write-ups
<br /> <br />
I've found this website is also useful to stay in touch with teachers and friends—everything about me in one place to become the quintessential answer to a commonly posed question:
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
