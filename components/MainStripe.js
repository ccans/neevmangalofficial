import "@fontsource/bebas-neue";
import "@fontsource/rajdhani";
import { motion } from "framer-motion"

function MainStripe() {
    return (
        <motion.div className="z-20 flex w-full md:justify-end justify-center w-screen md:w-1/3 overflow-hidden"  style={{minHeight: "90vh"}} initial="hidden" animate="visible" variants={{
            hidden: {
                translateX: -200,
                opacity: 0
            },
            visible: {
                translateX: 0,
                opacity: 1,
                transition: {
                    delay: .1,
                    duration: .7
                }
            }

        }}>
            <div className="w-full bg-black float-right p-4 dark:bg-white flex relative flex-col">
                <h1 className="dark:text-black text-white text-7xl tracking-wide" style={{fontFamily: "Bebas Neue"}}> Neev Mangal</h1>
                <h3 className="dark:text-black text-white text-xl tracking-wider mb-2" style={{fontFamily: "Rajdhani"}}> Thinker ● Designer ● Creator </h3>
                <hr style={{color: "white"}} />
                <h3 className="dark:text-black text-white mt-4 font-medium" style={{fontFamily: "Rajdhani"}}> This website is the culmination of 6 years of front and back-end programming experience. I designed and built the whole thing myself, and it embodies who I am. Take a look around!<br /> <br /> </h3>
                <h3 className="dark:text-black text-white font-light table-row absolute" style={{fontFamily: "Rajdhani", bottom: "20px"}}> Luftmensch <em> (yiddish) </em>: Refers to someone who is a bit of a dreamer, and literally means "air person" </h3>
            </div>
        </motion.div>
    )
}

export default MainStripe
