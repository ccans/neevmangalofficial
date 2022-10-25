import Header from "./Header";
import Dropdown from "./Dropdown";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";


  

export default function Layout({ children, router }) {

    const [droppedDown, toggleDropDown] = useState(false);

        return (
            <div style={{backgroundColor: "navajowhite"}}>
                <Header droppedDown={droppedDown} toggleDropDown={toggleDropDown} hiddenVar = {router.route == "/" || router.route == "/index" || router.route == "/personalbrand" } floating={ false }  />
                <Dropdown droppedDown={droppedDown} />
                <AnimatePresence exitBeforeEnter>
                    <motion.div key = {router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: .5 }} }>
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        )
  }
