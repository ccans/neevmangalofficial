import Header from "./Header";
import Dropdown from "./Dropdown";
import Coverpage from './Coverpage';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";


  

export default function Layout({ children, router }) {
    const [droppedDown, toggleDropDown] = useState(false);
    const [coverPageDown, setCover] = useState(false);
    const [theme, switchTheme] = useState(false);
    

    return (
        <div className={theme ? "": ""} >
            <Header droppedDown={droppedDown} toggleDropDown={toggleDropDown} setCover={setCover} switchTheme={switchTheme} theme={theme}/>
            <Dropdown droppedDown={droppedDown} />
            <Coverpage coverPageDown={coverPageDown} setCover={setCover}/>
            <AnimatePresence exitBeforeEnter>
                <motion.div key = {router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: .5 }} }>
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
  }