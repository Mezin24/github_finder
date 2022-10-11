import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GithubProvider } from './context/github_context/GithubContext';
import { AlertProvider } from './context/alert_context/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GithubProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </GithubProvider>
    </Router>
  </React.StrictMode>
);
