import React from 'react';
import shortid from 'shortid';

import springImg from '../../assets/images/spring.jpg';
import autumnImg from '../../assets/images/autumn.jpg';
import summerImg from '../../assets/images/summer.jpg';
import winterImg from '../../assets/images/winter.jpg';
import './styles.scss';

const renderImage = img => (
  <div
    className="hero"
    style={{
      backgroundImage: `url(${img})`
    }}
    key={shortid.generate()}
  />
);

const Hero = () => [springImg, summerImg, autumnImg, winterImg].map(img => renderImage(img));

export default Hero;
