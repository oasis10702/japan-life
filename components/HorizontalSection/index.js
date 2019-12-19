import React from 'react';
import Fab from '@material-ui/core/Fab';

import './styles.scss';

const HorizontalSection = () => {
  const handleScroll = page => {
    const ele = document.getElementById('section2');
    ele.scrollTo({
      left: window.innerWidth * page,
      behavior: 'smooth'
    });
  };

  return (
    <div id="section2" className="section2">
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '5%',
          transform: 'translateX(-50%)'
        }}
      >
        <Fab size="small" style={{ marginRight: 4 }} onClick={() => handleScroll(0)} />
        <Fab size="small" style={{ marginRight: 4 }} onClick={() => handleScroll(1)} />
        <Fab size="small" style={{ marginRight: 4 }} onClick={() => handleScroll(2)} />
        <Fab size="small" style={{ marginRight: 4 }} onClick={() => handleScroll(3)} />
      </div>
      <div className="section2__item">page 1</div>
      <div className="section2__item">page 2</div>
      <div className="section2__item">page 3</div>
      <div className="section2__item">page 4</div>
    </div>
  );
};

export default HorizontalSection;
