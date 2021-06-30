import HeaderItem from "./HeaderItem";
import Icon from "./Icon";
import React, { useState } from 'react';
function Header({droppedDown, toggleDropDown, setCover}) {

    

    return (
        <header className = "shadow-md flex h-16 justify-between items-center fixed w-screen bg-white z-20">
            <div className = "ml-4 md:flex-grow justify-left max-w-md hidden md:flex"> 
                <HeaderItem title="Explore" setCover={setCover} address="blog"/>
                <HeaderItem title="About Me" setCover={setCover} address="aboutme"/>
                <HeaderItem title="Accomplishments" setCover={setCover} address=""/>
            </div>
            <div>
                <Icon droppedDown={droppedDown} toggleDropDown={toggleDropDown} />
            </div>
        </header>
    )
}

export default Header



      
    
  