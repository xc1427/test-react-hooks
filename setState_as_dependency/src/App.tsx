import React, { useState, useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [ foo, setFoo ] = useState();
  const [s, forceUpdate] = useReducer(s => s + 1, 0);
  useEffect(() => {
    console.log('re execute');
  }, [setFoo]);
  return (
    <div className="App" onClick={() => { forceUpdate({}); console.log('debug cxi', 'clicked');}}>
      aa {s}
    </div>
  );
}

export default App;
