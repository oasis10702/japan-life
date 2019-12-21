import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import HorizontalSection from '../components/HorizontalSection';
import Wrapper from '../components/Wrapper';
import Opening from '../components/Animation/Opening';
import { PAGE_TITLE } from '../constants';

const Home = () => (
  <>
    <Opening />
    <Wrapper title={PAGE_TITLE.HOME}>
      <ReactFullpage
        scrollingSpeed={1000}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
            </div>
            <div className="section">
              <HorizontalSection />
            </div>
            <div className="section">
              <p>Section 3</p>
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

export default Home;
