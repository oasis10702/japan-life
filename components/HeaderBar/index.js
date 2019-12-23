import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const HeaderBar = () => {
  // material-ui styles with nextJS will not match className at client side render
  // ref: https://github.com/mui-org/material-ui/issues/18018
  const buttonStyles = { color: '#fff', marginRight: 16 };

  return (
    <AppBar style={{ backgroundColor: 'transparent' }}>
      <Toolbar
        style={{
          justifyContent: 'center'
        }}
      >
        <Button style={buttonStyles}>HOME</Button>
        <Button style={buttonStyles}>STORY</Button>
        <Button style={buttonStyles}>ABOUT</Button>
        <Button style={buttonStyles}>CONTACT</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
