const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const compose = require('next-compose');

module.exports = compose([
  [withImages],
  [withSass],
  {
    webpack: config => config
  }
]);
