import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import HeaderBar from '../HeaderBar';

const Wrapper = props => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/cat.ico" />
      </Head>
      <HeaderBar />
      {children}
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Wrapper;
