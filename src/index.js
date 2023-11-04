import React from 'react';
import ReactDOM from 'react-dom/client';

// dev & test & perf
import reportWebVitals from './reportWebVitals';
import { SnakeHead } from './snake/ui';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <SnakeHead /> */}
    <SnakeHead dir="down" />

  </React.StrictMode>
);

// dev & test & perf
reportWebVitals();
