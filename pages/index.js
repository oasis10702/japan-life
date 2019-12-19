import React from 'react';
import Head from 'next/head';
import ReactFullpage from '@fullpage/react-fullpage';

import HorizontalSection from '../components/HorizontalSection';

const Home = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    render={() => (
      <ReactFullpage.Wrapper>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/cat.ico" />
        </Head>
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
);

export default Home;
