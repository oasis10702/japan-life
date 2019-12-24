import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import HorizontalSection from '../components/HorizontalSection';
import Wrapper from '../components/Wrapper';
import Opening from '../components/Animation/Opening';
import Hero from '../components/Hero';
import About from '../components/About';
import { PAGE_TITLE } from '../constants';

const Home = () => {
  const handleHeadBarBackgroundColor = des => {
    const headerBar = document.getElementById('headerBar');
    headerBar.style.backgroundColor =
      des.index === 0 ? 'transparent' : 'rgba(0, 0, 0, 0.5)';
  };

  return (
    <>
      <Opening />
      <Wrapper title={PAGE_TITLE.HOME}>
        <ReactFullpage
          scrollingSpeed={1000}
          keyboardScrolling
          onLeave={(_, des) => handleHeadBarBackgroundColor(des)}
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Hero />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <HorizontalSection />
              </div>
              <div className="section">
                <p>Section 4</p>
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </Wrapper>
    </>
  );
};

export default Home;
