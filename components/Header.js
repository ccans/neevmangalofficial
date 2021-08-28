import HeaderItem from "./HeaderItem";
import Icon from "./Icon";
import React from 'react';
import { motion, useViewportScroll, useSpring, useTransform } from "framer-motion";
import { useState } from 'react';

function Header({droppedDown, toggleDropDown, setCover, switchTheme, theme, floating, constraintsRef}) {

    const { scrollYProgress } = useViewportScroll()
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
    const [floatState, toggleFloat] = useState(false);

    return (
        <div>
            <header className = {floating ? "shadow-md flex h-16 justify-between items-center fixed w-screen bg-black z-40" : "shadow-md flex h-16 justify-between items-center fixed w-screen bg-white dark:bg-black z-40" }>
                <div className = {floating ? "ml-4 md:flex-grow justify-left max-w-md hidden md:flex text-white" : "ml-4 md:flex-grow justify-left max-w-md hidden md:flex text-gray-500 hover:text-black"}> 
                    <HeaderItem title="Explore" setCover={setCover} address="blog" />
                    <HeaderItem title="About Me" setCover={setCover} address="aboutme"/>
                    <HeaderItem title="Accomplishments" setCover={setCover} address=""/>
                </div>
                <div>
                    <Icon droppedDown={droppedDown} toggleDropDown={toggleDropDown} switchTheme={switchTheme} theme={theme} type={floating ? false : true}/>
                </div>
            </header>
        </div>
    )
}

export default Header



      
    
  