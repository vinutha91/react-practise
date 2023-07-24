import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ParentComponent } from './React.memo()/ParentComponent';
import { ParentComponentWithUseMemo } from './useMemo()/ParentComponent';
import { ParentComponentForCallback } from './useCallback()/example1/ParentComponentForCallback';
import { ParentComponentWithoutuseCallback } from './useCallback()/example2/ParentComponentWithoutuseCallback';
import { ParentComponentWithUseCallback } from './useCallback()/example2/ParentComponentWithUseCallback';
import { UseCallback } from './useCallback()/example3/UseCallback';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <ParentComponentWithUseMemo />
      <ParentComponentForCallback />
      
      <br/>
      
      <br/>
       <ParentComponentWithoutuseCallback />{/** useCallback example */}
       <br/>
       <br/>
       <ParentComponentWithUseCallback />
       {/*********************/}
       <br/>
       <br/>
       <UseCallback />
    </div>
  );
}

export default App;
