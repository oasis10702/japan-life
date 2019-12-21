import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

const ImageLightbox = ({ image, title }) => (
  <div
    className="imageLightbox"
    style={{
      width: '33.33%',
      height: '40%',
      position: 'relative'
    }}
  >
    <Typography
      className="imageLightbox__text"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        zIndex: 2
      }}
      variant="h5"
    >
      {title}
    </Typography>
    <div
      className="imageLightbox__photo"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      }}
    />
  </div>
);

ImageLightbox.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default ImageLightbox;
