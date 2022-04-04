import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants'; 

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <>
      <h2 className="head-text">My <span>Project</span></h2>


      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >
              <img src={images.logo} alt='Spectrum' />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                
                <a href='https://github.com/longthichcafe/Spectrum' target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Spectrum</h4>
              <p className="p-text" style={{ marginTop: 10 }}>Spectrum is an NFT marketplace with Pinterest layout and designs, inspired by
              OpenSea and the broader NFT excitement. It eventually evolved into a location where individuals could share their favourite photos 
              and search and download the ones they liked</p>
            </div>
          </div>
          
          <div className="app__work-item app__flex">
            <div
              className="app__work-img app__flex"
            >
              <img src={images.logo} alt='Kokonut' />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                
                <a href='https://github.com/longthichcafe/kokonut' target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">Kokonut 🌴</h4>
              <p className="p-text" style={{ marginTop: 10 }}>A web-based art gallery</p>
            </div>
          </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);