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
          computational tracks, drawn to problems that live where biology meets code.
        </p>
        <p>
          In the <strong>Shapiro Lab</strong> I engineer <em>acoustic biosensors</em>, reprogramming
          gas-vesicle proteins so a protease makes them buckle under ultrasound. At{' '}
          <strong>Cedars-Sinai</strong> I build machine-learning tools — CNNs and random forests — that help
          surgeons weigh risk, and I first fell for ML mapping ocean plastics from satellite data at the{' '}
          <strong>University of Minnesota</strong>.
        </p>
        <p>
          Beyond the bench I've modeled manipulators for Caltech's Mars rover team, raised{' '}
          <strong>$50k+</strong> for Caltech Racing, and shipped web apps used by 20,000+ people. This site is
          my personal <em>magnum opus</em> — take a look around; the astrophotography and writing are the
          parts I'm proudest of.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutContent;
