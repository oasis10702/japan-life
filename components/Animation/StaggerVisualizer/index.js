import React from 'react';
import times from 'lodash/times';
import Typography from '@material-ui/core/Typography';
import anime from 'animejs';

import './styles.scss';

const StaggerVisualizer = () => {
  const grid = [20, 20];

  const handlePlayAnimation = () => {
    const staggerVisualizer = anime
      .timeline({
        targets: '.staggerVisualizer div',
        easing: 'easeInOutSine',
        delay: anime.stagger(50),
        loop: false,
        autoplay: false
      })
      .add({
        targets: '.staggerVisualizer',
        translateY: [
          { value: 300, duration: 2000, easing: 'easeOutBounce' },
          { value: 0, duration: 1000, easing: 'easeInOutQuint' }
        ],
        scale: 3
      })
      .add({
        targets: '.staggerVisualizer div',
        translateX: [
          {
            value: anime.stagger('-.1rem', {
              grid,
              from: 'center',
              axis: 'x'
            })
          },
          {
            value: anime.stagger('.1rem', {
              grid,
              from: 'center',
              axis: 'x'
            })
          }
        ],
        translateY: [
          {
            value: anime.stagger('-.1rem', {
              grid,
              from: 'center',
              axis: 'y'
            })
          },
          {
            value: anime.stagger('.1rem', {
              grid,
              from: 'center',
              axis: 'y'
            })
          }
        ],
        borderRadius: '50%',
        duration: 1000,
        scale: 0.5,
        delay: anime.stagger(100, { grid, from: 'center' })
      })
      .add({
        translateX: () => anime.random(-10, 10),
        translateY: () => anime.random(-10, 10),
        delay: anime.stagger(8, { from: 'last' })
      })
      .add({
        translateX: 0,
        translateY: 0,
        scale: 1,
        borderRadius: '0%',
        background: '#fedfe1',
        delay: anime.stagger(100, { grid, from: 'center' })
      })
      .add({
        targets: '.staggerVisualizer__text',
        opacity: 1,
        display: 'block',
        duration: 1000
      });

    staggerVisualizer.play();
  };

  return (
    <>
      <div className="staggerVisualizer" onClick={handlePlayAnimation}>
        {times(grid[0] * grid[1], () => (
          <div />
        ))}
        <Typography
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            opacity: 0,
            transform: 'translate(-50%, -50%)'
          }}
          variant="h4"
          className="staggerVisualizer__text"
        >
          LETS TRAVEL
        </Typography>
      </div>
    </>
  );
};

export default StaggerVisualizer;
