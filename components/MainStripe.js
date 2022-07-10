import "@fontsource/bebas-neue";
import "@fontsource/rajdhani";
import { motion } from "framer-motion"
import React from "react";
import { useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from 'react-spring'

function MainStripe() {

    const [temp, setTemp] = useState(0);
    const [swipe, setSwipe] = useState(0);
    const [open, setOpen] = useState(0);
    const [alreadyActive, setAlreadyActive] = useState(false);
    const mainStripe = useRef(null);

    function checkScroll(state) {
        if(swipe <= 0) {
            mainStripe.current.style.transitionDuration = "1ms";
            if(!state.active) { 
                setAlreadyActive(false); 
                mainStripe.current.style.transitionDuration = "500ms";
                if(swipe < -1 * mainStripe.current.clientWidth/2) {
                    console.log("IS OPEN");
                    setSwipe(-1 * mainStripe.current.clientWidth + 40);
                    setOpen(-1 * mainStripe.current.clientWidth + 40);
                } else {
                    console.log("IS NOT OPEN");
                    setSwipe(0);
                    setOpen(0);
                }
            }
            else {
                if(!alreadyActive) {
                    setAlreadyActive(true);
                    setTemp(state.xy[0] - open);
                } else {
                    if(state.xy[0] - temp < 0) {
                        setSwipe(state.xy[0] - temp);
                        console.log(swipe);
                    }
                }   
            }
        } else {
            
            // setSwipe(0);
           
        }
    }

    const bind = useDrag(state => checkScroll(state), { movement: "mx", direction: "xDir"});

    return (
        <motion.div {...bind()} ref={mainStripe}

        className="z-20 flex md:justify-end justify-center w-screen md:w-1/3 overflow-hidden"  
        style={{minHeight: "100vh", marginLeft: swipe + "px", touchAction: 'none', pointerTouch: true}} initial="hidden" animate="visible" variants={{
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
