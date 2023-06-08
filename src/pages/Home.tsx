import React, { CSSProperties } from 'react';

function Home() {
  return <div style={containerStyles}>Hello World</div>;
}

export default Home;

const containerStyles: CSSProperties = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
