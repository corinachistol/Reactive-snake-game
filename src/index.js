import React from 'react';
import ReactDOM from 'react-dom/client';

// dev & test & perf
import reportWebVitals from './reportWebVitals';
import { SnakeHead, SnakeTail } from './snake/ui';


const root = ReactDOM.createRoot(document.getElementById('root'));

//GROUPING DATA

root.render(
  <React.StrictMode>

    {/* PARENTCONTEXT */}
    
    <SnakeHead top={100} left={200} name='head' />
    <SnakeTail top={200} left={200} name='tail' />
    
  
    {/* PARENTCONTEXT */}

  </React.StrictMode>
);

// dev & test & perf
reportWebVitals();
