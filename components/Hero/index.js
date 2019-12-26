import React, { useEffect } from 'react';
import anime from 'animejs';

import springImg from '../../assets/images/spring.jpg';
import autumnImg from '../../assets/images/autumn.jpg';
import summer from '../../assets/images/summer.jpg';
import winter from '../../assets/images/winter.jpg';
import './styles.scss';

const Hero = () => {
  useEffect(() => {
    const carousel = anime
      .timeline({
        autoplay: false,
        delay: (_, i) => i * 5000,
        easing: 'linear',
        loop: true
      })
      .add({
        targets: '.hero',
        opacity: [
          { value: 1, duration: 1000 },
          { value: 1, duration: 4000 },
          { value: 0, duration: 1000 }
        ],
        filter: [
          { value: 'opacity(100)', duration: 1000 },
          { value: 'opacity(100)', duration: 4000 },
          { value: 'opacity(0)', duration: 1000 }
        ]
      });
    carousel.play();
  }, []);

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${springImg})`,
          width: '100%',
          height: '100%',
          opacity: 0,
          backgroundSize: 'cover',
          filter: 'alpha(0)'
        }}
      />
      <div
        className="hero"
        style={{
          backgroundImage: `url(${summer})`,
          width: '100%',
          height: '100%',
          opacity: 0,
          backgroundSize: 'cover',
          filter: 'alpha(0)'
        }}
      />
      <div
        className="hero"
        style={{
          backgroundImage: `url(${autumnImg})`,
          width: '100%',
          height: '100%',
          opacity: 0,
          backgroundSize: 'cover',
          filter: 'alpha(0)'
        }}
      />
      <div
        className="hero"
        style={{
          backgroundImage: `url(${winter})`,
          width: '100%',
          height: '100%',
          opacity: 0,
          backgroundSize: 'cover',
          filter: 'alpha(0)'
        }}
      />
    </>
  );
};

export default Hero;
