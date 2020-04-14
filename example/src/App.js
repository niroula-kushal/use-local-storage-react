import React, { useEffect } from 'react'
import { useLocalStorage } from '@rehmat-falcon/use-local-storage';
import "./index.css";
import First from './First';
import Second from './Second';

const App = () => {
  return (
    <>
      <First />
      <Second />
    </>
  );
};
export default App;