import React from 'react';
import './App.css';
import Quotes from './components/quotes';
import Timer from './components/timer';
import Background from './components/background';





const App =()=>{
  
  
return (
    <div className="App"  >
      <Background />
       <Timer />
       <Quotes /> 
 
 
     
    </div>
  );
}


export default App;
