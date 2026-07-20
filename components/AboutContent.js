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
        Chemical Engineering @ Caltech · Biomolecular + Computational
      </motion.p>

      <motion.div className="aboutme-bio" initial="hidden" animate="visible" variants={fade(0.5)}>
        <p>
          I'm Neev — a Chemical Engineering student at <strong>Caltech</strong> on the biomolecular and
          computational tracks. I'm interested in the intersection of biology and computation, 
          exploring how code can help us understand and engineer biological systems, particularly as it 
          relates to <em> de novo </em> protein design and synthetic biological circuits. 
        </p>
        <p>
          I originally programmed this website in high school the good old-fashioned way. I have since
          augmented and redesigned the pages with the help of Claude, although the underlying framework remains 
          my own. Check it out! 
        </p>
      </motion.div>
    </div>
  );
}

export default AboutContent;
