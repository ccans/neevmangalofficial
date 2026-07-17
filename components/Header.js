import HeaderItem from "./HeaderItem";
import Icon from "./Icon";
import React from 'react';

function Header({droppedDown, toggleDropDown, hiddenVar}) {

    return (
        <div className= {"delay-700 h-16 duration-700 " + (hiddenVar ? "-mt-16" : "mt-0")}>
            <header className="header-bar flex h-16 justify-between items-center fixed w-full z-40">
                <div className="header-nav ml-4 md:flex-grow justify-left max-w-md hidden md:flex">
                    <HeaderItem title="Explore" address="" />
                    <HeaderItem title="About Me" address="aboutme"/>
                    <HeaderItem title="Projects" address="projects"/>
                    <HeaderItem title="Writing" address="writing"/>
                </div>
                <div className="flex items-center">
                    <Icon droppedDown={droppedDown} toggleDropDown={toggleDropDown} type={false}/>
                </div>
            </header>
        </div>
    )
}

export default Header
