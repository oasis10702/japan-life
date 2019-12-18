import React from 'react';
import Head from 'next/head';
import ReactFullpage from '@fullpage/react-fullpage';

const Home = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    render={({ fullpageApi }) => (
      <ReactFullpage.Wrapper>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="section">
          <p>Section 1 (welcome to fullpage.js)</p>
          <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
        </div>
        <div className="section">
          <p>Section 2</p>
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
