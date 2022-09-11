import HeaderItem from "./HeaderItem";
import Icon from "./Icon";
import React from 'react';
import { motion, useViewportScroll, useSpring, useTransform } from "framer-motion";
import { useState } from 'react';

function Header({droppedDown, toggleDropDown, hiddenVar, floating}) {

    const { scrollYProgress } = useViewportScroll()
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
    const [floatState, toggleFloat] = useState(false);

    return (
        <div className= {"delay-700 h-16 duration-700 " + (!hiddenVar ? "mt-0" : "-mt-16")}>
            <header className = {floating ? "shadow-md flex h-16 justify-between items-center fixed w-full bg-black z-40" : "flex h-16 justify-between items-center fixed w-full bg-white dark:bg-black z-40" }>
                <div className = {floating ? "ml-4 md:flex-grow justify-left max-w-md hidden md:flex text-white" : "ml-4 md:flex-grow justify-left max-w-md hidden md:flex text-gray-500 hover:text-black"}> 
                    <HeaderItem title="Explore" address="" />
                    <HeaderItem title="About Me" address="aboutme"/>
                    <HeaderItem title="Projects" address="projects"/>
                </div>
                <div  >
                    <Icon droppedDown={droppedDown} toggleDropDown={toggleDropDown} type={floating ? false : true}/>
                </div>
            </header>
        </div>
    )
}

export default Header



      
    
  