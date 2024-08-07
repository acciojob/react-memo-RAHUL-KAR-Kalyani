// src/ReactMemo.js
import React from 'react';

const ReactMemo = () => {
  console.log('Rendering ReactMemo');
  
  return <p>This is a memoized component.</p>;
};

export default React.memo(ReactMemo);
