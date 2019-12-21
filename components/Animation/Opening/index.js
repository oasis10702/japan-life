import React, { useState } from 'react';

import Sign from './Sign';

const Opening = () => {
  const [stop, setStop] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: stop ? 'none' : 'block',
        visibility: stop ? 'hidden' : 'visible',
        position: 'fixed',
        zIndex: 9999,
        backgroundColor: '#000'
      }}
    >
      <Sign setStop={setStop} />
    </div>
  );
};

export default Opening;
