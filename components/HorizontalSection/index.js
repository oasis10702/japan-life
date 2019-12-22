import React from 'react';

import Nav from './Nav';
import ImageLightbox from '../ImageLightbox';
import tokyoImage from '../../assets/images/tokyo.jpg';
import kobeImage from '../../assets/images/kobe.jpg';
import monjikoImage from '../../assets/images/monjiko.jpg';
import './styles.scss';

const HorizontalSection = () => (
  <div id="section2" className="section2">
    <Nav />
    <div className="section2__item">
      <ImageLightbox image={tokyoImage} title="TOKYO" />
      <ImageLightbox image={kobeImage} title="KOBE" />
      <ImageLightbox image={monjikoImage} title="MONJIKO" />
    </div>
    <div className="section2__item">
      <ImageLightbox image={tokyoImage} />
      <ImageLightbox image={tokyoImage} />
      <ImageLightbox image={tokyoImage} />
    </div>
    <div className="section2__item">page 3</div>
    <div className="section2__item">page 4</div>
  </div>
);

export default HorizontalSection;
