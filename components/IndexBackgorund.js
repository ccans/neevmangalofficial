import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

function IndexBackgorund() {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    id="text-base"
    style={{
      backgroundColor: "#fff",
      display: "flex"
    }}
    width="100vw"
    height="100vh"
    className="svg-base"
  >
    <rect
      width="100vw"
      height="100vh"
      id="textBg"
      style={{
        fill: "#e1dead",
      }}
    />
    <style>
      {
        "@import url(https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap);@keyframes hideshow{0%{transform:translateX(0) rotate(-45deg,-480,540)}50%{transform:translateX(100px) rotate(-45deg,-480,540)}to{transform:translateX(200px) rotate(-45deg,-480,540)}}.small{font:italic 13px sans-serif}.heavy{font:700 30px sans-serif}"
      }
    </style>

    <defs>
      <clipPath id="clip">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#rect" />
      </clipPath>
      <rect id="rect" width="100%" height="100%" />
    </defs>
    <g clipPath="url(#clip)" id="clip-path">
      <motion.text
        style={{
          animation: "hideshow 3s ease infinite",
        }}
        x={120}
        y={540}
        textAnchor="middle"
        fontSize={52}
        opacity={0.7}
        transform="rotate(-45 120 540)"
        fontFamily="JetBrains Mono, Arial, Helvetica, sans-serif"
        stroke="#000"
        strokeWidth={2}
        wordSpacing={20}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: .8,
                transition: {
                    delay: .1,
                    duration: .7
                }
            }

        }}
      >
        <a strokeWidth={4}>
          {
            "Neev    Mangal    Neev    Mangal    Neev   Mangal   Neev    Mangal Neev    Mangal Neev    Mangal Neev    Mangal Neev    Mangal"
          }
        </a>
      </motion.text>
      <motion.text
        style={{
          animation: "diagonalOne 10s linear infinite",
        }}
        x={320}
        y={540}
        textAnchor="middle"
        // fontSize={52}
        opacity={0.4}
        transform="rotate(-45 320 540)"
        fontFamily="JetBrains Mono, Arial, Helvetica, sans-serif"
        stroke="#000"
        strokeWidth={4}
        wordSpacing={20}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: .4,
                transition: {
                    delay: .2,
                    duration: .7
                }
            }

        }}
        
        className="index-svg"
      >
        <Link href="/aboutme">
          {
            "About Me  \u2728   About Me   \u2728  About Me   \u2728  About Me  \u2728  About Me  \u2728  About Me  \u2728  About Me  \u2728   About Me  \u2728   About Me  \u2728   About Me  \u2728   About Me  \u2728   About Me"
          }
        </Link>
      </motion.text>
      <motion.text
        style={{
          animation: "diagonalTwo 14s linear infinite",
        }}
        x={520}
        y={540}
        textAnchor="middle"
        // fontSize={52}
        opacity={0.4}
        transform="rotate(-45 520 540)"
        fontFamily="JetBrains Mono, Arial, Helvetica, sans-serif"
        stroke="#000"
        strokeWidth={4}
        wordSpacing={20}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: .4,
                transition: {
                    delay: .3,
                    duration: .7
                }
            }

        }}
        className="index-svg"
      >
        <Link href="/projects">
          {
            "Projects  \uD83D\uDCC1  Projects  \uD83D\uDCC1  Projects  \uD83D\uDCC1  Projects  \uD83D\uDCC1  Projects \uD83D\uDCC1  Projects \uD83D\uDCC1  Projects  \uD83D\uDCC1  Projects  \uD83D\uDCC1  Projects  \uD83D\uDCC1  Projects  \uD83D\uDCC1  Projects  \uD83D\uDCC1  Projects"
          }
        </Link>
      </motion.text>
      <motion.text
        style={{
          animation: "diagonalThree 12s linear infinite",
        }}
        x={720}
        y={540}
        textAnchor="middle"
        // fontSize={52}
        opacity={0.4}
        // transform="rotate(-45 720 540)"
        fontFamily="JetBrains Mono, Arial, Helvetica, sans-serif"
        stroke="#000"
        strokeWidth={4}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: .4,
                transition: {
                    delay: .4,
                    duration: .7
                }
            }

        }}
        wordSpacing={20}
        className="index-svg"
      >
        <Link href="/astrophotography">
          {
            "Astrophotography  \uD83D\uDD2D Astrophotography  \uD83D\uDD2D Astrophotography  \uD83D\uDD2D Astrophotography  \uD83D\uDD2D  Astrophotography  \uD83D\uDD2D  Astrophotography  \uD83D\uDD2D  Astrophotography  \uD83D\uDD2D  Astrophotography \uD83D\uDD2D Astrophotography"
          }
        </Link>
      </motion.text>
      <motion.text
        style={{
          animation: "diagonalFour 16s linear infinite",
        }}
        x={920}
        y={540}
        textAnchor="middle"
        // fontSize={52}
        opacity={0.4}
        // transform="rotate(-45 920 540)"
        fontFamily="JetBrains Mono, Arial, Helvetica, sans-serif"
        stroke="#000"
        strokeWidth={4}
        wordSpacing={20}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: .4,
                transition: {
                    delay: .5,
                    duration: .7
                }
            }

        }}
        className="index-svg"
      >
        <Link href="/writing">
          
          {
            "Writing  \u270D\uFE0F Writing  \uD83D\uDCD3 Writing  \u270D\uFE0F  Writing  \uD83D\uDCD3  Writing  \u270D\uFE0F  Writing  \uD83D\uDCD3  Writing \u270D\uFE0F Writing \u270D\uFE0F Writing \u270D\uFE0F Writing \u270D\uFE0F Writing"
          }
        </Link>
      </motion.text>
      <motion.text
        style={{
          animation: "hideshow 3s ease infinite",
        }}
        x={1120}
        y={540}
        textAnchor="middle"
        fontSize={52}
        opacity={0.7}
        transform="rotate(-45 1120 540)"
        fontFamily="JetBrains Mono, Arial, Helvetica, sans-serif"
        stroke="#000"
        strokeWidth={2}
        wordSpacing={20}
        initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: .8,
                transition: {
                    delay: .6,
                    duration: .7
                }
            }

        }}
      >
        <a strokeWidth={4}>
          {"Neev    Mangal    Neev    Mangal    Neev   Mangal   Neev    Mangal   Neev    Mangal   Neev    Mangal"}
        </a>
      </motion.text>
    </g>
  </svg>
  )
}

export default IndexBackgorund