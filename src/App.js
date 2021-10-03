import React from 'react';

import './App.css';
import Counter from './components/counter';
import DataLoad from './components/Dataload';
import HookCounter from './components/HookCounter';

function App() {
   return (
      <div className="App">
         <DataLoad/>
      </div>
   );
}

export default App;