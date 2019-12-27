import React from 'react';

import springImg from '../../assets/images/spring.jpg';
import autumnImg from '../../assets/images/autumn.jpg';
import summer from '../../assets/images/summer.jpg';
import winter from '../../assets/images/winter.jpg';
import './styles.scss';

const Hero = () => (
  <>
    <div
      className="hero"
      style={{
        backgroundImage: `url(${springImg})`
      }}
    />
    <div
      className="hero"
      style={{
        backgroundImage: `url(${summer})`
      }}
    />
    <div
      className="hero"
      style={{
        backgroundImage: `url(${autumnImg})`
      }}
    />
    <div
      className="hero"
      style={{
        backgroundImage: `url(${winter})`
      }}
    />
  </>
);

export default Hero;
