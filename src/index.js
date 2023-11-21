import React from 'react';
import ReactDOM from 'react-dom/client';

// dev & test & perf
import reportWebVitals from './reportWebVitals';
import { Snake} from './snake/ui';


const root = ReactDOM.createRoot(document.getElementById('root'));

//GROUPING DATA

root.render(
  <React.StrictMode>

    {/* PARENTCONTEXT */}
    
    <Snake />
    
  
    {/* PARENTCONTEXT */}

  </React.StrictMode>
);

// dev & test & perf
reportWebVitals();
