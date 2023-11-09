import React from 'react';
import ReactDOM from 'react-dom/client';

// dev & test & perf
import reportWebVitals from './reportWebVitals';
import { SnakeHead, SnakeTail } from './snake/ui';

const root = ReactDOM.createRoot(document.getElementById('root'));

//GROU[PING DATA
let headData = {
  dir:"up",
  top: 150,
  left:100,
  dead:true
}

let tailData = {
  dir:"down",
  bottom: 100,
  left:100,
  dead:true
}
 
root.render(
  <React.StrictMode>

    {/* PARENTCONTEXT */}
    
    <SnakeHead {...headData} /> 
    {/* <SnakeHead dir="up" top={100} left={100} /> not good approach */}
    {/* <SnakeHead data={head} /> */}
    <SnakeTail {...tailData}/>
    {/* <SnakeTail /> */}
    
  
    {/* PARENTCONTEXT */}

  </React.StrictMode>
);

// dev & test & perf
reportWebVitals();
