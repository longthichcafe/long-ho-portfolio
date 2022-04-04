import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';


const About = () => {
  return (
    <>
      <div className="app__profiles">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <img src={images.frontend} alt='frontend' />
            <h2 className="bold-text" style={{ marginTop: 20 }}>Frontend Design</h2>
            <p className="p-text" style={{ marginTop: 10 }}>Efficent Design Language</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <img src={images.backend} alt='backend' />
            <h2 className="bold-text" style={{ marginTop: 20 }}>Backend Developer</h2>
            <p className="p-text" style={{ marginTop: 10 }}>Varies Databases</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <img src={images.data} alt='data' />
            <h2 className="bold-text" style={{ marginTop: 20 }}>Data Analyst</h2>
            <p className="p-text" style={{ marginTop: 10 }}>Data Visualisation</p>
          </motion.div>
   
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <img src={images.cloud} alt='cloud' />
            <h2 className="bold-text" style={{ marginTop: 20 }}>Cloud Computing</h2>
            <p className="p-text" style={{ marginTop: 10 }}>AWS And More</p>
          </motion.div>
      </div>
    </>
)
}
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
)