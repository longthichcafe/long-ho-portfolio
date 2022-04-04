import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Contact = () => (
  <div className="app__social">
    <div>
      <a href='https://www.facebook.com/want.a.cafe/'>
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/'>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default Contact;