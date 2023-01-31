import React from 'react';
import './style.css';
import LeftBlock from './components/LeftBlock';
import CenterContainer from './components/CenterContainer';

function App() {
  return (
    <div className="wrapper">
      <LeftBlock/>
      <CenterContainer/>
    </div>
  );
}

export default App;
