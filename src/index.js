import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
<<<<<<< HEAD
root.render(  
    <BrowserRouter>
      <App />
    </BrowserRouter>  
=======
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
>>>>>>> b6dfb0901bb5bc2d55476775daa12f4ff40abdbd
);
reportWebVitals();
