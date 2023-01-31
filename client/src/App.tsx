import React from 'react';
import './style.css';
import LeftBlock from './components/LeftBlock';
import CenterContainer from './components/CenterContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <LeftBlock/>
        <CenterContainer/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
