import React from 'react';

import Nav from './Nav';
import './styles.scss';

const HorizontalSection = () => (
  <div id="section2" className="section2">
    <Nav />
    <div className="section2__item">page 1</div>
    <div className="section2__item">page 2</div>
    <div className="section2__item">page 3</div>
    <div className="section2__item">page 4</div>
  </div>
);

export default HorizontalSection;
