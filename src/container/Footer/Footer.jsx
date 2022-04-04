import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {

  return (
    <>
      <h2 className="head-text">My Contacts</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <a href="mailto:longhaiho123@icloud.com" className="p-text">longhaiho123@icloud.com</a>
        </div>
        <div className="app__footer-card">
          <a href="tel:+61406370394" className="p-text">(+61) 406 370 394</a>
        </div>
      </div>
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);