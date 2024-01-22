import React from 'react';
import ReactDOM from 'react-dom/client';

// dev & test & perf
import reportWebVitals from './reportWebVitals';
import './app.scss'

import { Game} from './game/ui';



const game = {

  score:0,
  state: "started",

  children: [
    {
      name: "snake",
      children: [
          { name: "head", dir: "up", coord : { top:100, left:200} },
          { name: "body", dir: "up", coord : { top:150, left:200} },
          { name: "tail", dir: "down", coord : { top:200, left:200} },
      ]
    },

    {
      name: "apple",
      coord: {top:50, left:50}
    },
  ]
  
}




const root = ReactDOM.createRoot(document.getElementById('root'));

//GROUPING DATA

root.render(
  <React.StrictMode>

    <Game data={game}/>
    
  </React.StrictMode>
);






// dev & test & perf
reportWebVitals();
