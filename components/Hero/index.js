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
        easing: 'linear',
        loop: true
      })
      .add({
        targets: '.hero',
        opacity: [
          { value: 1, duration: 250 },
          { value: 1, duration: 5000 },
          { value: 0, duration: 500 }
        ]
      })
      .add({
        targets: '.hero2',
        opacity: [
          { value: 1, duration: 250 },
          { value: 1, duration: 5000 },
          { value: 0, duration: 500 }
        ]
      })
      .add({
        targets: '.hero3',
        opacity: [
          { value: 1, duration: 250 },
          { value: 1, duration: 5000 },
          { value: 0, duration: 500 }
        ]
      })
      .add({
        targets: '.hero4',
        opacity: [
          { value: 1, duration: 250 },
          { value: 1, duration: 5000 },
          { value: 0, duration: 500 }
        ]
      });
    carousel.play();
  }, []);

  return (
    <>
      <div
        className="hero4"
        style={{
          backgroundImage: `url(${winter})`,
          width: '100%',
          height: '100%',
          opacity: 0,
          backgroundSize: 'cover'
        }}
      />
      <div
        className="hero3"
        style={{
          backgroundImage: `url(${autumnImg})`,
          width: '100%',
          height: '100%',
          opacity: 0,
          backgroundSize: 'cover'
        }}
      />
      <div
        className="hero2"
        style={{
          backgroundImage: `url(${summer})`,
          width: '100%',
          height: '100%',
          opacity: 0,
          backgroundSize: 'cover'
        }}
      />
      <div
        className="hero"
        style={{
          backgroundImage: `url(${springImg})`,
          width: '100%',
          height: '100%',
          opacity: 0,
          backgroundSize: 'cover'
        }}
      />
    </>
  );
};

export default Hero;
