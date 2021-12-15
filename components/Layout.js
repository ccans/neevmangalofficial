import Header from "./Header";
import Dropdown from "./Dropdown";
import Coverpage from './Coverpage';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";


  

export default function Layout({ children, router }) {
    const [droppedDown, toggleDropDown] = useState(false);
    const [coverPageDown, setCover] = useState(false);
    const [theme, switchTheme] = useState(false);
    const constraintsRef = useRef(null)

        return (
            <div className={theme ? "": ""} >
                <Header droppedDown={droppedDown} toggleDropDown={toggleDropDown} setCover={setCover} switchTheme={switchTheme} theme={theme} hiddenVar = {router.route == "/" || router.route == "/index" || router.route == "/personalbrand"} floating={ (router.route == "/blog/[test]" || router.route == "/aboutme" ) } constraintsRef={constraintsRef} />
                <div className="h-screen absolute bg-black"style={{
    top: "0px",
    left: "0px",
    overflow: "hidden",
    zIndex: "-1",
    width: "100%"}} >
        </div>
                <Dropdown droppedDown={droppedDown} />
                <Coverpage coverPageDown={coverPageDown} setCover={setCover}/>
                <AnimatePresence exitBeforeEnter>
                    <motion.div key = {router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: .5 }} } ref={constraintsRef}>
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        )
  }