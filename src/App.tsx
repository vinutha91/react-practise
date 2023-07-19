import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ParentComponent } from './React.memo()/ParentComponent';
import { ParentComponentWithUseMemo } from './useMemo()/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <ParentComponentWithUseMemo />
    </div>
  );
}

export default App;
