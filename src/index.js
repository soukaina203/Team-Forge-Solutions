import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter   as Router, Route, Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Welcome from './component/Welcome';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
 <Routes>
<Route key={1} path='/' element={<Welcome/>}/>
<Route key={2} path='/Home' element={<App/>}/>
 </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
