import HeaderItem from "./HeaderItem";
import Icon from "./Icon";
import React, { useState } from 'react';

function print() {
    console.log("hi");
}

function Header({rotate, setRotate}) {

    

    return (
        <header className = "shadow-md flex h-16 justify-between items-center fixed w-screen bg-white z-50">
            <div className = "ml-4 md:flex-grow justify-left max-w-md hidden md:flex"> 
                <HeaderItem title="Explore" />
                <HeaderItem title="About Me" />
                <HeaderItem title="Accomplishments" />
            </div>
            <div>
                <Icon rotate={rotate} setRotate={setRotate} />
            </div>
        </header>
    )
}

export default Header



      
    
  