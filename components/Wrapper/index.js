import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Wrapper = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/cat.ico" />
    </Head>
    <AppBar position="fixed">
      <Toolbar />
    </AppBar>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Wrapper;
