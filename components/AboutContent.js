import React from 'react';
import { motion } from 'framer-motion';
import '@fontsource/rajdhani';

const fade = (delay) => ({
  hidden: { translateY: 60, opacity: 0 },
  visible: { translateY: 0, opacity: 1, transition: { delay, duration: 0.7 } },
});

function AboutContent() {
  return (
    <div className="aboutme-copy">
      <motion.h1 className="aboutme-title" initial="hidden" animate="visible" variants={fade(0.1)}>
        About Me
      </motion.h1>

      <motion.p className="aboutme-tagline" initial="hidden" animate="visible" variants={fade(0.3)}>
        Senior at Wayzata High School · Plymouth, Minnesota
      </motion.p>

      <motion.div className="aboutme-bio" initial="hidden" animate="visible" variants={fade(0.5)}>
        <p>
          I'm Neev — a high school senior who captains my school's <strong>robotics</strong> and{' '}
          <strong>debate</strong> teams and spends the rest of my time following curiosity wherever it leads.
        </p>
        <p>
          Lately that's meant detecting exoplanets for the <strong>AAVSO</strong>, mapping ocean plastics
          with a professor at the <strong>University of Minnesota</strong>, photographing planets through a
          telescope in my backyard, and writing the occasional blog piece — political and otherwise.
        </p>
        <p>
          This site is where all of it lives: a personal <em>magnum opus</em> built from years of learning to
          program. Poke around — my astrophotography and writing are the parts I'm proudest of.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutContent;
