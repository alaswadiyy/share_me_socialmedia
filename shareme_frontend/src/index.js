import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleLogin clientId='624702655163-tss75arpd77i31bsr4uaptjgat2ut8dl.apps.googleusercontent.com'>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </GoogleLogin>
  
  
);

