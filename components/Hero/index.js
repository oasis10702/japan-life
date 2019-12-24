import React from 'react';
import springImg from '../../assets/images/spring.jpg';

import './styles.scss';

const Hero = () => (
  <div
    className="hero"
    style={{
      backgroundImage: `url(${springImg})`,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover'
    }}
  />
);

export default Hero;
