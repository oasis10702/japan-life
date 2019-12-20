import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Wrapper = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/cat.ico" />
    </Head>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Wrapper;
