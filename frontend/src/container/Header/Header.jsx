import React from 'react';
import { motion } from 'framer-motion';

// import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div>
            <h1 className="head-text">Long Ho</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Full-Stack Web Developer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5}}
      className="app__header-img"
    >
      <p>
        I'm a Monash University Freshman<br/>
        Major in Software Development <br/>
        Minor in Computer Network and Security
      </p>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.javascript, images.react, images.python].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="skills" />
        </div>
      ))}
    </motion.div>
  </div>
);
export default Header
// export default AppWrap(Header, 'home');