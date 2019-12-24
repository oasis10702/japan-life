import React, { useState } from 'react';
import shortid from 'shortid';

import './styles.scss';

const Nav = () => {
  const [curPage, setCurPage] = useState(0);

  const handleScroll = page => {
    const ele = document.getElementById('section2');
    setCurPage(page);
    ele.scrollTo({
      left: window.innerWidth * page,
      behavior: 'smooth'
    });
  };

  const renderButton = page => (
    <div
      className="nav__button"
      style={{
        transform: curPage === page ? 'scale(1.5)' : 'none'
      }}
      key={shortid.generate()}
      onClick={() => handleScroll(page)}
    />
  );

  return <div className="nav">{[0, 1, 2, 3].map(i => renderButton(i))}</div>;
};

export default Nav;
