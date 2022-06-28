import "@fontsource/bebas-neue";
import "@fontsource/rajdhani";
import { motion } from "framer-motion"
import React from "react";
import { useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";

function MainStripe() {

    const [temp, setTemp] = useState(0);
    const [swipe, setSwipe] = useState(0);
    const [alreadyActive, setAlreadyActive] = useState(false);
    const mainStripe = useRef(null);


    function checkScroll(state) {
        
        if(!state.active) { 
            setAlreadyActive(false); 
            console.log("ALREADYACTIVE RESET");
            setSwipe(0);
        }
        else {
            if(!alreadyActive) {
                setAlreadyActive(true);
                console.log("TEMP RESET");
                setTemp(state.xy[0]);
                setSwipe(0);
            } else {
                setSwipe(state.xy[0] - temp);
                console.log(swipe);
            }   
        }
    }

    const bind = useDrag(state => checkScroll(state), { movement: "mx", direction: "xDir"});

    return (
        <motion.div {...bind()} ref={mainStripe}

        className="z-20 flex md:justify-end justify-center w-screen md:w-1/3 overflow-hidden"  
        style={{minHeight: "90vh", marginLeft: swipe + "px", touchAction: 'none', pointerTouch: true, transitionDuration: "1ms"}} initial="hidden" animate="visible" variants={{
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
                <h1 className="text-white tracking-wide" style={{fontFamily: "Bebas Neue", fontSize: "125px", lineHeight: "110px"}}> Neev Mangal</h1>
                <h3 className="text-white text-xl tracking-wider mb-2" style={{fontFamily: "Rajdhani"}}> Professional Angry Bird </h3>
                <hr style={{color: "white"}} />
                <h3 className="text-white mt-4 font-medium" style={{fontFamily: "Rajdhani"}}> This website is the culmination of 6 years of front and back-end programming experience. I designed and built the whole thing myself, and it embodies who I am. Take a look around! </h3>
                <img className="block md:hidden" style={{width: "150px", margin: "auto"}} src="https://img.icons8.com/ios-glyphs/480/FFFFFF/swipe-left.png"/>
                <div className="block" style={{height:"48px"}}> </div>
                <h3 className="text-white font-light table-row absolute" style={{fontFamily: "Rajdhani", bottom: "20px"}}> Luftmensch <em> (yiddish) </em>: Refers to someone who is a bit of a dreamer, and literally means "air person" </h3>
            </div>
        </motion.div>
    )
}

export default MainStripe
