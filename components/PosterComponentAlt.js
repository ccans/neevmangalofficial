import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react';

function PosterComponentAlt({topM, leftM, url, delay, speed, pWidth}) {

    const [scrollVal, setScrollVal] = useState(0);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        // console.log(scrollPosition/window.innerHeight)
        setScrollVal((scrollPosition - delay)/(window.innerHeight - speed));
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);


    return (
        <div className="absolute" style={{top: "50vh", left: "50vw", marginTop: "-400px", marginLeft: "-300px"}}>  
            <div className="fixed" style={{opacity: scrollVal, marginLeft: leftM, marginTop: topM, height: "600px"}}>
                <img  style={{width: pWidth}} src={url} />
            </div>
        </div>
    )
}

export default PosterComponentAlt
