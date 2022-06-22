import React, { useState, useEffect } from 'react';
import "@fontsource/bebas-neue";
import "@fontsource/rajdhani";
import Head from 'next/head'
import Wave from '../components/Wave';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Particles from 'react-particles-js';

const particleParams = {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

function personalbrand() {

    const controls = useAnimation();
    const {ref, inView} = useInView();
    const [onLoadCheck, toggle] = useState(false);

    const [buttonMain, toggleMain] = useState(false);

    const [buttonOne, toggleOne] = useState(true);
    const [buttonTwo, toggleTwo] = useState(true);
    const [buttonThree, toggleThree] = useState(true);

    useEffect(() => {
      if(!onLoadCheck) {
          if(inView) {
              controls.start("visible");
              toggle();
          } 
      } else if(inView) {
          controls.start("visibleNodel");
      }
  }, [controls, inView])

  useEffect(() => {
    if(!buttonOne && !buttonThree && !buttonTwo) 
      toggleMain(true)
    else 
      if(buttonMain)
        toggleMain(false)
}, [buttonOne, buttonThree, buttonTwo])

    return (
        <div>
            <Head>
                <title>Personal Brand | Neev Mangal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="h-screen overflow-hidden absolute z-10">
                <Particles params={particleParams}  />
                </div>
                <div className="relative overflow-hidden" style={{height: "110vh"}} > 
                    <img  className="w-screen absolute" src="https://free4kwallpapers.com/uploads/originals/2019/12/18/wanderer-above-the-sea-of-fog-by-caspar-david-friedrich-wallpaper.jpg" style={{transform: "scale(1.2)", maxHeight: "110vh"}} /> 
     
        
                </div>
                
                <div className="h-screen flex flex-col text-center bobak" style={{ fontSize: "10vh", marginTop: "-35vh"}} > 
                <div style={{position: "relative", top: "0px", height: "33%", width: "100%"}} >
          <Wave />
        </div>
        <motion.h1 ref={ref} className="dark:text-black text-black tracking-wide text-center relative" style={{fontFamily: "Bebas Neue", fontSize: "125px", lineHeight: "110px"}} initial="hidden" animate={controls}  variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    delay: .5,
                    duration: .7
                }
            }

        }} >  Neev Mangal</motion.h1>
        <motion.h1 className="dark:text-black text-black tracking-wide text-center relative cursor-pointer" style={{fontFamily: "Rajdhani", fontSize: "50px", lineHeight: "110px"}} initial="hidden" animate={controls}  variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    delay: 1,
                    duration: .7
                }
            }

        }} >  Determined advocate; part time Angry Bird</motion.h1>

                  <div className="t-duration-500 tracking-wide text-center relative block delay-1000" style={{fontFamily: "Rajdhani", fontSize: "40px", padding: "30px"}}> 
                    
                    I have a stutter—it destroyed my confidence for a long time. But I didn't want it to control my life. I took up debate as an extracurricular and pushed myself. I never imagined that I was capable of being who I am today. <br /> <strong> This taught me determination </strong> <br /> <br />  
                    The first year I was on the robotics team, the freshman were asked to clean up one time while older students worked on the robot. I was the only one that stayed—others considered it beneath them. Two years later, I was made a captain. <br /> <strong> This taught me humility </strong> <br /> <br />
                    I've lived in six different places. Everytime I moved, I had to readjust and reacclimate to different schools, cultures, and countries—an incredibly difficult task. I finally feel like I've created a home. <br /> <strong> This taught me self-awareness </strong>  <br /> <br />

                    <strong> I want to constantly push myself to be uncomfortable and learn as much as I can to find fulfillment in my own life. I want to synthesize the unique skills that I develop to make a positive impact on the world and better understand the people, structures, and institutions that exist around me.
                    <br /> <br />I want to relentlessly advocate for everyone who faces injustice of any kind and reduce the amount of ignorance in our society. </strong> <br /> <br /> It's an immense goal. It's a good thing that I have a decent amount of time to figure it out!
                  </div>

                </div>

                  
            </main>

        </div>
    )
}

export default personalbrand