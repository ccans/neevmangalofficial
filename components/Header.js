import HeaderItem from "./HeaderItem";
import Icon from "./Icon";
import React from 'react';

function Header({droppedDown, toggleDropDown, hiddenVar, theme, toggleTheme}) {

    const isDark = theme === 'dark';

    const sun = (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.4M12 19.1v2.4M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7" />
        </svg>
    );
    const moon = (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M20 14.5A8 8 0 1 1 9.5 4a6.4 6.4 0 0 0 10.5 10.5z" />
        </svg>
    );

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
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                        title={isDark ? "Light mode" : "Dark mode"}
                    >
                        {isDark ? sun : moon}
                    </button>
                    <Icon droppedDown={droppedDown} toggleDropDown={toggleDropDown} type={!isDark}/>
                </div>
            </header>
        </div>
    )
}

export default Header
