import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.2 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.python} alt='python' />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.3 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.javascript} alt='javascript' />
              </div>
            </motion.div>
        </motion.div>

        <motion.div className="app__skills-list">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.4 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.csharp} alt='csharp' />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.react} alt='javascript' />
              </div>
            </motion.div>
        </motion.div>

        <motion.div className="app__skills-list">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.flask} alt='flask' />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.sql} alt='sql' />
              </div>
            </motion.div>
        </motion.div>

        <motion.div className="app__skills-list">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.pandas} alt='pandas' />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.9 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
              >
                <img src={images.tensorflow} alt='tensorflow' />
              </div>
            </motion.div>
        </motion.div>

        <div className="app__skills-exp">
            <motion.div
              className="app__skills-exp-item"
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">Half a year</p>
              </div>
              <motion.div className="app__skills-exp-works">
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                    >
                      <h4 className="bold-text">Full-stack Web Developer</h4>
                      <p className="p-text">High School For The Gifted</p>
                    </motion.div>
                    <ReactTooltip
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      For my HighSchool competition dubbed Entropy, I join hands in constructing a new
                      full-stack website. I contributed to the development of routing URLs, sockets, and the gaming UI
                    </ReactTooltip>
                  </>
              </motion.div>
            </motion.div>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);