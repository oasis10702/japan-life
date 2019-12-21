import React from 'react';
import img from '../../assets/images/hero.jpg';

import './styles.scss';

const Hero = () => (
  <div
    className="hero"
    style={{
      backgroundImage: `url(${img})`,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover'
    }}
  />
);

export default Hero;
